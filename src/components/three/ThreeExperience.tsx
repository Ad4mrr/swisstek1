'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AdaptiveDpr, ContactShadows, RoundedBox } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

type PartName =
  | 'foundation'
  | 'floor'
  | 'walls'
  | 'wet-area'
  | 'roof'
  | 'frames'
  | 'glass'
  | 'terrace'
  | 'landscape'
  | 'water';

type PartStage = 'floor' | 'walls' | 'frames' | 'roof' | 'landscape';
type HighlightArea = 'wet-area' | 'floor' | 'walls' | 'frames' | 'roof' | 'landscape';

type PartDefinition = {
  name: PartName;
  stage: PartStage;
  highlight: HighlightArea;
  size: [number, number, number];
  initial: [number, number, number];
  exploded: [number, number, number];
  final: [number, number, number];
  color: string;
  roughness?: number;
  metalness?: number;
  opacity?: number;
};

type StageTiming = {
  explode: readonly [number, number];
  rebuild: readonly [number, number];
  turn: number;
};

const STAGE_TIMINGS: Record<PartStage, StageTiming> = {
  roof: { explode: [.20, .26], rebuild: [.87, .92], turn: -.08 },
  frames: { explode: [.26, .32], rebuild: [.82, .87], turn: .055 },
  floor: { explode: [.32, .38], rebuild: [.70, .76], turn: -.035 },
  walls: { explode: [.38, .45], rebuild: [.76, .82], turn: .04 },
  landscape: { explode: [.40, .45], rebuild: [.92, .96], turn: .025 },
};

const HIGHLIGHT_SEQUENCE: readonly HighlightArea[] = [
  'wet-area',
  'floor',
  'floor',
  'walls',
  'floor',
  'roof',
  'floor',
  'frames',
  'landscape',
  'floor',
  'frames',
  'floor',
  'floor',
];

const HIGHLIGHT_FOCUS: Record<HighlightArea, THREE.Vector3> = {
  'wet-area': new THREE.Vector3(-3.2, .2, 3.8),
  floor: new THREE.Vector3(-3.2, -1.55, 2.15),
  walls: new THREE.Vector3(-2.8, 1.2, -2.2),
  frames: new THREE.Vector3(5.35, 1, 2.2),
  roof: new THREE.Vector3(0, 6.1, 0),
  landscape: new THREE.Vector3(-7, -.25, 4.8),
};

const parts: PartDefinition[] = [
  { name: 'foundation', stage: 'floor', highlight: 'floor', size: [8.7, .35, 5.5], initial: [0, -.8, 0], exploded: [0, -3.8, 0], final: [.25, -.8, 0], color: '#575852' },
  { name: 'floor', stage: 'floor', highlight: 'floor', size: [7.8, .22, 4.6], initial: [.2, -.48, .1], exploded: [-4.8, -2.1, .1], final: [.25, -.45, .1], color: '#b2a28c' },
  { name: 'walls', stage: 'walls', highlight: 'walls', size: [2.8, 2.6, 4.1], initial: [-2.1, .9, 0], exploded: [-6.4, 1.2, 0], final: [-2.3, 1.05, -.1], color: '#d8d5cc' },
  { name: 'walls', stage: 'walls', highlight: 'walls', size: [3.8, 2.2, .28], initial: [1.2, .7, -1.9], exploded: [1.2, 1.2, -5.5], final: [1.35, .8, -1.9], color: '#ece9df' },
  { name: 'wet-area', stage: 'walls', highlight: 'wet-area', size: [2.05, .08, 1.5], initial: [-2.05, -.32, .85], exploded: [-3.2, .15, 3.8], final: [-2.15, -.3, .82], color: '#6e9492', roughness: .4, opacity: .78 },
  { name: 'roof', stage: 'roof', highlight: 'roof', size: [8.5, .28, 5.1], initial: [0, 2.45, 0], exploded: [0, 6.2, 0], final: [.15, 2.85, -.1], color: '#323330', metalness: .3 },
  { name: 'frames', stage: 'frames', highlight: 'frames', size: [.18, 2.1, .18], initial: [.05, .75, 2.18], exploded: [4.7, 1, 2.18], final: [-.15, .95, 2.18], color: '#232626', metalness: .85 },
  { name: 'frames', stage: 'frames', highlight: 'frames', size: [.18, 2.1, .18], initial: [1.25, .75, 2.18], exploded: [5.7, 1, 2.18], final: [1.25, .95, 2.18], color: '#232626', metalness: .85 },
  { name: 'frames', stage: 'frames', highlight: 'frames', size: [.18, 2.1, .18], initial: [2.45, .75, 2.18], exploded: [6.7, 1, 2.18], final: [2.65, .95, 2.18], color: '#232626', metalness: .85 },
  { name: 'glass', stage: 'frames', highlight: 'frames', size: [3.6, 2, .08], initial: [1.25, .78, 2.15], exploded: [2.2, .9, 6.2], final: [1.25, .98, 2.15], color: '#83a5a6', metalness: .1, roughness: .12, opacity: .52 },
  { name: 'terrace', stage: 'floor', highlight: 'floor', size: [5.3, .2, 2.1], initial: [1.5, -.48, 3.05], exploded: [-1.5, -1.7, 5.7], final: [1.5, -.45, 3.05], color: '#aba89e' },
  { name: 'landscape', stage: 'landscape', highlight: 'landscape', size: [2.1, .12, 4.8], initial: [-5, -.68, .2], exploded: [-7.2, -.7, 4.9], final: [-5.1, -.68, .2], color: '#5e6b48' },
  { name: 'water', stage: 'landscape', highlight: 'landscape', size: [2.3, .08, 4.4], initial: [4.8, -.62, .1], exploded: [7.3, -.6, 4.4], final: [4.9, -.62, .1], color: '#5d969b', roughness: .05, opacity: .8 },
];

function smoothstep(min: number, max: number, value: number) {
  const x = THREE.MathUtils.clamp((value - min) / (max - min), 0, 1);
  return x * x * (3 - 2 * x);
}

function highlightStrength(area: HighlightArea, value: number) {
  const duration = .25 / HIGHLIGHT_SEQUENCE.length;
  return HIGHLIGHT_SEQUENCE.reduce((strongest, highlightedArea, index) => {
    if (highlightedArea !== area) return strongest;
    const start = .45 + index * duration;
    const end = start + duration;
    const fade = duration * .22;
    const envelope = smoothstep(start, start + fade, value) * (1 - smoothstep(end - fade, end, value));
    const pulse = .88 + Math.sin(((value - start) / duration) * Math.PI * 4) * .12;
    return Math.max(strongest, envelope * pulse);
  }, 0);
}

function compositionX(value: number) {
  if (value <= .20) return 0;
  if (value <= .30) return THREE.MathUtils.lerp(0, 2.7, smoothstep(.20, .30, value));
  if (value <= .45) return 2.7;
  if (value <= .55) return THREE.MathUtils.lerp(2.7, -2.55, smoothstep(.45, .55, value));
  if (value <= .70) return -2.55;
  if (value <= .82) return THREE.MathUtils.lerp(-2.55, 0, smoothstep(.70, .82, value));
  return 0;
}

function compositionY(value: number) {
  if (value <= .20) return .2;
  if (value <= .45) return THREE.MathUtils.lerp(.2, .05, smoothstep(.20, .32, value));
  if (value <= .70) return THREE.MathUtils.lerp(.05, .26, smoothstep(.45, .55, value));
  return THREE.MathUtils.lerp(.26, .2, smoothstep(.70, .82, value));
}

function compositionScale(value: number) {
  if (value <= .20) return 1;
  if (value <= .32) return THREE.MathUtils.lerp(1, .9, smoothstep(.20, .32, value));
  if (value <= .45) return .9;
  if (value <= .55) return THREE.MathUtils.lerp(.9, .82, smoothstep(.45, .55, value));
  if (value <= .70) return .82;
  if (value <= .82) return THREE.MathUtils.lerp(.82, .94, smoothstep(.70, .82, value));
  return THREE.MathUtils.lerp(.94, 1, smoothstep(.82, .96, value));
}

function AnimatedPart({ part, progress }: { part: PartDefinition; progress: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.MeshStandardMaterial>(null);
  const target = useMemo(() => new THREE.Vector3(), []);
  const initial = useMemo(() => new THREE.Vector3(...part.initial), [part.initial]);
  const exploded = useMemo(() => new THREE.Vector3(...part.exploded), [part.exploded]);
  const final = useMemo(() => new THREE.Vector3(...part.final), [part.final]);

  useFrame((_, delta) => {
    if (!ref.current) return;

    const value = THREE.MathUtils.clamp(progress, 0, 1);
    const timing = STAGE_TIMINGS[part.stage];
    const explode = smoothstep(timing.explode[0], timing.explode[1], value);
    const rebuild = smoothstep(timing.rebuild[0], timing.rebuild[1], value);
    const explodedAmount = value < timing.rebuild[0] ? explode : 1 - rebuild;

    if (value < timing.rebuild[0]) target.lerpVectors(initial, exploded, explode);
    else target.lerpVectors(exploded, final, rebuild);

    const damping = 1 - Math.exp(-delta * 8);
    ref.current.position.lerp(target, damping);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, timing.turn * explodedAmount, damping);

    if (material.current) {
      const highlight = highlightStrength(part.highlight, value);
      const targetIntensity = highlight * (part.name === 'glass' || part.name === 'water' ? 1.15 : 1.7);
      material.current.emissiveIntensity = THREE.MathUtils.lerp(material.current.emissiveIntensity, targetIntensity, 1 - Math.exp(-delta * 12));
    }
  });

  return (
    <RoundedBox ref={ref} args={part.size} radius={part.name === 'water' ? .08 : .035} smoothness={2} castShadow receiveShadow>
      <meshStandardMaterial
        ref={material}
        color={part.color}
        emissive="#c20e2d"
        emissiveIntensity={0}
        roughness={part.roughness ?? .72}
        metalness={part.metalness ?? 0}
        transparent={Boolean(part.opacity)}
        opacity={part.opacity ?? 1}
      />
    </RoundedBox>
  );
}

function GardenDetails({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null);
  const exploded = useMemo(() => new THREE.Vector3(-7.2, -.2, 4.9), []);
  const initial = useMemo(() => new THREE.Vector3(-5.1, -.2, .2), []);
  const final = useMemo(() => new THREE.Vector3(-5.1, -.2, .2), []);
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const value = THREE.MathUtils.clamp(progress, 0, 1);
    const timing = STAGE_TIMINGS.landscape;
    if (value < timing.rebuild[0]) {
      target.lerpVectors(initial, exploded, smoothstep(timing.explode[0], timing.explode[1], value));
    } else {
      target.lerpVectors(exploded, final, smoothstep(timing.rebuild[0], timing.rebuild[1], value));
    }
    group.current.position.lerp(target, 1 - Math.exp(-delta * 8));
  });

  return (
    <group ref={group}>
      {[[-.45, .2, -1.35], [.35, .32, -.45], [-.2, .23, .55], [.4, .18, 1.4]].map((position, index) => (
        <mesh key={index} position={position as [number, number, number]} castShadow>
          <dodecahedronGeometry args={[index % 2 ? .33 : .25, 0]} />
          <meshStandardMaterial color={index % 2 ? '#7f8765' : '#a49c87'} roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

function HighlightLight({ progress }: { progress: number }) {
  const light = useRef<THREE.PointLight>(null);
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    if (!light.current) return;
    const value = THREE.MathUtils.clamp(progress, 0, 1);
    const duration = .25 / HIGHLIGHT_SEQUENCE.length;
    const index = THREE.MathUtils.clamp(Math.floor((value - .45) / duration), 0, HIGHLIGHT_SEQUENCE.length - 1);
    const area = HIGHLIGHT_SEQUENCE[index];
    const strength = value >= .45 && value <= .70 ? highlightStrength(area, value) : 0;
    target.copy(HIGHLIGHT_FOCUS[area]);
    light.current.position.lerp(target, 1 - Math.exp(-delta * 10));
    light.current.intensity = THREE.MathUtils.lerp(light.current.intensity, strength * 18, 1 - Math.exp(-delta * 12));
  });

  return <pointLight ref={light} color="#d30d32" intensity={0} distance={8} decay={2} />;
}

const CAMERA_CENTER = new THREE.Vector3(12, 8, 15);
const CAMERA_RIGHT = new THREE.Vector3(14.5, 9.2, 18.5);
const CAMERA_LEFT = new THREE.Vector3(10.5, 7.25, 17.25);
const CAMERA_REBUILD = new THREE.Vector3(11.8, 7.4, 16.2);
const CAMERA_FINAL = new THREE.Vector3(10.6, 6.7, 14.6);
const LOOK_CENTER = new THREE.Vector3(0, .65, 0);
const LOOK_RIGHT = new THREE.Vector3(1.65, .78, 0);
const LOOK_LEFT = new THREE.Vector3(-1.75, .62, .15);
const LOOK_REBUILD = new THREE.Vector3(0, .72, 0);
const LOOK_FINAL = new THREE.Vector3(0, .78, .12);

function CameraRig({ progress }: { progress: number }) {
  const { camera, size } = useThree();
  const cameraTarget = useMemo(() => new THREE.Vector3(), []);
  const lookTarget = useMemo(() => new THREE.Vector3(), []);
  const dampedLookAt = useMemo(() => new THREE.Vector3(0, .65, 0), []);

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    camera.fov = size.width < 640 ? 42 : size.width < 960 ? 38 : 34;
    camera.updateProjectionMatrix();
  }, [camera, size.width]);

  useFrame((_, delta) => {
    const value = THREE.MathUtils.clamp(progress, 0, 1);

    if (value <= .20) {
      cameraTarget.copy(CAMERA_CENTER);
      lookTarget.copy(LOOK_CENTER);
    } else if (value <= .32) {
      const mix = smoothstep(.20, .32, value);
      cameraTarget.lerpVectors(CAMERA_CENTER, CAMERA_RIGHT, mix);
      lookTarget.lerpVectors(LOOK_CENTER, LOOK_RIGHT, mix);
    } else if (value <= .45) {
      cameraTarget.copy(CAMERA_RIGHT);
      lookTarget.copy(LOOK_RIGHT);
    } else if (value <= .55) {
      const mix = smoothstep(.45, .55, value);
      cameraTarget.lerpVectors(CAMERA_RIGHT, CAMERA_LEFT, mix);
      lookTarget.lerpVectors(LOOK_RIGHT, LOOK_LEFT, mix);
    } else if (value <= .70) {
      cameraTarget.copy(CAMERA_LEFT);
      lookTarget.copy(LOOK_LEFT);
    } else if (value <= .82) {
      const mix = smoothstep(.70, .82, value);
      cameraTarget.lerpVectors(CAMERA_LEFT, CAMERA_REBUILD, mix);
      lookTarget.lerpVectors(LOOK_LEFT, LOOK_REBUILD, mix);
    } else {
      const mix = smoothstep(.82, 1, value);
      cameraTarget.lerpVectors(CAMERA_REBUILD, CAMERA_FINAL, mix);
      lookTarget.lerpVectors(LOOK_REBUILD, LOOK_FINAL, mix);
    }

    camera.position.lerp(cameraTarget, 1 - Math.exp(-delta * 3.8));
    dampedLookAt.lerp(lookTarget, 1 - Math.exp(-delta * 4.5));
    camera.lookAt(dampedLookAt);
  });

  return null;
}

function Building({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null);
  const { size } = useThree();
  const scaleTarget = useMemo(() => new THREE.Vector3(1, 1, 1), []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const value = THREE.MathUtils.clamp(progress, 0, 1);
    const mobileOffset = size.width < 640 ? .25 : size.width < 960 ? .62 : 1;
    const responsiveScale = size.width < 640 ? .64 : size.width < 960 ? .8 : 1;
    const damping = 1 - Math.exp(-delta * 4.5);
    const desiredRotation = -.25 + smoothstep(.20, .55, value) * .22 - smoothstep(.70, .96, value) * .27;
    const desiredScale = compositionScale(value) * responsiveScale;

    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, compositionX(value) * mobileOffset, damping);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, compositionY(value), damping);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, desiredRotation, damping);
    scaleTarget.setScalar(desiredScale);
    group.current.scale.lerp(scaleTarget, damping);
  });

  return (
    <group ref={group} position={[0, .2, 0]}>
      {parts.map((part, index) => <AnimatedPart key={`${part.name}-${index}`} part={part} progress={progress} />)}
      <GardenDetails progress={progress} />
      <HighlightLight progress={progress} />
      <mesh position={[-1.7, .55, 2.2]} castShadow>
        <boxGeometry args={[.09, 1.6, .09]} />
        <meshStandardMaterial color="#bd0d23" />
      </mesh>
      <mesh position={[0, -.95, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[28, 28]} />
        <meshStandardMaterial color="#1b1c1a" roughness={.92} />
      </mesh>
    </group>
  );
}

export default function ThreeExperience({ progress }: { progress: number }) {
  return (
    <Canvas
      className="three-canvas"
      dpr={[1, 1.55]}
      shadows
      camera={{ fov: 34, position: [12, 8, 15], near: .1, far: 100 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      performance={{ min: .6 }}
    >
      <AdaptiveDpr pixelated />
      <color attach="background" args={['#181917']} />
      <fog attach="fog" args={['#181917', 20, 40]} />
      <ambientLight intensity={.65} />
      <hemisphereLight args={['#e8e1cf', '#272921', .9]} />
      <directionalLight castShadow position={[7, 12, 9]} intensity={2.4} color="#fff5df" shadow-mapSize={[1024, 1024]} shadow-camera-far={35} />
      <pointLight position={[-1, 1, 2]} intensity={14} distance={6} color="#e0a66d" />
      <Suspense fallback={null}>
        <Building progress={progress} />
        <ContactShadows position={[0, -.77, 0]} opacity={.5} scale={20} blur={2.8} far={6} />
        <CameraRig progress={progress} />
      </Suspense>
    </Canvas>
  );
}

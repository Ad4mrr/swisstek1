'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { MediaImage } from '@/components/media/MediaImage';
import { VideoCard } from '@/components/media/VideoCard';
import { ProductPack } from '@/components/ProductPack';
import { problemCards, productEducation, spaceCards } from '@/data/education';
import { getProductMedia, getVideo } from '@/data/media';
import { finderRecommendations, getProduct, products } from '@/data/products';
import { news, timeline } from '@/data/site';

const ThreeExperience = dynamic(() => import('@/components/three/ThreeExperience'), {
  ssr: false,
  loading: () => <div className="experience-loader"><span>SWISSTEK</span><i /> BUILDING YOUR EXPERIENCE</div>,
});

const story = [
  { start: 0, end: .20, index: '01', label: 'Complete space', title: <>FOR THE<br /><em>PERFECT FINISH.</em></>, text: 'Every resolved space begins with layers that work together—from the roof above to the finish underfoot.' },
  { start: .20, end: .26, index: '02', label: 'Roof system', title: <>IT STARTS<br /><em>FROM ABOVE.</em></>, text: 'Roof Master solutions help complete and protect the silhouette of the building.' },
  { start: .26, end: .32, index: '03', label: 'Frames & openings', title: <>EVERY DETAIL<br /><em>MATTERS.</em></>, text: 'Swisstek Aluminium frames light, views and the junctions between inside and out.' },
  { start: .32, end: .38, index: '04', label: 'Floor systems', title: <>THE FINISH STARTS<br /><em>UNDERFOOT.</em></>, text: 'Level the base, fix the surface and complete the room with the right floor system.' },
  { start: .38, end: .45, index: '05', label: 'Wet areas & walls', title: <>PROTECT.<br /><em>PREPARE. FINISH.</em></>, text: 'Waterproofing, wall preparation, grout and seals form the quieter layers behind a finished space.' },
  { start: .45, end: .70, index: '06', label: 'What goes where', title: <>WHAT GOES<br /><em>WHERE?</em></>, text: 'Follow each highlighted part of the building to understand the job before choosing the product.' },
  { start: .70, end: .96, index: '07', label: 'Reconstruction', title: <>ONE SYSTEM.<br /><em>COMING TOGETHER.</em></>, text: 'Floor, wall, frame, roof and landscape return in a continuous, cinematic sequence.' },
  { start: .96, end: 1.01, index: '08', label: 'The complete house', title: <>DIFFERENT SOLUTIONS.<br /><em>ONE PERFECT FINISH.</em></>, text: 'Explore the completed house and discover which Swisstek solution belongs in each area.' },
];

const educationHighlights = [
  { category: 'Waterproofing', name: 'Aqua Shield 2K', slug: 'aqua-shield-2k', copy: 'Creates a waterproof protective layer beneath compatible finishes in approved wet areas.' },
  { category: 'Tile installation', name: 'Tile Adhesive', slug: 'tile-adhesive-mortar', copy: 'Fixes approved tiles securely to prepared floors and walls.' },
  { category: 'Tile joints', name: 'Tile Grout', slug: 'tile-grout', copy: 'Fills and finishes the joints between installed tiles.' },
  { category: 'Wall preparation', name: 'Skim Coat', slug: 'skim-coat', copy: 'Creates a smoother wall surface before the approved final finish.' },
  { category: 'Floor levelling', name: 'Quick Flow', slug: 'quick-flow', copy: 'Levels uneven concrete before an approved final floor finish.' },
  { category: 'Roofing', name: 'Roof Master', slug: 'roof-master', copy: 'Provides roofing, cladding and related solutions for the building envelope.' },
  { category: 'Interior flooring', name: 'Swissparkett', slug: 'swissparkett', copy: 'Adds a warm finished flooring surface to approved interior spaces.' },
  { category: 'Openings', name: 'Swisstek Aluminium', slug: 'swisstek-aluminium', copy: 'Frames windows, doors and architectural openings.' },
  { category: 'Landscape', name: 'Decorative Pebbles', slug: 'decorative-pebbles', copy: 'Adds natural stone colour and texture to decorative areas.' },
  { category: 'Tile care', name: 'Tile Cleaner', slug: 'tile-cleaner', copy: 'Helps clean approved tiled surfaces after installation and in everyday care.' },
  { category: 'Flexible junctions', name: 'General Purpose Silicone', slug: 'general-purpose-silicone', copy: 'Seals selected compatible gaps at finished edges and junctions.' },
  { category: 'Joint protection', name: 'Grout Sealer', slug: 'grout-sealer', copy: 'Adds a protection step to completed grout joints.' },
  { category: 'Specialist joints', name: 'SW–101 Epoxy Grout', slug: 'sw-101-epoxy-grout', copy: 'Creates the specialist SW–101 epoxy finish in approved tile joints.' },
];

const houseHotspots = [
  { id: 'roof', label: 'Roof', product: 'roof-master', style: { left: '65%', top: '25%' } },
  { id: 'frame', label: 'Frame', product: 'swisstek-aluminium', style: { left: '70%', top: '49%' } },
  { id: 'floor', label: 'Floor', product: 'swissparkett', style: { left: '55%', top: '69%' } },
  { id: 'landscape', label: 'Landscape', product: 'decorative-pebbles', style: { left: '38%', top: '66%' } },
];

const spaceHotspotPositions = [
  { left: '21%', top: '68%' },
  { left: '39%', top: '43%' },
  { left: '58%', top: '63%' },
  { left: '72%', top: '35%' },
  { left: '82%', top: '73%' },
];

const surfaces = ['Concrete', 'Plastered wall', 'Tiles / tile joints', 'Window or edge joint', 'Timber floor area', 'Not sure yet'];

const bathroomSystem = [
  { action: 'Waterproof', slug: 'aqua-shield-2k', explanation: 'Create the protective wet-area layer first.' },
  { action: 'Fix', slug: 'tile-adhesive-mortar', explanation: 'Install the compatible tile finish.' },
  { action: 'Finish', slug: 'tile-grout', explanation: 'Fill the joints between installed tiles.' },
  { action: 'Protect', slug: 'grout-sealer', explanation: 'Add protection to completed grout joints.' },
  { action: 'Maintain', slug: 'tile-cleaner', explanation: 'Care for the completed tiled surface.' },
];

const projectMedia = [
  { key: 'space_commercial', title: 'Canterbury Golf Resort Apartments', type: 'Residential architecture' },
  { key: 'project_jetwing', title: 'Jetwing Colombo Seven', type: 'Commercial application' },
  { key: 'space_outdoor', title: 'Swisstek in finished spaces', type: 'Flooring & landscape' },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

export function HomePage() {
  const experienceRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [webglAvailable, setWebglAvailable] = useState(true);
  const [progress, setProgress] = useState(0);
  const [productMode, setProductMode] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState('roof');
  const [activeProblemKey, setActiveProblemKey] = useState('waterproof-bathroom');
  const [activeSpaceKey, setActiveSpaceKey] = useState('bathroom');
  const [activeSpaceProduct, setActiveSpaceProduct] = useState('aqua-shield-2k');
  const [finderStep, setFinderStep] = useState(1);
  const [project, setProject] = useState('Bathroom');
  const [need, setNeed] = useState('Waterproof');
  const [surface, setSurface] = useState('Concrete');

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      setWebglAvailable(Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl')));
    } catch {
      setWebglAvailable(false);
    }
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (!experienceRef.current) return;
      const rect = experienceRef.current.getBoundingClientRect();
      const range = experienceRef.current.offsetHeight - window.innerHeight;
      setProgress(reducedMotion ? 1 : Math.max(0, Math.min(1, -rect.top / Math.max(range, 1))));
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  const activeStory = story.find((item) => progress >= item.start && progress < item.end) ?? story[story.length - 1];
  const educationIndex = Math.min(educationHighlights.length - 1, Math.max(0, Math.floor(((progress - .45) / .25) * educationHighlights.length)));
  const activeEducation = educationHighlights[educationIndex];
  const activeProduct = getProduct(houseHotspots.find((spot) => spot.id === activeHotspot)?.product ?? '') ?? products[0];
  const activeProblem = problemCards.find((item) => item.key === activeProblemKey) ?? problemCards[0];
  const activeProblemProducts = activeProblem.products.map(getProduct).filter(Boolean);
  const activeSpace = spaceCards.find((item) => item.key === activeSpaceKey) ?? spaceCards[0];
  const selectedSpaceProduct = getProduct(activeSpaceProduct) ?? getProduct(activeSpace.products[0]) ?? products[0];
  const recommendations = useMemo(
    () => (finderRecommendations[need] ?? []).map(getProduct).filter(Boolean),
    [need],
  );
  const needsSurface = !['Roofing', 'Beautify a space', 'Flooring'].includes(need);

  const brandVideo = getVideo('brand_story');
  const supportingVideos = ['aqua_shield_promo', 'tile_adhesive_promo', 'sw101_epoxy_grout'].map(getVideo).filter(Boolean);

  function handleFinder(event: FormEvent) {
    event.preventDefault();
    if (finderStep === 1) setFinderStep(2);
    else if (finderStep === 2) setFinderStep(needsSurface ? 3 : 4);
    else if (finderStep === 3) setFinderStep(4);
  }

  function selectSpace(key: string) {
    const nextSpace = spaceCards.find((item) => item.key === key);
    setActiveSpaceKey(key);
    if (nextSpace) setActiveSpaceProduct(nextSpace.products[0]);
  }

  return (
    <main>
      <section ref={experienceRef} className="scroll-experience" id="experience" aria-label="Scroll-linked Swisstek architectural story">
        <div className="experience-sticky">
          {webglAvailable && !reducedMotion
            ? <ThreeExperience progress={progress} />
            : <div className="static-experience" role="img" aria-label="Contemporary Swisstek architectural pavilion"><div className="static-house"><i /><i /><i /><i /><b /></div></div>}
          <div className="experience-grid" />
          <div className="experience-topline"><span>ONE BUILDING / ONE CONTINUOUS SYSTEM</span><span>{String(Math.round(progress * 100)).padStart(2, '0')} / 100</span></div>

          {story.map((item) => (
            <div key={item.index} className={`story-panel story-${item.index} ${activeStory.index === item.index ? 'active' : ''}`} aria-hidden={activeStory.index !== item.index}>
              <div className="story-index"><b>{item.index}</b><span>{item.label}</span></div>
              <p className="story-kicker">SWISSTEK / THE SYSTEM BEHIND THE SPACE</p>
              <h1>{item.title}</h1>
              <p className="story-copy">{item.text}</p>
              {item.index === '01' && <div className="story-actions"><a href="#problems" className="btn light">Start with your project <span>↓</span></a><Link href="/products" className="line-link">View products <span>↗</span></Link></div>}
              {item.index === '08' && <button type="button" className="btn red story-explore" onClick={() => setProductMode(true)}>Explore this house <span>＋</span></button>}
            </div>
          ))}

          {activeStory.index === '06' && (
            <div className="education-callout" aria-live="polite">
              <div className="education-meter"><i style={{ transform: `scaleX(${(educationIndex + 1) / educationHighlights.length})` }} /></div>
              <span>{String(educationIndex + 1).padStart(2, '0')} / {String(educationHighlights.length).padStart(2, '0')} · {activeEducation.category}</span>
              <h2>{activeEducation.name}</h2>
              <p>{activeEducation.copy}</p>
              <Link href={`/products/${activeEducation.slug}`}>See where to use it <b>↗</b></Link>
            </div>
          )}

          {activeStory.index === '07' && (
            <div className="rebuild-sequence" aria-hidden="true">
              {[
                ['Floor', .70, .76], ['Walls', .76, .82], ['Frames', .82, .87], ['Roof', .87, .92], ['Landscape', .92, .96],
              ].map(([label, start, end], index) => <span key={String(label)} className={progress >= Number(start) ? 'active' : ''}><b>0{index + 1}</b>{String(label)}<i style={{ transform: `scaleX(${Math.max(0, Math.min(1, (progress - Number(start)) / (Number(end) - Number(start))))})` }} /></span>)}
            </div>
          )}

          <div className="experience-progress"><i style={{ transform: `scaleX(${progress})` }} /></div>
          <div className="scroll-hint">SCROLL TO FOLLOW THE BUILD <span>↓</span></div>

          <div className={`product-mode ${productMode ? 'open' : ''}`} aria-hidden={!productMode}>
            <button type="button" className="mode-close" onClick={() => setProductMode(false)}>Close product mode ×</button>
            {houseHotspots.map((spot) => <button key={spot.id} style={spot.style} onClick={() => setActiveHotspot(spot.id)} className={`house-hotspot ${activeHotspot === spot.id ? 'active' : ''}`}><i />{spot.label}</button>)}
            <aside className="hotspot-panel">
              <p>PRODUCT MODE / {activeProduct.code}</p>
              <ProductPack product={activeProduct} />
              <span>{activeProduct.category}</span>
              <h2>{activeProduct.name}</h2>
              <p>{productEducation[activeProduct.slug]?.what ?? activeProduct.shortDescription}</p>
              <Link href={`/products/${activeProduct.slug}`} className="btn dark">Understand this product <span>↗</span></Link>
            </aside>
          </div>
        </div>
        <div className="narrative-chapters" aria-hidden="true">
          <section className="narrative-chapter chapter-complete"><span>01 / Complete space</span></section>
          <section className="narrative-chapter chapter-deconstruct"><span>02 / Deconstruction</span></section>
          <section className="narrative-chapter chapter-education"><span>03 / What goes where</span></section>
          <section className="narrative-chapter chapter-rebuild"><span>04 / Reconstruction</span></section>
        </div>
      </section>

      <section className="problem-section" id="problems">
        <div className="section-heading">
          <p><span>07</span> Start with your project</p>
          <h2>WHAT ARE YOU<br /><em>TRYING TO DO?</em></h2>
          <div><p>Tell us what you’re working on and we’ll show you what you may need—using plain language and real Swisstek products.</p></div>
        </div>
        <div className="problem-grid">
          {problemCards.map((card, index) => (
            <button type="button" key={card.key} className={`problem-card ${activeProblemKey === card.key ? 'active' : ''} ${index < 2 ? 'problem-card-wide' : ''}`} onClick={() => setActiveProblemKey(card.key)}>
              <MediaImage mediaKey={card.mediaKey} alt="" sizes={index < 2 ? '(max-width: 820px) 100vw, 50vw' : '(max-width: 820px) 100vw, 33vw'} />
              <i className="problem-shade" />
              <span>0{index + 1}</span>
              <div><small>{card.prompt}</small><h3>{card.title}</h3><b>Show me what I need <i>↗</i></b></div>
            </button>
          ))}
        </div>
        <div className="problem-drawer" aria-live="polite">
          <div className="problem-drawer-intro"><span>YOUR PROJECT / {activeProblem.title}</span><h3>Here’s what may fit.</h3><p>{activeProblem.prompt} Start with the role each layer plays, then confirm the exact application in the current Swisstek guidance.</p></div>
          <div className="problem-recommendations">
            {activeProblemProducts.map((product, index) => product && (
              <Link href={`/products/${product.slug}`} key={product.slug}>
                <span>0{index + 1}</span><ProductPack product={product} />
                <div><small>{product.category}</small><h4>{product.name}</h4><p>{productEducation[product.slug]?.what ?? product.shortDescription}</p><b>Where and when to use it ↗</b></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="shop-space-section">
        <div className="shop-space-heading"><p className="number-label">08 / SHOP BY SPACE</p><h2>START WITH<br /><em>THE ROOM.</em></h2><p>Choose a space, then select a hotspot to see which layer each Swisstek product supports.</p></div>
        <div className="space-tabs" role="tablist" aria-label="Choose a space">
          {spaceCards.map((space) => <button type="button" role="tab" aria-selected={activeSpaceKey === space.key} className={activeSpaceKey === space.key ? 'active' : ''} key={space.key} onClick={() => selectSpace(space.key)}>{space.label}</button>)}
        </div>
        <div className="shop-space-stage">
          <div className="shop-space-image">
            <MediaImage mediaKey={activeSpace.mediaKey} alt={`${activeSpace.label} application by Swisstek`} sizes="(max-width: 820px) 100vw, 68vw" />
            <div className="space-photo-caption"><span>REAL SWISSTEK APPLICATION</span><b>{activeSpace.label}</b></div>
            {activeSpace.products.slice(0, 5).map((slug, index) => {
              const product = getProduct(slug);
              if (!product) return null;
              return <button type="button" style={spaceHotspotPositions[index]} className={`photo-hotspot ${activeSpaceProduct === slug ? 'active' : ''}`} key={slug} onClick={() => setActiveSpaceProduct(slug)} aria-label={`Show ${product.name}`}><i />{index + 1}</button>;
            })}
          </div>
          <aside className="space-product-panel">
            <span>{selectedSpaceProduct.category} / {selectedSpaceProduct.code}</span>
            <ProductPack product={selectedSpaceProduct} />
            <small>WHAT DOES IT DO?</small>
            <h3>{selectedSpaceProduct.name}</h3>
            <p>{productEducation[selectedSpaceProduct.slug]?.what ?? selectedSpaceProduct.shortDescription}</p>
            <div>{activeSpace.products.slice(0, 5).map((slug, index) => {
              const product = getProduct(slug);
              return product && <button type="button" className={activeSpaceProduct === slug ? 'active' : ''} onClick={() => setActiveSpaceProduct(slug)} key={slug}><b>0{index + 1}</b>{product.name}</button>;
            })}</div>
            <Link href={`/products/${selectedSpaceProduct.slug}`} className="btn dark">See where to use it <span>↗</span></Link>
          </aside>
        </div>
      </section>

      <section className="ecosystem-section" id="product-ecosystem">
        <div className="section-heading"><p><span>09</span> Product ecosystem</p><h2>EVERYTHING<br /><em>YOUR SPACE NEEDS.</em></h2><div><p>One connected family across fixing, finishing, roofing, flooring and architectural openings.</p><Link href="/products" className="line-link dark-line">Explore all products <span>↗</span></Link></div></div>
        <div className="ecosystem-grid">
          {[
            ['Finishing', 'Fix. Protect. Finish.', 'The layers behind tile, walls and wet areas.', 'application_tile_installation'],
            ['Roofing', 'Shape the silhouette.', 'Roof Master systems complete the architecture overhead.', 'application_roofing'],
            ['Flooring', 'Warmth underfoot.', 'Real Swissparkett flooring in finished interior spaces.', 'application_flooring'],
            ['Aluminium', 'Frame light.', 'Architectural windows, doors and clean openings.', 'space_living'],
          ].map(([name, title, text, mediaKey], index) => <Link key={name} href={`/products?category=${name}`} className="ecosystem-card"><MediaImage mediaKey={mediaKey} alt="" sizes="(max-width: 820px) 100vw, 25vw" /><i className="ecosystem-shade" /><span>0{index + 1} / {name}</span><h3>{title}</h3><p>{text}</p><b>↗</b></Link>)}
        </div>
      </section>

      <section className="finder-section">
        <div className="finder-side"><p className="number-label">10 / GUIDED DISCOVERY</p><h2>FIND THE<br /><em>RIGHT PRODUCT.</em></h2><p>Answer up to three practical questions. We’ll explain what each recommended product does and why it appears.</p><div className="finder-steps">{['Your space', 'Your task', 'Your surface'].map((label, index) => <span key={label} className={finderStep >= index + 1 ? 'active' : ''}><b>0{index + 1}</b>{label}</span>)}</div></div>
        <form className="finder-card" onSubmit={handleFinder}>
          {finderStep === 1 && <><p>QUESTION 01 / 03</p><h3>Where are you working?</h3><div className="choice-grid">{['Bathroom', 'Kitchen', 'Living Area', 'Exterior', 'Roof', 'Floor', 'Garden', 'Commercial Space'].map((item) => <button type="button" key={item} onClick={() => setProject(item)} className={project === item ? 'selected' : ''}><i />{item}</button>)}</div><button className="btn red wide" type="submit">Continue <span>→</span></button></>}
          {finderStep === 2 && <><p>QUESTION 02 / 03 · {project}</p><h3>What are you trying to do?</h3><div className="choice-grid">{Object.keys(finderRecommendations).map((item) => <button type="button" key={item} onClick={() => setNeed(item)} className={need === item ? 'selected' : ''}><i />{item}</button>)}</div><button className="btn red wide" type="submit">{needsSurface ? 'Choose the surface' : 'Show my system'} <span>→</span></button></>}
          {finderStep === 3 && <><p>QUESTION 03 / 03 · {project} / {need}</p><h3>What surface are you working with?</h3><div className="choice-grid">{surfaces.map((item) => <button type="button" key={item} onClick={() => setSurface(item)} className={surface === item ? 'selected' : ''}><i />{item}</button>)}</div><button className="btn red wide" type="submit">Show my system <span>→</span></button></>}
          {finderStep === 4 && <><p>YOUR {project.toUpperCase()} PATHWAY · {surface.toUpperCase()}</p><h3>Here’s what you may need.</h3><div className="finder-results">{recommendations.map((product, index) => product && <Link key={product.slug} href={`/products/${product.slug}`}><span>0{index + 1}</span><div><b>{product.name}</b><small>{productEducation[product.slug]?.what ?? product.shortDescription}</small></div><i>↗</i></Link>)}</div><button className="reset-link" type="button" onClick={() => setFinderStep(1)}>Start again ↺</button></>}
        </form>
      </section>

      <section className="video-story-section">
        <div className="section-heading"><p><span>11</span> Official Swisstek films</p><h2>SEE SWISSTEK<br /><em>IN ACTION.</em></h2><div><p>Watch real brand and application stories from the official Swisstek Ceylon channel. A player loads only when you choose a film.</p></div></div>
        <div className="video-feature-layout">
          <div>{brandVideo && <VideoCard video={brandVideo} />}</div>
          <aside><span>SWISSTEK IN THE REAL WORLD</span><h3>Building better, since 1967.</h3><p>See the products, people and thinking behind the spaces Swisstek helps complete.</p><b>WATCH THE STORY ↗</b></aside>
        </div>
        <div className="video-supporting">{supportingVideos.map((video) => video && <VideoCard key={video.key} video={video} compact />)}</div>
      </section>

      <section className="featured-section">
        <div className="section-heading"><p><span>12</span> Featured products</p><h2>THE PRODUCT.<br /><em>AND ITS PURPOSE.</em></h2><div><p>Actual Swisstek packs paired with simple explanations of the job each product supports.</p></div></div>
        <div className="featured-track">{products.filter((product) => product.featured).slice(0, 5).map((product, index) => {
          const media = getProductMedia(product.slug);
          return <Link href={`/products/${product.slug}`} className="featured-product" key={product.slug}><div className="featured-visual">{media?.application && <MediaImage mediaKey={media.application} alt="" sizes="(max-width: 820px) 50vw, 20vw" />}<i className="featured-shade" /><span>0{index + 1}</span><ProductPack product={product} /></div><p>{product.category} / USE IT FOR</p><h3>{product.name}</h3><small>{productEducation[product.slug]?.what ?? product.shortDescription}</small><i>See where to use it ↗</i></Link>;
        })}</div>
      </section>

      <section className="system-section">
        <div className="system-intro"><p className="number-label">13 / PRODUCT SYSTEM</p><h2>BUILD A BETTER<br /><em>BATHROOM.</em></h2><p>A product makes more sense when you can see what comes before it and what follows. This five-layer path starts below the tile and ends with everyday care.</p><Link href="/solutions" className="line-link dark-line">Explore connected solutions <span>↗</span></Link></div>
        <div className="system-flow">{bathroomSystem.map((step, index) => {
          const product = getProduct(step.slug);
          return product && <Link href={`/products/${product.slug}`} key={step.slug}><span>0{index + 1} / {step.action}</span><ProductPack product={product} /><h3>{product.name}</h3><p>{step.explanation}</p><i>{index < bathroomSystem.length - 1 ? '↓' : '↗'}</i></Link>;
        })}</div>
      </section>

      <section className="why-section">
        <div className="why-title"><p className="number-label">14 / WHY SWISSTEK</p><h2>BUILT ON<br /><em>KNOWLEDGE.</em></h2></div>
        <div className="why-grid">{[
          ['01', 'Since 1967', 'A long relationship with flooring, finishing and the built environment.'],
          ['02', 'Quality management', 'Manufacturing aligned with the ISO 9001:2015 quality management system.'],
          ['03', 'Connected solutions', 'Products spanning fixing, finishing, beautification, roofing, flooring and aluminium.'],
          ['04', 'Island-wide focus', 'A distribution network serving professionals and property owners in Sri Lanka.'],
        ].map(([index, title, text]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="projects-section">
        <div className="section-heading"><p><span>15</span> Real applications</p><h2>MADE FOR<br /><em>FINISHED SPACES.</em></h2><div><p>First-party Swisstek project, flooring and architectural imagery—not generic competitor products.</p></div></div>
        <div className="projects-grid">{projectMedia.map((item, index) => <article key={item.title} className={index === 0 ? 'large' : ''}><MediaImage mediaKey={item.key} alt={item.title} sizes={index === 0 ? '(max-width: 820px) 100vw, 55vw' : '(max-width: 820px) 100vw, 30vw'} /><i /><span>{item.type}</span><h3>{item.title}</h3></article>)}</div>
      </section>

      <section className="timeline-section">
        <div className="timeline-copy"><p className="number-label">16 / OUR STORY</p><h2>AN EVOLVING<br /><em>ARCHITECTURE.</em></h2><p>From parquet and flooring to a connected construction-product company.</p><Link href="/about" className="line-link dark-line">Explore our story <span>↗</span></Link></div>
        <div className="timeline-list">{timeline.map((item) => <article key={item.year}><b>{item.year}</b><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>

      <section className="news-section">
        <div className="section-heading compact"><p><span>17</span> Latest news</p><h2>WHAT WE’RE<br /><em>BUILDING NEXT.</em></h2><Link href="/news" className="line-link dark-line">View all news <span>↗</span></Link></div>
        <div className="news-grid">{news.map((item, index) => <Link key={item.slug} href={`/news/${item.slug}`} className="news-card"><div className={`news-image news-${index + 1}`}>{index === 1 && <MediaImage mediaKey="news_managing_director" alt="Swisstek group managing director announcement" sizes="33vw" />}{index === 2 && <MediaImage mediaKey="news_rugby_camp" alt="Swisstek community rugby development camp" sizes="33vw" />}<span>{item.category}</span></div><p>{item.date}</p><h3>{item.title}</h3><i>Read story ↗</i></Link>)}</div>
      </section>

      <section className="utility-band"><Link href="/downloads"><small>18 / TECHNICAL LIBRARY</small><h2>DOWNLOAD<br /><em>WITH CONFIDENCE.</em></h2><span>Catalogues & data sheets ↗</span></Link><Link href="/dealer-network"><small>19 / DEALER NETWORK</small><h2>FIND SWISSTEK<br /><em>NEAR YOU.</em></h2><span>Explore the network ↗</span></Link></section>
    </main>
  );
}

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface VideoRecord {
  key: string;
  youtubeId: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  sourceUrl: string;
}

export function VideoCard({ video, compact = false }: { video: VideoRecord; compact?: boolean }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setPlaying(false); };
    window.addEventListener('keydown', close);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', close); };
  }, [playing]);

  return (
    <>
      <button type="button" className={`video-card ${compact ? 'compact' : ''}`} onClick={() => setPlaying(true)} aria-label={`Play ${video.title}`}>
        <span className="video-thumb"><Image src={video.thumbnail} alt="" fill sizes={compact ? '(max-width: 820px) 100vw, 33vw' : '(max-width: 820px) 100vw, 65vw'} /><i className="video-shade" /><b className="video-play"><i /> PLAY VIDEO</b><small>OFFICIAL SWISSTEK VIDEO</small></span>
        <span className="video-copy"><small>{video.category}</small><strong>{video.title}</strong>{!compact && <em>{video.description}</em>}</span>
      </button>
      {playing && <div className="video-modal" role="dialog" aria-modal="true" aria-label={video.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setPlaying(false); }}>
        <button type="button" onClick={() => setPlaying(false)} aria-label="Close video">CLOSE <span>×</span></button>
        <div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&playsinline=1`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
        <p>{video.title}</p>
      </div>}
    </>
  );
}

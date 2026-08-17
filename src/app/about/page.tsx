import type { Metadata } from 'next';
import Link from 'next/link';
import { MediaImage } from '@/components/media/MediaImage';
import { PageHero } from '@/components/PageHero';
import { timeline } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story, vision, mission and values of Swisstek Ceylon PLC.',
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="04 / The company"
        title="BUILT BEYOND TODAY."
        intro="A construction-product company shaped by flooring heritage, manufacturing knowledge and an evolving product ecosystem."
      />

      <section className="about-intro">
        <p>OUR STORY</p>
        <h2>
          Established in 1967 as Parquet (Ceylon) Ltd, the company evolved through flooring,
          fixing, finishing and beautification into Swisstek Ceylon PLC.
        </h2>
        <div className="about-media-strip" aria-label="Swisstek engineering and manufacturing">
          <figure className="about-media-frame">
            <MediaImage
              mediaKey="corporate_engineer"
              alt="A Swisstek engineer at work"
              className="about-media-image"
              sizes="(max-width: 820px) 100vw, 58vw"
              fill
            />
            <figcaption>ENGINEERING / SWISSTEK ALUMINIUM</figcaption>
          </figure>
          <figure className="about-media-frame about-media-frame-secondary">
            <MediaImage
              mediaKey="corporate_factory"
              alt="Swisstek aluminium production facility"
              className="about-media-image"
              sizes="(max-width: 820px) 100vw, 34vw"
              fill
            />
            <figcaption>MANUFACTURING / SRI LANKA</figcaption>
          </figure>
        </div>
      </section>

      <section className="vision-grid">
        <article>
          <span>01</span>
          <h2>Vision</h2>
          <p>
            To be a leading manufacturer in Sri Lanka’s construction industry recognised for
            innovation and sustainability-led solutions in fixing, finishing and beautifying
            products and services.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Mission</h2>
          <p>
            To help shape Sri Lanka’s construction landscape through dedication to innovation,
            sustainability and excellence across fixing, finishing and beautification.
          </p>
        </article>
        <article className="values">
          <span>03</span>
          <h2>Values</h2>
          <div>
            <b>Integrity</b>
            <b>Innovation</b>
            <b>Accountability</b>
            <b>Teamwork</b>
          </div>
        </article>
      </section>

      <section className="about-timeline">
        <div>
          <p>06 MILESTONES / 1967—TODAY</p>
          <h2>
            AN EVOLVING
            <br />
            ARCHITECTURE.
          </h2>
        </div>
        <div>
          {timeline.map((item) => (
            <article key={item.year}>
              <b>{item.year}</b>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="chairman-quote">
        <p>CHAIRMAN’S MESSAGE</p>
        <blockquote>
          “We are building beyond today, strengthening our capabilities, markets and people to
          create value beyond traditional boundaries.”
        </blockquote>
        <span>S H Amarasekera / Chairman</span>
        <Link href="/leadership">Meet our leadership ↗</Link>
      </section>
    </main>
  );
}

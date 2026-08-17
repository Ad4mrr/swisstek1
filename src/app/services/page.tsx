import type { Metadata } from 'next';
import Link from 'next/link';
import { MediaImage } from '@/components/media/MediaImage';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Swisstek interior designing and building services.',
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="03 / Services"
        title="SPACES, CONSIDERED AS A WHOLE."
        intro="Interior designing and building—an official Swisstek service presented through a case-study-ready architectural format."
      />
      <section className="service-feature">
        <div className="service-art service-art-media">
          <MediaImage
            mediaKey="project_jetwing"
            alt="Jetwing Colombo Seven, a Swisstek Aluminium project"
            className="service-art-image"
            sizes="(max-width: 820px) 100vw, 60vw"
            fill
          />
          <span>PROJECT / JETWING COLOMBO SEVEN</span>
        </div>
        <div>
          <p>01 / INTERIOR DESIGNING &amp; BUILDING</p>
          <h2>
            FROM INTENT
            <br />
            TO INTERIOR.
          </h2>
          <p>
            The prototype creates a clear home for service scope, design process, project
            galleries and enquiries. Final service descriptions and case studies require
            approved source material.
          </p>
          <ol>
            <li>
              <span>01</span>Discovery &amp; brief
            </li>
            <li>
              <span>02</span>Design development
            </li>
            <li>
              <span>03</span>Material coordination
            </li>
            <li>
              <span>04</span>Building &amp; handover
            </li>
          </ol>
          <Link href="/contact" className="btn red">
            Start a conversation <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

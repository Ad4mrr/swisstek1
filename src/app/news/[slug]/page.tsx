import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MediaImage } from '@/components/media/MediaImage';
import { news } from '@/data/site';

const newsMedia: Record<string, string> = {
  'transparent-prices': 'news_slsi_certification',
  'daminda-perera-group-managing-director': 'news_managing_director',
  'vidyartha-rugby-development-camp': 'news_rugby_camp',
};

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = news.find((entry) => entry.slug === params.slug);
  return item
    ? {
        title: item.title,
        description: item.excerpt,
        openGraph: { title: item.title, description: item.excerpt, images: [] },
        twitter: { title: item.title, description: item.excerpt, images: [] },
      }
    : {};
}

export default function Page({ params }: { params: { slug: string } }) {
  const item = news.find((entry) => entry.slug === params.slug);
  if (!item) notFound();

  return (
    <main className="article-page">
      <header>
        <p>
          {item.category} / {item.date}
        </p>
        <h1>{item.title}</h1>
        <span>{item.excerpt}</span>
      </header>
      <div className="article-image article-image-media">
        <MediaImage
          mediaKey={newsMedia[item.slug]}
          alt={item.title}
          className="article-media-image"
          sizes="(max-width: 820px) calc(100vw - 40px), 94vw"
          fill
        />
      </div>
      <article>
        <p className="article-lead">
          This prototype preserves the verified title, date and high-level subject from the
          official Swisstek news archive.
        </p>
        <h2>Designed for a clearer story.</h2>
        <p>
          Full article copy has not been reproduced because final editorial content should be
          confirmed and approved by Swisstek before production migration. This page demonstrates
          the intended reading experience, responsive typography, metadata structure and route
          architecture.
        </p>
        <blockquote>
          Every corporate story should be useful, legible and connected to the wider Swisstek
          experience.
        </blockquote>
        <p>
          The production content model is ready for body copy, approved photography, related
          products and article attribution.
        </p>
        <Link href="/news">← Back to news</Link>
      </article>
    </main>
  );
}

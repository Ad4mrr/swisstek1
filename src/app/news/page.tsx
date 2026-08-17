import type { Metadata } from 'next';
import Link from 'next/link';
import { MediaImage } from '@/components/media/MediaImage';
import { PageHero } from '@/components/PageHero';
import { news } from '@/data/site';

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest news and updates from Swisstek Ceylon PLC.',
};

const newsMedia: Record<string, string> = {
  'transparent-prices': 'news_slsi_certification',
  'daminda-perera-group-managing-director': 'news_managing_director',
  'vidyartha-rugby-development-camp': 'news_rugby_camp',
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="10 / News & insights"
        title="WHAT WE’RE BUILDING NEXT."
        intro="Company news, leadership milestones and stories from the wider Swisstek community."
      />
      <section className="news-archive">
        {news.map((item) => (
          <Link key={item.slug} href={`/news/${item.slug}`}>
            <div className="archive-image archive-image-media">
              <MediaImage
                mediaKey={newsMedia[item.slug]}
                alt={item.title}
                className="archive-media-image"
                sizes="(max-width: 820px) 100vw, 33vw"
                fill
              />
              <span>{item.category}</span>
            </div>
            <small>{item.date}</small>
            <h2>{item.title}</h2>
            <p>{item.excerpt}</p>
            <i>Read article ↗</i>
          </Link>
        ))}
      </section>
    </main>
  );
}

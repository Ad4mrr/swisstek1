import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { DownloadsLibrary } from '@/components/utility/UtilityPages';
export const metadata: Metadata = { title: 'Download Centre', description: 'Browse Swisstek product catalogues and technical data sheets.' };
export default function Page() { return <main><PageHero eyebrow="05 / Technical library" title="DOWNLOAD WITH CONFIDENCE." intro="A searchable home for product catalogues, technical data sheets and multilingual documents." /><DownloadsLibrary /></main>; }

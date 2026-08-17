import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { DealerDirectory } from '@/components/utility/UtilityPages';
export const metadata: Metadata = { title: 'Dealer Network', description: 'Find a Swisstek dealer by district or town.' };
export default function Page() { return <main><PageHero eyebrow="06 / Island-wide access" title="FIND SWISSTEK NEAR YOU." intro="Search the dealer network by district and town. The interface is ready for an approved live dealer feed and map provider." /><DealerDirectory /></main>; }

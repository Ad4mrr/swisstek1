import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { TilerDirectory } from '@/components/utility/UtilityPages';
export const metadata: Metadata = { title: 'Tilers Club', description: 'Connect with industry professionals through the Swisstek Tilers Club.' };
export default function Page() { return <main><PageHero eyebrow="07 / Tilers Club" title="CONNECT WITH AN EXPERT." intro="A clearer pathway for customers to discover industry professionals by district, expertise and experience." /><TilerDirectory /></main>; }

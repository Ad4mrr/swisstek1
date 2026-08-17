import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHero } from '@/components/PageHero';
import { ProductsGrid } from '@/components/products/ProductsGrid';

export const metadata: Metadata = { title: 'Products', description: 'Explore Swisstek solutions across fixing, finishing, roofing, flooring, cleaning and beautification.' };

export default function ProductsPage() {
  return <main><PageHero eyebrow="01 / Product ecosystem" title="SOLUTIONS FOR EVERY LAYER." intro="Discover the Swisstek systems behind finished spaces—from waterproofing and tile installation to roofing, flooring and architectural frames." /><Suspense><ProductsGrid /></Suspense></main>;
}

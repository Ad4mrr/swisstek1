import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { news } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://swisstekceylon.com';
  const routes = ['', '/products', '/solutions', '/services', '/about', '/leadership', '/investor-relations', '/downloads', '/dealer-network', '/tilers-club', '/news', '/careers', '/contact'];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : .7 })),
    ...products.map((product) => ({ url: `${base}/products/${product.slug}`, changeFrequency: 'monthly' as const, priority: .8 })),
    ...news.map((item) => ({ url: `${base}/news/${item.slug}`, changeFrequency: 'yearly' as const, priority: .5 })),
  ];
}

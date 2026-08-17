'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { MediaImage } from '@/components/media/MediaImage';
import { categories, products } from '@/data/products';
import { ProductPack } from '@/components/ProductPack';
import { productEducation } from '@/data/education';
import { getProductMedia } from '@/data/media';

export function ProductsGrid() {
  const params = useSearchParams();
  const initial = params.get('category');
  const [category, setCategory] = useState(initial && categories.includes(initial as typeof categories[number]) ? initial : 'All');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => products.filter((product) => {
    if (category !== 'All' && product.category !== category) return false;
    const education = productEducation[product.slug];
    const searchable = [
      product.name,
      product.code,
      product.shortDescription,
      education?.what,
      education?.problem,
      ...(education?.where ?? []),
    ].join(' ').toLowerCase();
    return searchable.includes(query.trim().toLowerCase());
  }), [category, query]);

  return (
    <section className="products-browser">
      <div className="products-toolbar">
        <div className="filter-row" role="group" aria-label="Filter products by category">{categories.map((item) => <button className={category === item ? 'active' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <label className="product-search"><span>Search by product, problem or place</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “bathroom”, “uneven floor” or a product name" /></label>
      </div>
      <p className="results-count">{String(filtered.length).padStart(2, '0')} PRODUCTS / {category.toUpperCase()}</p>
      <div className="products-grid">
        {filtered.map((product, index) => {
          const education = productEducation[product.slug];
          const media = getProductMedia(product.slug);
          return <Link href={`/products/${product.slug}`} className="product-card" key={product.slug} aria-label={`Explore ${product.name}: ${education.what}`}>
            <div className="product-card-visual">
              <span className="product-card-index">{String(index + 1).padStart(2, '0')}</span>
              {media?.application && <div className="product-card-context" aria-hidden="true"><MediaImage mediaKey={media.application} alt="" className="product-card-context-image" sizes="(max-width: 760px) 100vw, 32vw" fill /></div>}
              <ProductPack product={product} />
            </div>
            <div className="product-card-copy">
              <p>{product.category} / {product.code}</p>
              <h2>{product.name}</h2>
              <strong className="product-card-purpose">{education.what}</strong>
              <span className="product-card-problem">{education.problem}</span>
              <small className="product-card-where"><b>Where it works</b>{education.where.slice(0, 3).join(' · ')}</small>
              <i>See if it fits your job ↗</i>
            </div>
          </Link>;
        })}
      </div>
      {!filtered.length && <div className="empty-state"><h2>No products found.</h2><button onClick={() => { setCategory('All'); setQuery(''); }}>Reset filters</button></div>}
    </section>
  );
}

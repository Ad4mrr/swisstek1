import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductPack } from '@/components/ProductPack';
import { MediaImage } from '@/components/media/MediaImage';
import { VideoCard } from '@/components/media/VideoCard';
import { productEducation } from '@/data/education';
import { getProductMedia, getVideo } from '@/data/media';
import { getProduct, products } from '@/data/products';

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return { title: product.name, description: product.shortDescription, openGraph: { title: `${product.name} — Swisstek Ceylon`, description: product.shortDescription, images: [] }, twitter: { title: `${product.name} — Swisstek Ceylon`, description: product.shortDescription, images: [] } };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const education = productEducation[product.slug];
  const media = getProductMedia(product.slug);
  const video = education.videoKey ? getVideo(education.videoKey) : undefined;
  const related = product.relatedProducts.map(getProduct).filter(Boolean);
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'Product', name: product.name, description: product.description, category: product.category, brand: { '@type': 'Brand', name: 'Swisstek' } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: education.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
  ];
  return (
    <main className="product-detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="product-hero">
        <div className="product-hero-copy"><p>{product.category} / {product.code}</p><h1>{product.name}</h1><span>{product.shortDescription}</span><div><a href="#product-content" className="btn dark">Discover product <b>↓</b></a><Link href="/downloads" className="line-link dark-line">View downloads ↗</Link></div></div>
        <div className="product-hero-visual"><div className="technical-circle" /><ProductPack product={product} large /><span>PRODUCT SYSTEM<br />{product.code}</span></div>
      </section>
      <section className="application-strip">
        <div className={`application-scene ${media?.application ? 'has-application-media' : ''}`}>
          {media?.application ? <MediaImage mediaKey={media.application} alt={`${product.name} shown in an application context`} className="application-scene-image" sizes="(max-width: 820px) 100vw, 55vw" fill /> : <><span className="application-wall" /><span className="application-tile" /><span className="application-joint" /></>}
        </div>
        <div><p>01 / THE JOB IT SOLVES</p><h2>{education.what}</h2><p>{education.problem}</p></div>
      </section>
      <div id="product-content" className="product-content">
        <section className="product-about product-purpose-section">
          <p>02 / WHAT DOES IT DO?</p>
          <div className="product-purpose-grid"><h2>{education.what}</h2><div><p>{product.description}</p><dl><div><dt>Use it when</dt><dd>{education.when}</dd></div><div><dt>The problem</dt><dd>{education.problem}</dd></div></dl></div></div>
        </section>

        <section className="product-where-section">
          <div className="section-heading"><p>03 / WHERE CAN I USE IT?</p><h2>PUT IT IN THE<br />RIGHT PLACE.</h2></div>
          <div className="where-visual-grid">
            {education.where.map((place, index) => <article key={place} className={index === 0 ? 'featured' : ''}>
              {media?.application && index === 0 && <MediaImage mediaKey={media.application} alt={`${product.name} application: ${place}`} className="where-tile-image" sizes="(max-width: 820px) 100vw, 50vw" fill />}
              <span>{String(index + 1).padStart(2, '0')}</span><h3>{place}</h3>
            </article>)}
          </div>
        </section>

        <section className="product-scenarios-section">
          <div className="section-heading"><p>04 / IS THIS WHAT I NEED?</p><h2>CHECK YOUR JOB.</h2></div>
          <div className="scenario-grid">{education.scenarios.map((scenario) => <article key={scenario.question} className={`scenario-card answer-${scenario.answer}`}>
            <span>{scenario.answer}</span><h3>{scenario.question}</h3><p>{scenario.explanation}</p>
            {scenario.alternative && <Link href={`/products/${scenario.alternative}`}>See the better fit ↗</Link>}
          </article>)}</div>
        </section>

        <section className="product-stages-section">
          <div className="section-heading"><p>05 / BEFORE, DURING, AFTER</p><h2>SEE WHERE IT FITS.</h2></div>
          <div className="stage-grid">{education.stages.map((stage) => <article key={stage.label}><span>{stage.label}</span><div className="stage-diagram" aria-hidden="true"><i /><i /><i /></div><h3>{stage.title}</h3><p>{stage.description}</p></article>)}</div>
        </section>

        <section className="benefits-section"><p>06 / KEY BENEFITS</p><div className="benefits-grid">{product.benefits.map((benefit, index) => <article key={benefit}><span>{String(index + 1).padStart(2, '0')}</span><i>＋</i><h3>{benefit}</h3></article>)}</div></section>

        <section className="how-section"><div><p>07 / HOW TO USE</p><h2>A CLEAR PATH<br />TO THE FINISH.</h2><span>Always follow the current instructions for this exact product and application.</span></div><div className="how-steps">{['Prepare the surface as stated in the current official instructions.', 'Measure, mix or ready the product exactly as directed on the approved pack.', 'Apply with the recommended tools and within the documented conditions.', 'Observe the stated working, curing and finishing times before the next layer.'].map((step, index) => <article key={step}><b>{String(index + 1).padStart(2, '0')}</b><p>{step}</p></article>)}</div></section>

        {video && <section className="product-video-section"><div className="section-heading"><p>08 / WATCH THE METHOD</p><h2>SEE THE PRODUCT<br />IN ACTION.</h2></div><VideoCard video={video} /></section>}

        <section className="technical-section"><div><p>{video ? '09' : '08'} / TECHNICAL INFORMATION</p><h2>CHECK BEFORE<br />YOU START.</h2><span>Coverage, mixing, preparation and installation conditions must come from the current approved Swisstek documentation.</span><div className="technical-actions"><Link href="/downloads" className="btn light">Open download centre ↗</Link><a href="https://swisstekceylon.com/language/en/downloadables/" target="_blank" rel="noreferrer" className="line-link">Official Swisstek documents ↗</a></div></div><table><tbody><tr><th>Product family</th><td>{product.category}</td></tr><tr><th>Product code</th><td>{product.code}</td></tr><tr><th>Used for</th><td>{education.what}</td></tr><tr><th>Applications</th><td>{product.applications.join(', ')}</td></tr><tr><th>Technical data</th><td>Refer to the current official data sheet</td></tr></tbody></table></section>

        <section className="related-section"><p>{video ? '10' : '09'} / YOU MAY ALSO NEED</p><h2>COMPLETE THE JOB.</h2><div>{related.map((item) => item && <Link key={item.slug} href={`/products/${item.slug}`}><ProductPack product={item} /><span>{item.category}</span><h3>{item.name}</h3><p>{education.relatedReasons[item.slug] ?? 'Works alongside this product in the wider Swisstek system.'}</p><i aria-hidden="true">↗</i></Link>)}</div></section>

        <section className="product-faq-section">
          <div className="section-heading"><p>{video ? '11' : '10'} / COMMON QUESTIONS</p><h2>QUICK ANSWERS.</h2></div>
          <div className="faq-list">{education.faq.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">＋</span></summary><p>{item.answer}</p></details>)}</div>
        </section>
      </div>
    </main>
  );
}

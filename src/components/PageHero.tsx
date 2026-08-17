export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" />
      <p className="page-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro">{intro}</p>
      <div className="page-hero-index">SW / 2026 <span>↓</span></div>
    </section>
  );
}

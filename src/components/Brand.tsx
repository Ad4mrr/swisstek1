import Link from 'next/link';

export function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`brand ${dark ? 'brand-dark' : ''}`} aria-label="Swisstek home">
      <span className="brand-mark" aria-hidden="true" />
      <span className="brand-words"><b>SWISSTEK</b><small>FOR THE PERFECT FINISH</small></span>
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Brand } from './Brand';

const nav = [
  { href: '/products', label: 'Products' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/news', label: 'News' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled || pathname !== '/' ? 'is-scrolled' : ''}`}>
      <Brand />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item) => <Link className={pathname.startsWith(item.href) ? 'active' : ''} key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link href="/dealer-network" className="dealer-link">Find a dealer <span>↗</span></Link>
        <Link href="/contact" className="contact-chip">Contact</Link>
      </div>
      <button className="menu-button" type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <div className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mobile-links">
          {nav.map((item, index) => <Link key={item.href} href={item.href}><small>0{index + 1}</small>{item.label}</Link>)}
          <Link href="/dealer-network"><small>07</small>Dealer network</Link>
          <Link href="/contact"><small>08</small>Contact</Link>
        </div>
        <div className="drawer-foot">SWISSTEK CEYLON PLC <span>BUILD WITH CONFIDENCE.</span></div>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { Brand } from './Brand';
import { contact } from '@/data/site';

const columns = [
  { title: 'Explore', links: [['Products', '/products'], ['Solutions', '/solutions'], ['Services', '/services'], ['Downloads', '/downloads']] },
  { title: 'Company', links: [['About', '/about'], ['Leadership', '/leadership'], ['Investors', '/investor-relations'], ['Careers', '/careers']] },
  { title: 'Connect', links: [['Dealer network', '/dealer-network'], ['Tilers Club', '/tilers-club'], ['News', '/news'], ['Contact', '/contact']] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-statement"><p>THE SYSTEM BEHIND</p><h2>BUILD WITH CONFIDENCE.<br /><em>FINISH WITH SWISSTEK.</em></h2></div>
      <div className="footer-grid">
        <div className="footer-brand"><Brand /><p>Swisstek (Ceylon) PLC<br />{contact.office}</p></div>
        {columns.map((column) => <div key={column.title} className="footer-column"><h3>{column.title}</h3>{column.links.map(([label, href]) => <Link key={href} href={href}>{label}<span>↗</span></Link>)}</div>)}
        <div className="footer-contact"><h3>Talk to us</h3><a href={`tel:${contact.officePhone.replace(/\s/g, '')}`}>{contact.officePhone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
      </div>
      <div className="footer-legal"><span>© {new Date().getFullYear()} Swisstek Ceylon PLC</span><span>Experimental redesign prototype</span><span>Privacy · Terms</span></div>
    </footer>
  );
}

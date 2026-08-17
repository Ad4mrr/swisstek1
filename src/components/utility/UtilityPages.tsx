'use client';

import { FormEvent, useMemo, useState } from 'react';
import { dealers, downloads, tilers } from '@/data/site';

export function DownloadsLibrary() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => downloads.filter((item) => (filter === 'All' || item.type === filter || item.language === filter) && `${item.title} ${item.product}`.toLowerCase().includes(query.toLowerCase())), [query, filter]);
  return <section className="library-wrap"><div className="library-controls"><label><span>Search library</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Product or document" /></label><div>{['All', 'Product Catalogue', 'Technical Data Sheet', 'English', 'Sinhala', 'Tamil'].map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div></div><div className="download-list">{filtered.map((item, index) => <article key={`${item.title}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{item.product}</small><h2>{item.title}</h2></div><p>{item.type}</p><p>{item.language}</p><a href={item.href} target="_blank" rel="noreferrer">Download PDF ↓</a></article>)}</div></section>;
}

export function DealerDirectory() {
  const [district, setDistrict] = useState('All');
  const [query, setQuery] = useState('');
  const filtered = dealers.filter((dealer) => (district === 'All' || dealer.district === district) && `${dealer.name} ${dealer.town}`.toLowerCase().includes(query.toLowerCase()));
  return <section className="directory-layout"><div className="map-placeholder"><div className="map-grid" />{dealers.map((dealer, index) => <i key={dealer.name} style={{ left: `${[49,55,53,43,51][index]}%`, top: `${[72,58,49,82,22][index]}%` }}><b>{index + 1}</b></i>)}<span>MAP-READY COMPONENT / SRI LANKA</span></div><div className="directory-panel"><div className="directory-controls"><select value={district} onChange={(e) => setDistrict(e.target.value)}><option>All</option>{Array.from(new Set(dealers.map((dealer) => dealer.district))).map((item) => <option key={item}>{item}</option>)}</select><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by town" /></div><p>{filtered.length} PROTOTYPE LOCATIONS</p>{filtered.map((dealer) => <article key={dealer.name}><small>{dealer.district} / {dealer.town}</small><h2>{dealer.name}</h2><a href={`tel:${dealer.phone.replace(/\s/g,'')}`}>{dealer.phone}</a><button>Directions ↗</button></article>)}<div className="data-note">Dealer names and locations shown are structured prototype data and require an approved production dealer dataset.</div></div></section>;
}

export function TilerDirectory() {
  const [district, setDistrict] = useState('All');
  const filtered = tilers.filter((tiler) => district === 'All' || tiler.district === district);
  return <section className="tiler-wrap"><div className="tiler-filter"><p>FILTER PROFESSIONALS</p><select value={district} onChange={(e) => setDistrict(e.target.value)}><option>All</option>{Array.from(new Set(tilers.map((item) => item.district))).map((item) => <option key={item}>{item}</option>)}</select></div><div className="tiler-grid">{filtered.map((tiler, index) => <article key={`${tiler.district}-${index}`}><div className="profile-placeholder">{String(index + 1).padStart(2, '0')}</div><small>{tiler.district}</small><h2>{tiler.name}</h2><p>{tiler.expertise}</p><span>{tiler.experience}</span><button disabled>Contact pending verification</button></article>)}</div><p className="disclaimer">Swisstek provides this directory as a connection service. Professional credentials, availability, pricing and workmanship must be independently verified by customers. Prototype profiles are not real professionals.</p></section>;
}

export function ContactForm({ careers = false }: { careers?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div className="form-success"><span>✓</span><h2>Thank you.</h2><p>{careers ? 'Your prototype application has been recorded locally.' : 'Your prototype enquiry has been recorded locally.'}</p><button onClick={() => setSent(false)}>Send another</button></div>;
  return <form className="contact-form" onSubmit={submit}><div><label>Full name<input required name="name" /></label><label>Email address<input required type="email" name="email" /></label></div><div><label>Phone number<input required name="phone" /></label><label>{careers ? 'Role' : 'Subject'}<input required name="subject" defaultValue={careers ? 'Design & Digital Experience' : ''} /></label></div>{careers && <label>CV upload<div className="file-input"><input type="file" accept=".pdf,.doc,.docx" />Choose CV <span>＋</span></div></label>}<label>Message<textarea rows={5} required name="message" /></label><button className="btn red wide">{careers ? 'Submit application' : 'Submit message'} <span>→</span></button></form>;
}

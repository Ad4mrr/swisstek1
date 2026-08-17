import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { directors, management } from '@/data/site';
export const metadata: Metadata = { title: 'Leadership', description: 'Board of Directors and Senior Management Team of Swisstek Ceylon PLC.' };
function People({ people }: { people: { name: string; role: string }[] }) { return <div className="people-grid">{people.map((person, index) => <article key={person.name}><div className="person-art"><span>{String(index + 1).padStart(2,'0')}</span><i /></div><p>{person.role}</p><h2>{person.name}</h2></article>)}</div>; }
export default function Page() { return <main><PageHero eyebrow="04.1 / Leadership" title="PEOPLE BEHIND THE SYSTEM." intro="Leadership information is stored as structured data, making future corporate updates straightforward." /><section className="people-section"><p>01 / BOARD OF DIRECTORS</p><People people={directors} /></section><section className="people-section management"><p>02 / SENIOR MANAGEMENT TEAM</p><People people={management} /></section></main>; }

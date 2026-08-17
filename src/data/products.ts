export type ProductCategory = 'Finishing' | 'Cleaning' | 'Beautification' | 'Flooring' | 'Roofing' | 'DIY' | 'Aluminium';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  code: string;
  shortDescription: string;
  description: string;
  applications: string[];
  benefits: string[];
  relatedProducts: string[];
  featured?: boolean;
  tone: string;
}

export const products: Product[] = [
  {
    slug: 'tile-adhesive-mortar', name: 'Tile Adhesive / Mortar', category: 'Finishing', code: 'SW–01',
    shortDescription: 'A complete fixing system for modern tiled surfaces.',
    description: 'Manufactured under the ISO 9001:2015 quality management system, Swisstek Tile Adhesive is intended for ceramic and porcelain tiles, granite, marble, and other wall and floor materials.',
    applications: ['Interior floors', 'Interior walls', 'Ceramic and porcelain tiles', 'Granite and marble'],
    benefits: ['Wall and floor application', 'Water-resistant formulation', 'Designed for strong adhesion', 'Multiple material compatibility'],
    relatedProducts: ['tile-grout', 'grout-sealer', 'tile-cleaner'], featured: true, tone: '#c7192d',
  },
  {
    slug: 'tile-grout', name: 'Tile Grout', category: 'Finishing', code: 'SW–02',
    shortDescription: 'The considered final joint between tiled surfaces.',
    description: 'A Swisstek finishing solution for tile joints, presented here without unverified performance specifications.',
    applications: ['Tile joints', 'Bathrooms', 'Kitchens', 'Interior floors'], benefits: ['Clean joint finish', 'Part of a complete tile system', 'Practical application', 'Colour options vary by range'],
    relatedProducts: ['tile-adhesive-mortar', 'grout-sealer', 'tile-cleaner'], featured: true, tone: '#dfddd3',
  },
  {
    slug: 'skim-coat', name: 'Skim Coat', category: 'Finishing', code: 'SW–03',
    shortDescription: 'Surface preparation for refined interior walls.',
    description: 'A wall-finishing solution used to prepare smooth architectural surfaces before their final finish.',
    applications: ['Interior walls', 'Surface preparation', 'Renovation work'], benefits: ['Refined base surface', 'Supports a clean finish', 'Suitable for new work and renovation'],
    relatedProducts: ['tile-adhesive-mortar', 'general-purpose-silicone'], tone: '#efeee8',
  },
  {
    slug: 'quick-flow', name: 'Quick Flow', category: 'Finishing', code: 'SW–04',
    shortDescription: 'A levelling solution for composed floor finishes.',
    description: 'A Swisstek floor-levelling product. Technical coverage and mixing data should be confirmed in the current technical data sheet.',
    applications: ['Floor levelling', 'Preparation before finishes', 'Renovation'], benefits: ['Creates a prepared base', 'Complements flooring systems', 'Technical data available'],
    relatedProducts: ['tile-adhesive-mortar', 'swissparkett'], tone: '#b9b9b2',
  },
  {
    slug: 'grout-sealer', name: 'Grout Sealer', category: 'Finishing', code: 'SW–05',
    shortDescription: 'The protective final step for tiled joints.',
    description: 'A finishing product used as part of Swisstek’s fixing, finishing and cleaning tile system.',
    applications: ['Grout joints', 'Bathrooms', 'Kitchens'], benefits: ['Completes the grout system', 'Simple product-led workflow', 'Catalogue and data sheet available'],
    relatedProducts: ['tile-grout', 'tile-cleaner'], tone: '#f4f1e9',
  },
  {
    slug: 'sw-101-epoxy-grout', name: 'SW–101 Epoxy Grout', category: 'Finishing', code: 'SW–101',
    shortDescription: 'A precise epoxy grout solution for demanding joints.',
    description: 'An epoxy grout product within the Swisstek finishing collection. Refer to the official technical sheet for verified mixing, coverage and chemical performance data.',
    applications: ['Tile joints', 'Wet areas', 'Feature surfaces'], benefits: ['Epoxy system', 'Technical documentation available', 'Designed for precise joints'],
    relatedProducts: ['tile-adhesive-mortar', 'tile-cleaner'], featured: true, tone: '#a9172b',
  },
  {
    slug: 'general-purpose-silicone', name: 'General Purpose Silicone', category: 'Finishing', code: 'SW–06',
    shortDescription: 'Flexible sealing for architectural junctions.',
    description: 'Swisstek general purpose silicone supports finishing at selected joints and interfaces. Confirm substrate suitability in the official data sheet.',
    applications: ['Joints', 'Window interfaces', 'Kitchen and bathroom details'], benefits: ['Flexible joint solution', 'Multi-language catalogues', 'Technical data available'],
    relatedProducts: ['tile-grout', 'swisstek-aluminium'], tone: '#d7d6d0',
  },
  {
    slug: 'aqua-shield-2k', name: 'Aqua Shield 2K', category: 'Finishing', code: 'SW–2K',
    shortDescription: 'Two-component waterproofing for wet-area systems.',
    description: 'A two-component waterproofer in Swisstek’s finishing range. Application conditions and coverage must be taken from the current official technical data sheet.',
    applications: ['Wet areas', 'Bathrooms', 'Waterproof layers', 'Selected exterior areas'], benefits: ['Two-component system', 'Part of a layered wet-area solution', 'Catalogue and TDS available'],
    relatedProducts: ['tile-adhesive-mortar', 'tile-grout', 'grout-sealer'], featured: true, tone: '#2e747c',
  },
  {
    slug: 'tile-cleaner', name: 'Tile Cleaner', category: 'Cleaning', code: 'SW–07',
    shortDescription: 'The care step after installation and finishing.',
    description: 'Swisstek’s dedicated product family for cleaning tiled surfaces. Follow the product label and official documentation before use.',
    applications: ['Tiled floors', 'Tiled walls', 'Post-installation care'], benefits: ['Dedicated tile care', 'Completes the tile ecosystem', 'Straightforward product selection'],
    relatedProducts: ['tile-grout', 'grout-sealer'], tone: '#387b8c',
  },
  {
    slug: 'decorative-pebbles', name: 'Decorative Pebbles', category: 'Beautification', code: 'SW–08',
    shortDescription: 'Natural texture for landscapes and architectural edges.',
    description: 'A beautification range for landscaping and decorative architectural applications.',
    applications: ['Landscaping', 'Garden beds', 'Architectural borders', 'Feature areas'], benefits: ['Natural visual texture', 'Indoor and outdoor styling potential', 'Complements modern landscapes'],
    relatedProducts: ['tile-cleaner'], featured: true, tone: '#7f7768',
  },
  {
    slug: 'roof-master', name: 'Roof Master', category: 'Roofing', code: 'SYS–R',
    shortDescription: 'Roofing systems for a resolved architectural silhouette.',
    description: 'Swisstek’s current roofing product family. Product-specific profiles, finishes and installation data should be verified against the latest Roof Master catalogue.',
    applications: ['Residential roofing', 'Architectural canopies', 'Selected commercial roofs'], benefits: ['Dedicated roofing family', 'Catalogue and leaflet available', 'Part of the wider Swisstek system'],
    relatedProducts: ['general-purpose-silicone', 'swisstek-aluminium'], featured: true, tone: '#31312f',
  },
  {
    slug: 'swissparkett', name: 'Swissparkett', category: 'Flooring', code: 'SYS–F',
    shortDescription: 'Flooring that brings warmth to finished space.',
    description: 'The flooring heritage within Swisstek’s architectural product ecosystem. Current ranges and finish specifications require catalogue confirmation.',
    applications: ['Living areas', 'Bedrooms', 'Interior architectural floors'], benefits: ['Warm visual character', 'Connected to Swisstek flooring heritage', 'Interior-focused system'],
    relatedProducts: ['quick-flow'], featured: true, tone: '#8f623f',
  },
  {
    slug: 'diy-range', name: 'DIY Range', category: 'DIY', code: 'SYS–D',
    shortDescription: 'Accessible solutions for considered improvements.',
    description: 'A current Swisstek product family for practical, smaller-scale project needs. Individual products remain placeholders pending catalogue mapping.',
    applications: ['Home projects', 'Small repairs', 'Renovation'], benefits: ['Practical range', 'Homeowner-friendly pathway', 'Expandable data model'],
    relatedProducts: ['tile-cleaner', 'general-purpose-silicone'], tone: '#e0b51c',
  },
  {
    slug: 'swisstek-aluminium', name: 'Swisstek Aluminium', category: 'Aluminium', code: 'SYS–A',
    shortDescription: 'Architectural framing systems for light, view and edge.',
    description: 'Swisstek Aluminium is presented as a connected product system. Detailed profiles and performance information live with the dedicated aluminium business.',
    applications: ['Windows', 'Doors', 'Architectural framing', 'Façade elements'], benefits: ['Clean architectural detailing', 'Dedicated product business', 'Supports complete-space storytelling'],
    relatedProducts: ['general-purpose-silicone', 'roof-master'], featured: true, tone: '#94999a',
  },
];

export const categories = ['All', 'Finishing', 'Cleaning', 'Beautification', 'Flooring', 'Roofing', 'DIY', 'Aluminium'] as const;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const finderRecommendations: Record<string, string[]> = {
  'Install tiles': ['tile-adhesive-mortar', 'tile-grout', 'grout-sealer'],
  Waterproof: ['aqua-shield-2k', 'tile-adhesive-mortar', 'tile-grout'],
  'Level a floor': ['quick-flow', 'tile-adhesive-mortar'],
  'Finish a wall': ['skim-coat', 'tile-adhesive-mortar'],
  'Seal joints': ['general-purpose-silicone', 'grout-sealer', 'sw-101-epoxy-grout'],
  'Clean tiles': ['tile-cleaner', 'grout-sealer'],
  'Beautify a space': ['decorative-pebbles', 'swissparkett'],
  Roofing: ['roof-master', 'general-purpose-silicone'],
  Flooring: ['swissparkett', 'quick-flow'],
};

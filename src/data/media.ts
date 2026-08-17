import type { VideoRecord } from '@/components/media/VideoCard';

export type MediaCategory = 'product' | 'application' | 'architecture' | 'corporate' | 'news';

export interface MediaAsset {
  key: string;
  name: string;
  sourceUrl: string;
  localUrl?: string;
  category: MediaCategory;
  intendedUse: string;
  sourcePage: string;
  alt: string;
}

export const swisstekMedia: Record<string, MediaAsset> = {
  product_aqua_shield: {
    key: 'product_aqua_shield', name: 'Aqua Shield 2K pack', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2023/02/AQUA-SHIELD-2KTWO-COMPONENT-WATERPROOFER.png',
    localUrl: '/images/swisstek/products/aqua-shield-2k.png', intendedUse: 'Aqua Shield pack shot and wet-area education',
    sourcePage: 'https://swisstekceylon.com/language/en/products/aqua-shield-2ktwo-component-waterproofer/', alt: 'Swisstek Aqua Shield 2K product pack',
  },
  product_tile_adhesive: {
    key: 'product_tile_adhesive', name: 'Tile Adhesive pack range', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2025/08/TILE-Adhisive-Pack-Range-1536x1536.png',
    localUrl: '/images/swisstek/products/tile-adhesive-range.png', intendedUse: 'Tile Adhesive product cards and product page',
    sourcePage: 'https://swisstekceylon.com/language/en/swisstek-at-the-forefront-of-transparent-prices-in-local-hardware-sector/', alt: 'Swisstek Tile Adhesive product range',
  },
  product_tile_grout: {
    key: 'product_tile_grout', name: 'Tile Grout pack range', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2022/07/asd.png', localUrl: '/images/swisstek/products/tile-grout-range.png',
    intendedUse: 'Tile Grout product cards and joint education', sourcePage: 'https://swisstekceylon.com/language/en/products/tile-grout/', alt: 'Swisstek Tile Grout product range',
  },
  product_skim_coat: {
    key: 'product_skim_coat', name: 'Skim Coat pack range', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2022/07/SkimCoa-1024x707.png', localUrl: '/images/swisstek/products/skim-coat-range.png',
    intendedUse: 'Skim Coat pack and wall-preparation education', sourcePage: 'https://swisstekceylon.com/language/en/products/skim-coat/', alt: 'Swisstek Skim Coat product range',
  },
  product_quick_flow: {
    key: 'product_quick_flow', name: 'Quick Flow pack', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2022/01/QuickFlow-884x1024.png', localUrl: '/images/swisstek/products/quick-flow.png',
    intendedUse: 'Quick Flow pack and floor-levelling education', sourcePage: 'https://swisstekceylon.com/language/en/products/quick-flow/', alt: 'Swisstek Quick Flow product pack',
  },
  product_sw101: {
    key: 'product_sw101', name: 'SW–101 Epoxy Grout kit', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2022/07/410d01cf7530c434cc4e6ce71f6b8b04-1024x1024.png', localUrl: '/images/swisstek/products/sw-101-epoxy-grout.png',
    intendedUse: 'SW–101 pack and specialist-joint education', sourcePage: 'https://swisstekceylon.com/language/en/products/sw-101-epoxy-grout/', alt: 'Swisstek SW–101 Epoxy Grout kit',
  },
  product_silicone: {
    key: 'product_silicone', name: 'General Purpose Silicone range', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2023/03/Product2.png', localUrl: '/images/swisstek/products/general-purpose-silicone.png',
    intendedUse: 'Silicone product and gap-sealing education', sourcePage: 'https://swisstekceylon.com/language/en/products/swisstek-general-purpose-silicone/', alt: 'Swisstek General Purpose Silicone range',
  },
  product_grout_sealer: {
    key: 'product_grout_sealer', name: 'Grout Sealer bottle', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2023/03/Grout-sealer-1-987x1024.png', localUrl: '/images/swisstek/products/grout-sealer.png',
    intendedUse: 'Grout Sealer pack and protection education', sourcePage: 'https://swisstekceylon.com/language/en/products/grout-sealer/', alt: 'Swisstek Grout Sealer bottle',
  },
  product_tile_cleaner: {
    key: 'product_tile_cleaner', name: 'Tile Cleaner bottle', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2022/07/Group-8244.png', localUrl: '/images/swisstek/products/tile-cleaner.png',
    intendedUse: 'Tile Cleaner pack and care education', sourcePage: 'https://swisstekceylon.com/language/en/products/tile-cleaner/', alt: 'Swisstek Tile Cleaner bottle',
  },
  product_pebbles: {
    key: 'product_pebbles', name: 'Decorative Pebbles pack', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2022/01/pebbles_pack-876x1024.png', localUrl: '/images/swisstek/products/decorative-pebbles.png',
    intendedUse: 'Decorative Pebbles pack and landscape education', sourcePage: 'https://swisstekceylon.com/language/en/products/decorative-pebbles/', alt: 'Swisstek Decorative Pebbles pack',
  },
  product_roof_master: {
    key: 'product_roof_master', name: 'Roof Master system range', category: 'product',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2024/10/Roofing-2%402x.png', localUrl: '/images/swisstek/products/roof-master-system.png',
    intendedUse: 'Roof Master product family and roofing education', sourcePage: 'https://swisstekceylon.com/language/en/products/roof-master-24/', alt: 'Swisstek Roof Master roofing system range',
  },
  roofing_sheet: {
    key: 'roofing_sheet', name: 'Roofing sheet profile', category: 'application',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2024/10/Roofing-Sheet-1024x513.png', localUrl: '/images/swisstek/applications/roofing-sheet.png',
    intendedUse: 'Roofing profile explainer', sourcePage: 'https://swisstekceylon.com/language/en/products/roof-master-24/', alt: 'Swisstek Roof Master roofing sheet profile',
  },
  roofing_tile: {
    key: 'roofing_tile', name: 'Roofing tile profile', category: 'application',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2024/10/Roofing-Tile-1024x473.png', localUrl: '/images/swisstek/applications/roofing-tile.png',
    intendedUse: 'Roofing tile choice card', sourcePage: 'https://swisstekceylon.com/language/en/products/roof-master-24/', alt: 'Swisstek Roof Master roofing tile profile',
  },
  roofing_cladding: {
    key: 'roofing_cladding', name: 'Roof Master cladding profile', category: 'application',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2024/10/Cladding-1024x468.png', localUrl: '/images/swisstek/applications/cladding.png',
    intendedUse: 'Exterior-envelope explainer', sourcePage: 'https://swisstekceylon.com/language/en/products/roof-master-24/', alt: 'Swisstek Roof Master cladding profile',
  },
  application_aluminium: {
    key: 'application_aluminium', name: 'Aluminium sliding-window project', category: 'application',
    sourceUrl: 'https://www.swisstekaluminium.com/wp-content/uploads/2025/03/Swisstek-projects-Project-1-520x400-1.jpg', localUrl: '/images/swisstek/applications/aluminium-window.jpg',
    intendedUse: 'Aluminium window, frame and junction education', sourcePage: 'https://www.swisstekaluminium.com/transforming-sri-lankas-skylines/', alt: 'Swisstek Aluminium sliding-window application',
  },
  floor_burma_teak: {
    key: 'floor_burma_teak', name: 'Burma Teak floor installation', category: 'application',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2022/06/Burma-Teak-18-mm-0076-scaled-1536x941.jpg', localUrl: '/images/swisstek/applications/burma-teak-floor.jpg',
    intendedUse: 'Swissparkett flooring and living-space photography', sourcePage: 'https://swisstekceylon.com/language/en/wood-flooring/', alt: 'Real Swisstek Burma Teak floor installation',
  },
  floor_indonesian_teak: {
    key: 'floor_indonesian_teak', name: 'Indonesian Teak floor installation', category: 'application',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2022/06/INDONESIAN-TEAK-WA0003-1-1024x512.jpg', localUrl: '/images/swisstek/applications/indonesian-teak-floor.jpg',
    intendedUse: 'Interior floor and bedroom photography', sourcePage: 'https://swisstekceylon.com/language/en/wood-flooring/', alt: 'Real Swisstek Indonesian Teak floor installation',
  },
  floor_merbau_decking: {
    key: 'floor_merbau_decking', name: 'Merbau outdoor decking', category: 'application',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2022/06/Merbau-outdoor-Decking-0075-scaled-864x1536.jpg', localUrl: '/images/swisstek/applications/merbau-decking.jpg',
    intendedUse: 'Outdoor space and landscape photography', sourcePage: 'https://swisstekceylon.com/language/en/wood-flooring/', alt: 'Real Swisstek Merbau outdoor decking',
  },
  corporate_engineer: {
    key: 'corporate_engineer', name: 'Aluminium engineer', category: 'corporate',
    sourceUrl: 'https://www.swisstekaluminium.com/wp-content/uploads/2025/03/Engineering-the-Aluminium-Solutions-of-Tomorrow-845x635-1.jpg', localUrl: '/images/swisstek/corporate/aluminium-engineer.jpg',
    intendedUse: 'Company, engineering and service storytelling', sourcePage: 'https://www.swisstekaluminium.com/about-us/', alt: 'Swisstek Aluminium engineer at work',
  },
  corporate_factory: {
    key: 'corporate_factory', name: 'Aluminium production facility', category: 'corporate',
    sourceUrl: 'https://www.swisstekaluminium.com/wp-content/uploads/2025/03/Excellence-in-Every-Extrusion-835x645-1.jpg', localUrl: '/images/swisstek/corporate/aluminium-production.jpg',
    intendedUse: 'Manufacturing and company storytelling', sourcePage: 'https://www.swisstekaluminium.com/about-us/', alt: 'Swisstek Aluminium production facility',
  },
  project_canterbury: {
    key: 'project_canterbury', name: 'Canterbury Golf Resort Apartments', category: 'architecture',
    sourceUrl: 'https://www.swisstekaluminium.com/wp-content/uploads/2025/03/Canterbury-Golf-Resort-Apartments.jpg', localUrl: '/images/swisstek/architecture/canterbury-project.jpg',
    intendedUse: 'Residential architecture and project proof', sourcePage: 'https://www.swisstekaluminium.com/about-us/', alt: 'Canterbury Golf Resort Apartments with Swisstek Aluminium',
  },
  project_jetwing: {
    key: 'project_jetwing', name: 'Jetwing Colombo Seven project', category: 'architecture',
    sourceUrl: 'https://www.swisstekaluminium.com/wp-content/uploads/2025/03/Swisstek-projects-Jetwing-Colombo-Seven-520x400-1.jpg', localUrl: '/images/swisstek/architecture/jetwing-colombo.jpg',
    intendedUse: 'Commercial project and application proof', sourcePage: 'https://www.swisstekaluminium.com/transforming-sri-lankas-skylines/', alt: 'Jetwing Colombo Seven, a Swisstek Aluminium project',
  },
  news_rugby_camp: {
    key: 'news_rugby_camp', name: 'Vidyartha rugby development camp', category: 'news',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2025/06/IMG-01-2-scaled-1536x1024.jpg', localUrl: '/images/swisstek/news/rugby-camp.jpg',
    intendedUse: 'Community news card', sourcePage: 'https://swisstekceylon.com/language/en/swisstek-strengthens-community-impact-with-vidyartha-rugby-development-camp-at-mahiyanganaya/', alt: 'Swisstek Vidyartha rugby development camp in Mahiyanganaya',
  },
  news_slsi_certification: {
    key: 'news_slsi_certification', name: 'SLSI certification artwork', category: 'news',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2022/06/SLS-1-1536x779.jpg', localUrl: '/images/swisstek/news/slsi-certification.jpg',
    intendedUse: 'Standards and company proof', sourcePage: 'https://swisstekceylon.com/language/en/slsi-certification-obtained-for-swisstek-tile-adhesive-and-tile-grout/', alt: 'Swisstek SLSI certification announcement',
  },
  news_managing_director: {
    key: 'news_managing_director', name: 'Group Managing Director appointment', category: 'news',
    sourceUrl: 'https://swisstekceylon.com/wp-content/uploads/2025/08/MD-1536x1533.png', intendedUse: 'Leadership news card',
    sourcePage: 'https://swisstekceylon.com/language/en/daminda-perera-takes-the-helm-as-group-managing-director-at-swisstek-duplicate-87567-2/', alt: 'Daminda Perera appointed Group Managing Director at Swisstek',
  },
  application_tile_installation: {
    key: 'application_tile_installation', name: 'Official Tile Adhesive film still', category: 'application',
    sourceUrl: 'https://i.ytimg.com/vi/m04vVKkLLKU/maxresdefault.jpg', intendedUse: 'Tile fixing problem cards and product application context',
    sourcePage: 'https://www.youtube.com/watch?v=m04vVKkLLKU', alt: 'Swisstek Tile Adhesive shown in its official film',
  },
  application_waterproofing: {
    key: 'application_waterproofing', name: 'Official Aqua Shield application film still', category: 'application',
    sourceUrl: 'https://i.ytimg.com/vi/f4qmNnk5ifQ/maxresdefault.jpg', intendedUse: 'Bathroom and wet-area waterproofing education',
    sourcePage: 'https://www.youtube.com/watch?v=f4qmNnk5ifQ', alt: 'Aqua Shield waterproofing application from the official Swisstek film',
  },
  application_grout: {
    key: 'application_grout', name: 'Official Tile Grout film still', category: 'application',
    sourceUrl: 'https://i.ytimg.com/vi/5S0rKs5OhmQ/maxresdefault.jpg', intendedUse: 'Tile-joint education and grout cards',
    sourcePage: 'https://www.youtube.com/watch?v=5S0rKs5OhmQ', alt: 'Swisstek Tile Grout application from the official film',
  },
  application_grout_sealer: {
    key: 'application_grout_sealer', name: 'Official Grout Sealer film still', category: 'application',
    sourceUrl: 'https://i.ytimg.com/vi/nXDs3FIfR1k/maxresdefault.jpg', intendedUse: 'Grout protection education',
    sourcePage: 'https://www.youtube.com/watch?v=nXDs3FIfR1k', alt: 'Swisstek Grout Sealer application from the official film',
  },
  application_sw101: {
    key: 'application_sw101', name: 'Official SW–101 film still', category: 'application',
    sourceUrl: 'https://i.ytimg.com/vi/eqU80nfWyyg/hqdefault.jpg', intendedUse: 'Epoxy grout application context',
    sourcePage: 'https://www.youtube.com/watch?v=eqU80nfWyyg', alt: 'SW–101 Epoxy Grout application from the official Swisstek film',
  },
};

const aliases: Record<string, string> = {
  application_floor_levelling: 'product_quick_flow',
  application_skim_coat: 'product_skim_coat',
  application_silicone: 'application_aluminium',
  application_tile_cleaner: 'product_tile_cleaner',
  application_pebbles: 'product_pebbles',
  application_flooring: 'floor_burma_teak',
  application_roofing: 'product_roof_master',
  space_bathroom: 'application_waterproofing',
  space_kitchen: 'application_tile_installation',
  space_living: 'project_canterbury',
  space_bedroom: 'floor_indonesian_teak',
  space_outdoor: 'floor_merbau_decking',
  space_roof: 'product_roof_master',
  space_commercial: 'project_jetwing',
};

export function getMedia(key: string): MediaAsset | undefined {
  return swisstekMedia[key] ?? swisstekMedia[aliases[key]];
}

export interface ProductMediaKeys { pack?: string; application?: string }

const productMedia: Record<string, ProductMediaKeys> = {
  'tile-adhesive-mortar': { pack: 'product_tile_adhesive', application: 'application_tile_installation' },
  'tile-grout': { pack: 'product_tile_grout', application: 'application_grout' },
  'skim-coat': { pack: 'product_skim_coat', application: 'application_skim_coat' },
  'quick-flow': { pack: 'product_quick_flow', application: 'application_floor_levelling' },
  'grout-sealer': { pack: 'product_grout_sealer', application: 'application_grout_sealer' },
  'sw-101-epoxy-grout': { pack: 'product_sw101', application: 'application_sw101' },
  'general-purpose-silicone': { pack: 'product_silicone', application: 'application_aluminium' },
  'aqua-shield-2k': { pack: 'product_aqua_shield', application: 'application_waterproofing' },
  'tile-cleaner': { pack: 'product_tile_cleaner', application: 'application_tile_cleaner' },
  'decorative-pebbles': { pack: 'product_pebbles', application: 'application_pebbles' },
  'roof-master': { pack: 'product_roof_master', application: 'application_roofing' },
  swissparkett: { application: 'application_flooring' },
  'swisstek-aluminium': { application: 'application_aluminium' },
};

export function getProductMedia(slug: string): ProductMediaKeys | undefined {
  return productMedia[slug];
}

export const swisstekVideos: Record<string, VideoRecord> = {
  brand_story: { key: 'brand_story', youtubeId: 'GtdDWSz1xJs', title: 'Swisstek | Building Better, Since 1967', description: 'A corporate story from the official Swisstek Ceylon channel.', category: 'Brand story', thumbnail: 'https://i.ytimg.com/vi/GtdDWSz1xJs/hqdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=GtdDWSz1xJs' },
  aqua_shield_application: { key: 'aqua_shield_application', youtubeId: 'f4qmNnk5ifQ', title: 'Swisstek Aqua Shield 2K Waterproofer — English', description: 'Official English application guidance for Aqua Shield 2K.', category: 'Waterproofing / application', thumbnail: 'https://i.ytimg.com/vi/f4qmNnk5ifQ/maxresdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=f4qmNnk5ifQ' },
  aqua_shield_sinhala: { key: 'aqua_shield_sinhala', youtubeId: 'dGiQhV3QQyw', title: 'Swisstek Aqua Shield 2K Waterproofer — Sinhala', description: 'Official Sinhala application guidance for Aqua Shield 2K.', category: 'Waterproofing / Sinhala', thumbnail: 'https://i.ytimg.com/vi/dGiQhV3QQyw/maxresdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=dGiQhV3QQyw' },
  aqua_shield_tamil: { key: 'aqua_shield_tamil', youtubeId: 'Ldq0XqJUYJ4', title: 'Swisstek Aqua Shield 2K Waterproofer — Tamil', description: 'Official Tamil application guidance for Aqua Shield 2K.', category: 'Waterproofing / Tamil', thumbnail: 'https://i.ytimg.com/vi/Ldq0XqJUYJ4/maxresdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=Ldq0XqJUYJ4' },
  aqua_shield_promo: { key: 'aqua_shield_promo', youtubeId: 'QGKdZUUl7gI', title: 'Swisstek Aqua Shield 2K Waterproofer', description: 'A concise official Aqua Shield product film.', category: 'Waterproofing', thumbnail: 'https://i.ytimg.com/vi/QGKdZUUl7gI/maxresdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=QGKdZUUl7gI' },
  sw101_epoxy_grout: { key: 'sw101_epoxy_grout', youtubeId: 'eqU80nfWyyg', title: 'Swisstek SW–101 Epoxy Grout', description: 'Official English SW–101 product and application guidance.', category: 'Tile joints / application', thumbnail: 'https://i.ytimg.com/vi/eqU80nfWyyg/hqdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=eqU80nfWyyg' },
  sw101_sinhala: { key: 'sw101_sinhala', youtubeId: 'AnCv_2Hx9Dc', title: 'Swisstek SW–101 Epoxy Grout — Sinhala', description: 'Official Sinhala SW–101 guidance.', category: 'Tile joints / Sinhala', thumbnail: 'https://i.ytimg.com/vi/AnCv_2Hx9Dc/maxresdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=AnCv_2Hx9Dc' },
  sw101_tamil: { key: 'sw101_tamil', youtubeId: 's4SzhFk0WGI', title: 'Swisstek SW–101 Epoxy Grout — Tamil', description: 'Official Tamil SW–101 guidance.', category: 'Tile joints / Tamil', thumbnail: 'https://i.ytimg.com/vi/s4SzhFk0WGI/hqdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=s4SzhFk0WGI' },
  tile_mortar_application: { key: 'tile_mortar_application', youtubeId: 'GW_RhODQq6o', title: 'Swisstek Tile Mortar', description: 'Official application film for the Swisstek tile-fixing system.', category: 'Tile installation / application', thumbnail: 'https://i.ytimg.com/vi/GW_RhODQq6o/maxresdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=GW_RhODQq6o' },
  tile_adhesive_promo: { key: 'tile_adhesive_promo', youtubeId: 'm04vVKkLLKU', title: 'Swisstek Tile Adhesive', description: 'A concise official Tile Adhesive product film.', category: 'Tile installation', thumbnail: 'https://i.ytimg.com/vi/m04vVKkLLKU/maxresdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=m04vVKkLLKU' },
  tile_grout_application: { key: 'tile_grout_application', youtubeId: '5S0rKs5OhmQ', title: 'Swisstek Tile Grout', description: 'Official Swisstek Tile Grout application film.', category: 'Tile joints / application', thumbnail: 'https://i.ytimg.com/vi/5S0rKs5OhmQ/maxresdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=5S0rKs5OhmQ' },
  grout_sealer_application: { key: 'grout_sealer_application', youtubeId: 'nXDs3FIfR1k', title: 'Swisstek Grout Sealer', description: 'Official Swisstek Grout Sealer application film.', category: 'Tile care / application', thumbnail: 'https://i.ytimg.com/vi/nXDs3FIfR1k/maxresdefault.jpg', sourceUrl: 'https://www.youtube.com/watch?v=nXDs3FIfR1k' },
};

export function getVideo(key: string): VideoRecord | undefined {
  return swisstekVideos[key];
}

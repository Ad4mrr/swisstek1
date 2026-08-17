export type ScenarioAnswer = 'yes' | 'no' | 'maybe';

export interface ProductEducation {
  what: string;
  problem: string;
  where: string[];
  when: string;
  scenarios: Array<{ question: string; answer: ScenarioAnswer; explanation: string; alternative?: string }>;
  stages: Array<{ label: string; title: string; description: string }>;
  faq: Array<{ question: string; answer: string }>;
  relatedReasons: Record<string, string>;
  videoKey?: string;
}

const standardFaq = (use: string, where: string, companions: string): ProductEducation['faq'] => [
  { question: 'What is this product used for?', answer: use },
  { question: 'Where can I use it?', answer: where },
  { question: 'How do I apply it?', answer: 'Follow the preparation, mixing and application steps in the current official Swisstek catalogue or technical data sheet. Product-specific conditions appear in the technical section below.' },
  { question: 'What do I need before using it?', answer: 'The working surface must be prepared as described in the current official Swisstek instructions. Check the relevant data sheet before starting.' },
  { question: 'What products work with it?', answer: companions },
  { question: 'Where can I buy it?', answer: 'Use the Swisstek Dealer Network to find the nearest available supplier.' },
];

export const productEducation: Record<string, ProductEducation> = {
  'tile-adhesive-mortar': {
    what: 'Fixes tiles securely to walls and floors.',
    problem: 'You need to install ceramic, porcelain, granite or marble surfaces without relying on a traditional sand-and-cement mix.',
    where: ['Interior floors', 'Interior walls', 'Bathrooms with the appropriate mortar variant', 'Selected wet or exterior areas with the appropriate mortar variant'],
    when: 'After the surface is prepared and before the tile joints are filled.',
    scenarios: [
      { question: 'I am installing tiles on a prepared wall or floor.', answer: 'yes', explanation: 'Tile Adhesive is the fixing layer that holds the tiles in position.' },
      { question: 'I need to fill the visible gaps between tiles.', answer: 'no', explanation: 'That is a finishing step after tile installation.', alternative: 'tile-grout' },
      { question: 'I am working in a very wet or specialist area.', answer: 'maybe', explanation: 'Swisstek has different mortar variants. Select the correct one using the official product guidance.' },
    ],
    stages: [
      { label: '01 / PREPARE', title: 'Clean, level surface', description: 'Prepare and clean the wall or floor according to the product instructions.' },
      { label: '02 / FIX', title: 'Adhesive layer', description: 'Apply the appropriate Swisstek tile adhesive with the recommended trowel.' },
      { label: '03 / FINISH', title: 'Tiles and joints', description: 'Position the tiles, then complete the joints with an appropriate Swisstek grout.' },
    ],
    faq: standardFaq('It is used to install ceramic and porcelain tiles, granite, marble and other approved wall and floor finishes.', 'Application areas depend on the selected Swisstek mortar variant. The official range includes options for dry interiors and selected wet or specialist areas.', 'Tile Grout completes the joints; Grout Sealer and Tile Cleaner support protection and care.'),
    relatedReasons: { 'tile-grout': 'Finishes the joints after the tiles are fixed.', 'grout-sealer': 'Adds a protection step after grouting.', 'tile-cleaner': 'Supports care of the completed tiled surface.' },
    videoKey: 'tile_mortar_application',
  },
  'tile-grout': {
    what: 'Fills and finishes the gaps between tiles.',
    problem: 'Your tiles are installed, but the open joints still need a clean finished surface.',
    where: ['Tile joints', 'Bathroom tile joints', 'Kitchen tile joints', 'Tiled floors and walls'],
    when: 'After the tile adhesive has set, following the current product instructions.',
    scenarios: [
      { question: 'My tiles are installed and the joints are still open.', answer: 'yes', explanation: 'Tile Grout is designed to fill and finish those joints.' },
      { question: 'I need to attach tiles to the wall.', answer: 'no', explanation: 'Use a tile adhesive for the fixing layer.', alternative: 'tile-adhesive-mortar' },
      { question: 'I need a specialist epoxy joint finish.', answer: 'no', explanation: 'Explore the SW–101 Epoxy Grout system.', alternative: 'sw-101-epoxy-grout' },
    ],
    stages: [{ label: '01 / OPEN JOINT', title: 'Installed tiles', description: 'Begin after tile installation has reached the stage stated in the official instructions.' },{ label: '02 / FILL', title: 'Grout application', description: 'Fill the prepared joints following Swisstek application guidance.' },{ label: '03 / COMPLETE', title: 'Finished tile grid', description: 'Clean and protect the finished surface with the appropriate companion products.' }],
    faq: standardFaq('It fills and finishes joints between installed tiles.', 'Use it in approved tiled wall and floor joints.', 'Tile Adhesive comes first; Grout Sealer and Tile Cleaner support the completed surface.'),
    relatedReasons: { 'tile-adhesive-mortar': 'Fixes the tiles before the joints are grouted.', 'grout-sealer': 'Helps protect the completed grout joints.', 'tile-cleaner': 'Helps care for the finished tile surface.' },
    videoKey: 'tile_grout_application',
  },
  'skim-coat': {
    what: 'Smooths rough or uneven walls before the final finish.',
    problem: 'A wall surface needs a cleaner, smoother base before its decorative finish.',
    where: ['Interior walls', 'Prepared plastered surfaces', 'New work and selected renovations'],
    when: 'During wall preparation, before the approved final wall finish.',
    scenarios: [{ question: 'My prepared wall is rough or uneven.', answer: 'yes', explanation: 'Skim Coat creates a smoother finishing surface.' },{ question: 'I am trying to level a concrete floor.', answer: 'no', explanation: 'Quick Flow is the floor-levelling pathway.', alternative: 'quick-flow' },{ question: 'I need to fill tile joints.', answer: 'no', explanation: 'Use Tile Grout for joints between tiles.', alternative: 'tile-grout' }],
    stages: [{ label: '01 / BEFORE', title: 'Rough wall', description: 'Inspect and prepare the wall as required by the official instructions.' },{ label: '02 / APPLICATION', title: 'Skim layer', description: 'Apply the product using the documented method.' },{ label: '03 / RESULT', title: 'Smooth base', description: 'Continue with the approved final finish once ready.' }],
    faq: standardFaq('It creates a smooth prepared wall surface before the final finish.', 'Use it on approved interior wall surfaces.', 'The next product depends on the specified final wall finish.'),
    relatedReasons: { 'general-purpose-silicone': 'Finishes selected junctions and gaps after the main surfaces are complete.', 'tile-adhesive-mortar': 'Supports the next layer when the intended finish is tile.' },
  },
  'quick-flow': {
    what: 'Levels uneven concrete floors before the final flooring is installed.',
    problem: 'The floor base is not level enough for a clean final floor finish.',
    where: ['Prepared concrete floors', 'Areas receiving an approved final floor finish'],
    when: 'After floor preparation and before tiles, vinyl, carpet or another approved final finish.',
    scenarios: [{ question: 'My concrete floor is uneven before the final finish.', answer: 'yes', explanation: 'Quick Flow is Swisstek’s floor-levelling pathway.' },{ question: 'I need to smooth a wall.', answer: 'no', explanation: 'Skim Coat is the wall-preparation product.', alternative: 'skim-coat' },{ question: 'I need to attach tiles.', answer: 'no', explanation: 'Level first if required, then use the correct Tile Adhesive.', alternative: 'tile-adhesive-mortar' }],
    stages: [{ label: '01 / BEFORE', title: 'Uneven concrete', description: 'Prepare the floor exactly as stated in the technical guidance.' },{ label: '02 / APPLICATION', title: 'Levelling layer', description: 'Apply Quick Flow using the official mixing and placement method.' },{ label: '03 / RESULT', title: 'Level base', description: 'Install the approved final finish after the documented readiness time.' }],
    faq: standardFaq('It prepares a level floor base before an approved final floor finish.', 'Use it on the prepared concrete floor areas stated in official product guidance.', 'Tile Adhesive or Swissparkett may follow, depending on the chosen final floor.'),
    relatedReasons: { 'tile-adhesive-mortar': 'Installs tiles over a correctly prepared base.', swissparkett: 'Provides a final interior flooring pathway.' },
  },
  'grout-sealer': {
    what: 'Helps protect completed grout joints from everyday dirt and moisture.',
    problem: 'New or existing grout joints need an added protection step.',
    where: ['Approved grout joints', 'Tiled kitchens', 'Tiled bathrooms'],
    when: 'After grouting is complete and the joint is ready according to the product instructions.',
    scenarios: [{ question: 'I want to add protection to completed grout joints.', answer: 'yes', explanation: 'Grout Sealer is the protection step in the tile system.' },{ question: 'My tile joints are still empty.', answer: 'no', explanation: 'Fill the joints with the appropriate grout first.', alternative: 'tile-grout' },{ question: 'I only need to clean a tiled surface.', answer: 'no', explanation: 'Use Tile Cleaner for the cleaning step.', alternative: 'tile-cleaner' }],
    stages: [{ label: '01 / FINISH', title: 'Completed grout', description: 'Begin only when the grout is ready under the official guidance.' },{ label: '02 / PROTECT', title: 'Sealer application', description: 'Apply as directed to the approved joint area.' },{ label: '03 / MAINTAIN', title: 'Cared-for joints', description: 'Use approved cleaning methods for ongoing care.' }],
    faq: standardFaq('It adds a protection step to approved grout joints.', 'Use it on the grout joint areas specified by Swisstek.', 'Tile Grout comes before it; Tile Cleaner supports ongoing care.'),
    relatedReasons: { 'tile-grout': 'Creates the grout joint that is later protected.', 'tile-cleaner': 'Supports care of the finished tiled surface.' },
  },
  'sw-101-epoxy-grout': {
    what: 'Creates a specialist epoxy finish in tile joints.',
    problem: 'The project calls for the SW–101 epoxy joint system rather than standard tile grout.',
    where: ['Approved tile joints', 'Selected wet areas', 'Feature tiled surfaces'],
    when: 'After tile installation, where the SW–101 system is specified.',
    scenarios: [{ question: 'My project specifies a Swisstek epoxy grout joint.', answer: 'yes', explanation: 'SW–101 is the specialist epoxy grout pathway.' },{ question: 'I need to fix tiles to a floor.', answer: 'no', explanation: 'Use the appropriate Tile Adhesive first.', alternative: 'tile-adhesive-mortar' },{ question: 'I am unsure which grout system applies.', answer: 'maybe', explanation: 'Compare the approved catalogue and technical guidance or speak to Swisstek.' }],
    stages: [{ label: '01 / PREPARE', title: 'Clean tile joints', description: 'Prepare the joints using current official guidance.' },{ label: '02 / APPLY', title: 'Epoxy grout system', description: 'Mix and apply the two-part system exactly as documented.' },{ label: '03 / FINISH', title: 'Precise joints', description: 'Clean and finish within the documented working process.' }],
    faq: standardFaq('It provides the SW–101 epoxy finish for approved tile joints.', 'Use it only in the joint applications approved in current official documentation.', 'Tile Adhesive supports the installation layer before grouting.'),
    relatedReasons: { 'tile-adhesive-mortar': 'Installs the tiles before the epoxy joints are completed.', 'tile-cleaner': 'Supports care of the completed tiled surface.' },
    videoKey: 'sw101_epoxy_grout',
  },
  'general-purpose-silicone': {
    what: 'Seals selected gaps and joints around finished surfaces.',
    problem: 'A flexible finishing gap remains at an approved junction or edge.',
    where: ['Approved window interfaces', 'Selected kitchen details', 'Selected bathroom details', 'Other documented joints'],
    when: 'During the final junction and edge-finishing stage.',
    scenarios: [{ question: 'I need to seal an approved gap at a finished junction.', answer: 'yes', explanation: 'General Purpose Silicone provides a flexible finishing pathway.' },{ question: 'I need to fill the regular joints between tiles.', answer: 'no', explanation: 'Use the appropriate Tile Grout.', alternative: 'tile-grout' },{ question: 'I need to waterproof the whole bathroom beneath the tiles.', answer: 'no', explanation: 'Explore the Aqua Shield waterproofing layer.', alternative: 'aqua-shield-2k' }],
    stages: [{ label: '01 / GAP', title: 'Prepared junction', description: 'Confirm surface compatibility and prepare the joint.' },{ label: '02 / SEAL', title: 'Silicone line', description: 'Apply according to the current product instructions.' },{ label: '03 / FINISH', title: 'Clean edge', description: 'Allow the product to finish as officially directed.' }],
    faq: standardFaq('It seals approved gaps and junctions as a flexible finishing product.', 'Use it only on compatible surfaces and joints listed in the current official data sheet.', 'The companion product depends on the wall, window or tile system at that junction.'),
    relatedReasons: { 'tile-grout': 'Fills the regular joints within the tile field.', 'swisstek-aluminium': 'Forms window and architectural frame junctions that may need approved sealing.' },
  },
  'aqua-shield-2k': {
    what: 'Creates a waterproof protective layer before the final surface finish.',
    problem: 'Concrete or masonry needs protection from water exposure before the finished layers are installed.',
    where: ['Bathrooms', 'Kitchens', 'Rooftops and concrete slabs', 'Swimming pools and water tanks', 'Foundations, retaining walls and other approved concrete or masonry areas'],
    when: 'After the surface is prepared and before the compatible tile or final finishing system.',
    scenarios: [{ question: 'I am waterproofing a bathroom before tiling.', answer: 'yes', explanation: 'Aqua Shield forms the protective layer beneath the compatible tile system.' },{ question: 'I just want to clean existing tiles.', answer: 'no', explanation: 'Choose Tile Cleaner for surface care.', alternative: 'tile-cleaner' },{ question: 'I need to fill gaps between installed tiles.', answer: 'no', explanation: 'Choose Tile Grout or SW–101 as appropriate.', alternative: 'tile-grout' }],
    stages: [{ label: '01 / SURFACE', title: 'Prepared concrete or masonry', description: 'Allow new work to cure and clean the surface as stated in official guidance.' },{ label: '02 / WATERPROOF', title: 'Aqua Shield layer', description: 'Mix and brush-apply the two-component system according to the data sheet.' },{ label: '03 / TILE SYSTEM', title: 'Compatible final layers', description: 'Continue with a compatible Swisstek tile adhesive and finishing system.' }],
    faq: standardFaq('It creates a waterproofing layer that helps protect approved concrete and masonry areas from water exposure.', 'Official uses include bathrooms, kitchens, rooftops, slabs, selected structural areas, pools and tanks. Confirm the exact application in the current data sheet.', 'A compatible Tile Adhesive, Tile Grout and optional protection/cleaning products complete a tiled wet-area system.'),
    relatedReasons: { 'tile-adhesive-mortar': 'Installs the compatible tile layer above the waterproofing system.', 'tile-grout': 'Finishes the tile joints.', 'grout-sealer': 'Adds protection to completed grout joints.' },
    videoKey: 'aqua_shield_application',
  },
  'tile-cleaner': {
    what: 'Helps remove dirt and residue from tiled surfaces.',
    problem: 'An installed tiled surface needs the appropriate Swisstek cleaning step.',
    where: ['Approved tiled floors', 'Approved tiled walls', 'Post-installation care where documented'],
    when: 'After installation or during ongoing tile care, following label instructions.',
    scenarios: [{ question: 'I need to clean an existing tiled surface.', answer: 'yes', explanation: 'Tile Cleaner is Swisstek’s dedicated tile-care pathway.' },{ question: 'I need to fill tile joints.', answer: 'no', explanation: 'Use the appropriate Tile Grout.', alternative: 'tile-grout' },{ question: 'I need to waterproof beneath new tiles.', answer: 'no', explanation: 'Explore Aqua Shield before the final tile system.', alternative: 'aqua-shield-2k' }],
    stages: [{ label: '01 / ASSESS', title: 'Tiled surface', description: 'Check surface compatibility and product instructions.' },{ label: '02 / CLEAN', title: 'Approved cleaning step', description: 'Use the product exactly as directed on the official label.' },{ label: '03 / CARE', title: 'Finished surface', description: 'Continue with appropriate ongoing maintenance.' }],
    faq: standardFaq('It is used to clean approved tiled surfaces.', 'Use it only on tile types and conditions stated on the official product label.', 'Grout Sealer may support joint protection after the tiled system is completed.'),
    relatedReasons: { 'tile-grout': 'Completes the joints within the tiled surface.', 'grout-sealer': 'Adds a protection step to approved grout joints.' },
  },
  'decorative-pebbles': {
    what: 'Adds polished natural stone texture to indoor and outdoor decorative spaces.',
    problem: 'A landscape, aquarium or feature area needs a natural decorative finish.',
    where: ['Interior decorative areas', 'Exterior landscapes', 'Aquariums and approved feature spaces'],
    when: 'During the final beautification and landscaping stage.',
    scenarios: [{ question: 'I want a polished stone finish in a garden or feature area.', answer: 'yes', explanation: 'Decorative Pebbles add natural colour and texture.' },{ question: 'I need to level a floor.', answer: 'no', explanation: 'Use Quick Flow for floor levelling.', alternative: 'quick-flow' },{ question: 'I need a timber-look interior floor.', answer: 'no', explanation: 'Explore Swissparkett.', alternative: 'swissparkett' }],
    stages: [{ label: '01 / PLAN', title: 'Feature area', description: 'Prepare the intended decorative area.' },{ label: '02 / PLACE', title: 'Pebble layer', description: 'Arrange the selected Swisstek pebble size and colour.' },{ label: '03 / BEAUTIFY', title: 'Natural texture', description: 'Complete the landscape or interior feature.' }],
    faq: standardFaq('They add natural decorative stone colour and texture.', 'Official uses include approved interior, exterior and aquarium applications.', 'They work as a final beautification layer rather than a fixing or structural product.'),
    relatedReasons: { 'tile-cleaner': 'Supports care of adjacent tiled architectural surfaces.' },
  },
  'roof-master': {
    what: 'Provides roofing and related metal solutions for homes and commercial buildings.',
    problem: 'A project needs an approved roof, cladding or related roof-system component.',
    where: ['Residential buildings', 'Commercial buildings', 'Industrial buildings', 'Approved cladding and roof applications'],
    when: 'During the building-envelope and roofing stage.',
    scenarios: [{ question: 'I need a Zinc Aluminium roofing solution.', answer: 'yes', explanation: 'Roof Master is Swisstek’s dedicated roofing family.' },{ question: 'I need timber-style interior flooring.', answer: 'no', explanation: 'Explore Swissparkett.', alternative: 'swissparkett' },{ question: 'I need help selecting a profile or accessory.', answer: 'maybe', explanation: 'Use the current Roof Master catalogue or speak to Swisstek for project guidance.' }],
    stages: [{ label: '01 / SELECT', title: 'Roof requirement', description: 'Choose the approved sheet, tile, cladding or accessory system.' },{ label: '02 / INSTALL', title: 'Roof system', description: 'Use the documented fixing and project guidance.' },{ label: '03 / COMPLETE', title: 'Protected silhouette', description: 'Complete flashings, gutters and accessories as specified.' }],
    faq: standardFaq('The family includes Zinc Aluminium roofing, cladding and related accessories.', 'Official applications include residential, commercial and industrial building projects.', 'Accessories, gutters, purlins and approved junction products help complete the roof system.'),
    relatedReasons: { 'general-purpose-silicone': 'Supports selected approved finishing junctions.', 'swisstek-aluminium': 'Complements the wider architectural envelope.' },
  },
  swissparkett: {
    what: 'Provides a warm finished flooring surface for interior spaces.', problem: 'An interior needs a resolved decorative flooring finish.', where: ['Living areas', 'Bedrooms', 'Approved interior spaces'], when: 'After the floor base is correctly prepared.',
    scenarios: [{ question: 'I am choosing a finished floor for an interior living space.', answer: 'yes', explanation: 'Swissparkett is the Swisstek flooring pathway.' },{ question: 'My concrete floor needs levelling first.', answer: 'maybe', explanation: 'Prepare the base first and explore Quick Flow where appropriate.', alternative: 'quick-flow' },{ question: 'I need a roofing sheet.', answer: 'no', explanation: 'Explore Roof Master.', alternative: 'roof-master' }],
    stages: [{ label: '01 / BASE', title: 'Prepared floor', description: 'Confirm the base meets the flooring requirements.' },{ label: '02 / FLOOR', title: 'Swissparkett finish', description: 'Install the approved flooring system.' },{ label: '03 / SPACE', title: 'Warm interior', description: 'Complete the room around the selected finish.' }],
    faq: standardFaq('It provides a finished interior flooring pathway.', 'Use it in approved interior spaces and on correctly prepared bases.', 'Quick Flow may support base preparation where specified.'), relatedReasons: { 'quick-flow': 'Helps prepare an uneven concrete base before a final floor system.' },
  },
  'diy-range': {
    what: 'Groups practical Swisstek solutions for smaller home improvement needs.', problem: 'A homeowner needs a straightforward product pathway for a smaller task.', where: ['Approved home projects', 'Small repairs and improvements'], when: 'When the specific DIY product matches the job and surface.',
    scenarios: [{ question: 'I have a small home improvement task.', answer: 'maybe', explanation: 'Choose the exact DIY product only after matching it to the job.' },{ question: 'I need a full bathroom waterproofing system.', answer: 'no', explanation: 'Start with the dedicated Aqua Shield pathway.', alternative: 'aqua-shield-2k' }],
    stages: [{ label: '01 / IDENTIFY', title: 'The home task', description: 'Match the problem to the exact product.' },{ label: '02 / CHECK', title: 'Instructions', description: 'Confirm surface compatibility and preparation.' },{ label: '03 / COMPLETE', title: 'Practical improvement', description: 'Apply only as officially directed.' }],
    faq: standardFaq('It provides practical products for selected home improvement needs.', 'Application depends on the individual product in the DIY range.', 'Companion products depend on the specific task.'), relatedReasons: { 'tile-cleaner': 'Supports a straightforward tile-care task.', 'general-purpose-silicone': 'Supports approved small gap-sealing tasks.' },
  },
  'swisstek-aluminium': {
    what: 'Frames windows, doors and architectural openings with aluminium systems.', problem: 'A project needs clean, durable architectural framing around openings.', where: ['Windows', 'Doors', 'Architectural frames', 'Approved façade elements'], when: 'During the building-envelope and opening-installation stage.',
    scenarios: [{ question: 'I need aluminium windows, doors or frames.', answer: 'yes', explanation: 'Swisstek Aluminium is the dedicated connected business.' },{ question: 'I need to seal a small approved frame junction.', answer: 'maybe', explanation: 'The frame comes first; a compatible Silicone may complete selected junctions.', alternative: 'general-purpose-silicone' },{ question: 'I need tile adhesive.', answer: 'no', explanation: 'Explore the tile-installation system.', alternative: 'tile-adhesive-mortar' }],
    stages: [{ label: '01 / OPENING', title: 'Architectural opening', description: 'Coordinate dimensions and the approved frame system.' },{ label: '02 / FRAME', title: 'Aluminium system', description: 'Install the specified aluminium frame.' },{ label: '03 / DETAIL', title: 'Finished junctions', description: 'Complete glass, hardware and approved sealing details.' }],
    faq: standardFaq('It provides architectural aluminium frame systems.', 'Official uses include approved windows, doors and framing applications.', 'Compatible glass, hardware and approved junction products complete the opening.'), relatedReasons: { 'general-purpose-silicone': 'Supports selected compatible finishing junctions.', 'roof-master': 'Complements the wider building envelope.' },
  },
};

export const problemCards = [
  { key: 'fix-tiles', title: 'Fix tiles', prompt: 'Installing floor or wall tiles?', products: ['tile-adhesive-mortar', 'tile-grout'], mediaKey: 'application_tile_installation' },
  { key: 'waterproof-bathroom', title: 'Waterproof a bathroom', prompt: 'Protecting a wet area before tiling?', products: ['aqua-shield-2k', 'tile-adhesive-mortar', 'tile-grout', 'grout-sealer'], mediaKey: 'application_waterproofing' },
  { key: 'level-floor', title: 'Level an uneven floor', prompt: 'Preparing concrete for a final floor?', products: ['quick-flow'], mediaKey: 'application_floor_levelling' },
  { key: 'smooth-wall', title: 'Smooth a wall', prompt: 'Turning a rough wall into a clean base?', products: ['skim-coat'], mediaKey: 'application_skim_coat' },
  { key: 'finish-joints', title: 'Finish tile joints', prompt: 'Completing the gaps between tiles?', products: ['tile-grout', 'sw-101-epoxy-grout'], mediaKey: 'application_grout' },
  { key: 'protect-grout', title: 'Protect grout', prompt: 'Adding protection to completed joints?', products: ['grout-sealer'], mediaKey: 'application_grout_sealer' },
  { key: 'seal-gap', title: 'Seal a gap', prompt: 'Finishing an approved junction or edge?', products: ['general-purpose-silicone'], mediaKey: 'application_silicone' },
  { key: 'clean-tiles', title: 'Clean dirty tiles', prompt: 'Caring for an installed tiled surface?', products: ['tile-cleaner'], mediaKey: 'application_tile_cleaner' },
  { key: 'garden', title: 'Beautify my garden', prompt: 'Adding natural texture to the landscape?', products: ['decorative-pebbles'], mediaKey: 'application_pebbles' },
  { key: 'flooring', title: 'Find flooring', prompt: 'Choosing a warm interior floor finish?', products: ['swissparkett'], mediaKey: 'application_flooring' },
  { key: 'roofing', title: 'Find a roofing solution', prompt: 'Completing the building from above?', products: ['roof-master'], mediaKey: 'application_roofing' },
];

export const spaceCards = [
  { key: 'bathroom', label: 'Bathroom', mediaKey: 'space_bathroom', products: ['aqua-shield-2k', 'tile-adhesive-mortar', 'tile-grout', 'grout-sealer', 'general-purpose-silicone'] },
  { key: 'kitchen', label: 'Kitchen', mediaKey: 'space_kitchen', products: ['tile-adhesive-mortar', 'tile-grout', 'grout-sealer', 'general-purpose-silicone', 'tile-cleaner'] },
  { key: 'living', label: 'Living room', mediaKey: 'space_living', products: ['swissparkett', 'skim-coat', 'swisstek-aluminium'] },
  { key: 'bedroom', label: 'Bedroom', mediaKey: 'space_bedroom', products: ['swissparkett', 'skim-coat', 'swisstek-aluminium'] },
  { key: 'outdoor', label: 'Outdoor', mediaKey: 'space_outdoor', products: ['decorative-pebbles', 'tile-cleaner', 'swisstek-aluminium'] },
  { key: 'roof', label: 'Roof', mediaKey: 'space_roof', products: ['roof-master', 'general-purpose-silicone'] },
  { key: 'commercial', label: 'Commercial space', mediaKey: 'space_commercial', products: ['quick-flow', 'tile-adhesive-mortar', 'tile-grout', 'roof-master'] },
];

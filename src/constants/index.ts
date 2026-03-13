// Base costs for "Mid-to-High-Mid" (1.15) grade - these are the reference values
export const baseCosts = {
  windows: 18000,
  extDoors: 22000,
  flooring: 9,       // $/SF - polished concrete + tile
  ceiling: 11,       // $/SF - T&G wood ceiling
  intDoors: 5000,
  trim: 3000,
  cabinets: 15000,
  counters: 8000,
  appliances: 10000,
  bathFixtures: 12000
};

// Grade multipliers relative to mid-to-high-mid (1.15) base
export const gradeMultipliers: Record<string, number> = {
  '0.85': 0.65,  // Budget
  '1.0': 0.80,   // Standard
  '1.15': 1.0,   // Mid-to-High-Mid (reference)
  '1.35': 1.25,  // High-End
  '1.6': 1.65    // Luxury
};

export const gradeDescriptions: Record<string, { title: string; description: string }> = {
  '0.85': {
    title: 'Budget / Builder Grade',
    description: 'Basic materials meeting code minimums. Vinyl windows, hollow-core doors, laminate counters, builder-pack appliances, carpet or vinyl flooring. Functional but minimal upgrades.'
  },
  '1.0': {
    title: 'Standard',
    description: 'Common production-home materials. Vinyl or basic fiberglass windows, hollow-core doors, stock cabinets, laminate counters, standard appliances, LVP or basic hardwood.'
  },
  '1.15': {
    title: 'Mid-to-High-Mid Grade',
    description: 'Quality materials above builder-grade. Includes fiberglass or wood-clad windows, solid-core interior doors, soft-close semi-custom cabinets, quartz/granite counters, mid-tier appliances. Durable hardwood or engineered wood floors.'
  },
  '1.35': {
    title: 'High-End',
    description: 'Premium materials and finishes. High-performance windows (Marvin, Pella), custom cabinets, natural stone counters, premium appliances (Sub-Zero, Wolf range), wide-plank hardwood, designer fixtures.'
  },
  '1.6': {
    title: 'Luxury',
    description: 'Top-tier designer materials. European windows, fully custom cabinetry, exotic stone, restaurant-grade appliances, rare wood species, bespoke fixtures. Architect-designed details throughout.'
  }
};

export const gradeOptions = [
  { value: '0.85', label: 'Budget / Builder Grade' },
  { value: '1.0', label: 'Standard' },
  { value: '1.15', label: 'Mid-to-High-Mid Grade' },
  { value: '1.35', label: 'High-End' },
  { value: '1.6', label: 'Luxury' }
];

export const valueGainOptions = [
  { value: '1.20', label: '20% above cost' },
  { value: '1.25', label: '25% above cost' },
  { value: '1.30', label: '30% above cost' },
  { value: '1.35', label: '35% above cost' },
  { value: '1.40', label: '40% above cost' }
];

export const termOptions = [
  { value: 30, label: '30 Years' },
  { value: 25, label: '25 Years' },
  { value: 20, label: '20 Years' },
  { value: 15, label: '15 Years' }
];

export const statusItems = {
  preConstruction: [
    { id: 'lot', title: 'Lot Purchased', note: '$402,000 with ~$90,000 down', defaultStatus: 'done' },
    { id: 'geo', title: 'Geotechnical Study', note: 'Helical piles recommended for west side', defaultStatus: 'done' },
    { id: 'sep', title: 'Septic Permits', note: 'Permits obtained', defaultStatus: 'done' },
    { id: 'util', title: 'Utilities Arranged', note: 'Electrical and water handled', defaultStatus: 'done' },
    { id: 'rough', title: 'Architect Rough Plans', note: 'Initial design complete', defaultStatus: 'done' },
    { id: 'eng', title: 'Structural Engineering', note: 'Plans currently with engineer', defaultStatus: 'wip' },
    { id: 'final', title: 'Final Architectural Plans', note: 'In progress with engineering', defaultStatus: 'wip' },
    { id: 'bperm', title: 'Building Permit Application', note: 'Submit to Tillamook County (2-6 weeks)', defaultStatus: '' },
    { id: 'bpermapp', title: 'Building Permit Approved', note: 'Required before construction begins', defaultStatus: '' }
  ],
  construction: [
    // PHASE 1: Shell / Dry-In
    { id: 'site', title: 'Site Preparation', note: 'Phase 1: Clearing, grading', defaultStatus: '' },
    { id: 'sepinst', title: 'Septic Installation', note: 'Phase 1: Alternative septic system', defaultStatus: '' },
    { id: 'found', title: 'Foundation', note: 'Phase 1: Helical piles + crawl space', defaultStatus: '' },
    { id: 'utilinst', title: 'Utilities Connection', note: 'Phase 1: Electric, water, gas', defaultStatus: '' },
    { id: 'frame', title: 'Framing', note: 'Phase 1: Structure and sheathing', defaultStatus: '' },
    { id: 'roof', title: 'Roofing', note: 'Phase 1: Metal roof installation', defaultStatus: '' },
    { id: 'siding', title: 'Siding', note: 'Phase 1: Fiber cement siding', defaultStatus: '' },
    { id: 'windows', title: 'Windows', note: 'Phase 1: 15 windows installed', defaultStatus: '' },
    { id: 'extdoors', title: 'Exterior Doors', note: 'Phase 1: Slider + door/window combos + entry', defaultStatus: '' },
    // PHASE 2: Interior Finishes
    { id: 'mep', title: 'MEP Rough-In', note: 'Phase 2: Electrical, plumbing, radiant heat', defaultStatus: '' },
    { id: 'ins', title: 'Insulation', note: 'Phase 2: Wall and ceiling', defaultStatus: '' },
    { id: 'dry', title: 'Drywall', note: 'Phase 2: Walls only (T&G ceiling)', defaultStatus: '' },
    { id: 'ceiling', title: 'T&G Wood Ceiling', note: 'Phase 2: Exposed rafters + wood', defaultStatus: '' },
    { id: 'floor', title: 'Flooring', note: 'Phase 2: Polished concrete + tile', defaultStatus: '' },
    { id: 'cab', title: 'Cabinets & Counters', note: 'Phase 2: Kitchen + bath vanities', defaultStatus: '' },
    { id: 'intdoors', title: 'Interior Doors & Trim', note: 'Phase 2: CVG fir, stained', defaultStatus: '' },
    { id: 'bath', title: 'Bath Fixtures', note: 'Phase 2: 2 master baths + powder', defaultStatus: '' },
    { id: 'appl', title: 'Appliances', note: 'Phase 2: Kitchen appliances', defaultStatus: '' },
    { id: 'paint', title: 'Paint', note: 'Phase 2: Walls only (trim is stained)', defaultStatus: '' },
    { id: 'ext', title: 'Exterior Finish', note: 'Phase 2: Deck, lighting', defaultStatus: '' }
  ],
  completion: [
    { id: 'finsp', title: 'Final Inspections', note: 'All trades and compliance', defaultStatus: '' },
    { id: 'co', title: 'Certificate of Occupancy', note: 'Final approval from county', defaultStatus: '' }
  ]
};

// Short-Term Rental defaults based on Arch Cape AirDNA market data
export const strDefaults = {
  archCape: {
    averageDailyRate: 519,
    occupancyRate: 0.60,
    annualRevenue: 80900,
    revPAR: 310.60,
    marketScore: 89,
  },
  seasonalMultipliers: {
    summer: { occupancy: 0.90, rate: 1.5 },
    shoulder: { occupancy: 0.60, rate: 1.0 },
    winter: { occupancy: 0.40, rate: 0.75 },
  },
  expenses: {
    platformFeeRate: 0.03,
    cleaningFeePerTurnover: 175,
    propertyManagementRate: 0.25,
    lodgingTaxRate: 0.095,
    maintenanceReserve: 0.05,
  }
};

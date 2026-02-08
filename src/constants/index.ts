// Base costs for "Mid-to-High-Mid" (1.15) grade - these are the reference values
export const baseCosts = {
  windows: 18000,
  extDoors: 6500,
  flooring: 12,
  ceiling: 14,
  intDoors: 4800,
  trim: 12000,
  cabinets: 22000,
  counters: 9500,
  appliances: 12000,
  bathFixtures: 18000
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

export const lenders = [
  { type: 'Regional Bank', name: 'Columbia Bank', description: 'Pacific Northwest regional bank with strong construction loan program in Oregon.', url: 'https://www.columbiabank.com/' },
  { type: 'National Bank', name: 'US Bank', description: 'Major national bank with Oregon branches and construction lending.', url: 'https://www.usbank.com/home-loans/construction-loans.html' },
  { type: 'National Bank', name: 'Wells Fargo', description: 'Large national lender with construction-to-permanent options.', url: 'https://www.wellsfargo.com/mortgage/construction-loan/' },
  { type: 'Credit Union', name: 'OnPoint Community CU', description: 'Portland-based credit union offering home construction financing.', url: 'https://www.onpointcu.com/' },
  { type: 'National Lender', name: 'Guild Mortgage', description: 'Strong presence in Pacific Northwest, offers construction loans.', url: 'https://www.guildmortgage.com/' },
  { type: 'Credit Union', name: 'Oregon State CU', description: 'Oregon-based credit union with construction loan options.', url: 'https://www.oregonstatecu.com/' },
  { type: 'Regional Bank', name: 'Banner Bank', description: 'Pacific Northwest regional bank with construction lending.', url: 'https://www.bannerbank.com/' },
  { type: 'National Lender', name: 'Rocket Mortgage', description: 'Major online lender with construction loan products.', url: 'https://www.rocketmortgage.com/' }
];

export const statusItems = {
  preConstruction: [
    { id: 'lot', title: 'Lot Purchased', note: '$402,000 with ~$90,000 down', defaultStatus: 'done' },
    { id: 'geo', title: 'Geotechnical Study', note: 'Helical pylons recommended for west side', defaultStatus: 'done' },
    { id: 'sep', title: 'Septic Permits', note: 'Permits obtained', defaultStatus: 'done' },
    { id: 'util', title: 'Utilities Arranged', note: 'Electrical and water handled', defaultStatus: 'done' },
    { id: 'rough', title: 'Architect Rough Plans', note: 'Initial design complete', defaultStatus: 'done' },
    { id: 'final', title: 'Final Architectural Plans', note: 'Currently in progress', defaultStatus: 'wip' },
    { id: 'bperm', title: 'Building Permit Application', note: 'Submit to Tillamook County (2-6 weeks)', defaultStatus: '' },
    { id: 'bpermapp', title: 'Building Permit Approved', note: 'Required before loan closing', defaultStatus: '' }
  ],
  financing: [
    { id: 'lres', title: 'Research & Select Lender', note: 'Compare conventional construction loan options', defaultStatus: '' },
    { id: 'preap', title: 'Loan Pre-Qualification', note: 'Submit financial documents', defaultStatus: '' },
    { id: 'bsel', title: 'Builder Selection', note: 'Select licensed general contractor', defaultStatus: '' },
    { id: 'bapp', title: 'Builder Lender Approval', note: 'Lender reviews builder credentials', defaultStatus: '' },
    { id: 'appr', title: 'Appraisal', note: 'Subject to completion appraisal', defaultStatus: '' },
    { id: 'close', title: 'Loan Closing', note: 'Sign documents, fund construction', defaultStatus: '' }
  ],
  construction: [
    { id: 'site', title: 'Site Preparation', note: 'Clearing, grading', defaultStatus: '' },
    { id: 'found', title: 'Foundation', note: 'Helical pylons on west side', defaultStatus: '' },
    { id: 'frame', title: 'Framing', note: 'Structure and roof', defaultStatus: '' },
    { id: 'roof', title: 'Roofing', note: 'Installation and waterproofing', defaultStatus: '' },
    { id: 'mep', title: 'Rough-Ins (MEP)', note: 'Mechanical, electrical, plumbing', defaultStatus: '' },
    { id: 'ins', title: 'Insulation', note: 'Wall and ceiling', defaultStatus: '' },
    { id: 'dry', title: 'Drywall', note: 'Installation, taping, finishing', defaultStatus: '' },
    { id: 'int', title: 'Interior Finishes', note: 'Cabinets, flooring, fixtures', defaultStatus: '' },
    { id: 'ext', title: 'Exterior Finishes', note: 'Siding, paint, landscaping', defaultStatus: '' }
  ],
  completion: [
    { id: 'finsp', title: 'Final Inspections', note: 'All trades and compliance', defaultStatus: '' },
    { id: 'co', title: 'Certificate of Occupancy', note: 'Final approval from county', defaultStatus: '' },
    { id: 'conv', title: 'Loan Conversion', note: 'Construction to permanent mortgage', defaultStatus: '' },
    { id: 'move', title: 'Move In! 🎉', note: 'Welcome home', defaultStatus: '' }
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

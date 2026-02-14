// Cost explanations for each line item
// Sources: HomeGuide 2024, local Oregon contractors, actual bids

export const costExplanations: Record<string, { estimate: string; low: string; high: string; notes: string }> = {
  // Site Work & Foundation
  sitePrep: {
    estimate: '$2,500',
    low: '$1,500',
    high: '$5,000',
    notes: 'Minimal prep needed - grading already complete. Just final grading and compaction. HomeGuide: site prep $5K-$20K typically, but most work done.'
  },
  tree: {
    estimate: '$3,500',
    low: '$2,000',
    high: '$5,000',
    notes: 'One large tree removal. National average $750-$2,500 per tree, larger trees up to $5K. Coastal access may add cost.'
  },
  excavation: {
    estimate: '$5,000',
    low: '$2,000',
    high: '$8,000',
    notes: 'Minimal excavation expected: helical piles on west side don\'t require digging, septic bid may include its own excavation. Budget for crawl space prep on east side and any unexpected digging. Verify with foundation contractor what\'s included in their bid.'
  },
  retaining: {
    estimate: '$18,000',
    low: '$12,000',
    high: '$25,000',
    notes: 'Poured concrete retaining wall integrated with foundation work. Cost savings from doing with foundation pour. ~$150-$250/linear ft for poured concrete. May be split with neighbor.'
  },
  foundation: {
    estimate: '$35,000',
    low: '$25,000',
    high: '$50,000',
    notes: 'HomeGuide: foundations $25K-$70K. Hybrid system: conventional crawl space on east + HELICAL PILES on west side (per geotech). West side: 65 ft wide ÷ 8 ft spacing = 9 piles. Helical piles $1,500-$3,000 each installed (steel shaft 2.875"-3.5" dia, helical plates 8"-14", hydraulic torque install, pile caps, 10-25 ft depth). 9 piles = $13,500-$27,000 for west side. Conventional crawl on remainder ~$15K-$20K. No excavation or cure time with helical - immediate load capacity, ideal for coastal sandy/shifting soil.'
  },
  septic: {
    estimate: '$25,000',
    low: '$20,000',
    high: '$30,000',
    notes: 'Based on actual bids received. Permits already obtained. Standard septic system for 2BR home.'
  },
  utility: {
    estimate: '$20,400',
    low: '$18,000',
    high: '$24,000',
    notes: 'Based on actual bids: Electrical connection $9,000 | Water connection $11,400. Total $20,400.'
  },
  
  // Framing
  framing: {
    estimate: '$20/sf',
    low: '$15/sf',
    high: '$30/sf',
    notes: 'HomeGuide: $11-$30/sf for framing. Simple single-story, rectangular, shed roof = low complexity. 1600 sf × $20 = $32,000. National avg for basic: $22K-$60K for 2000sf.'
  },
  sheath: {
    estimate: '$4,000',
    low: '$3,000',
    high: '$6,000',
    notes: 'OSB sheathing + house wrap. Reduced area: west wall mostly doors/windows, south wall has foundation running up. ~1,200 sf actual siding area + roof 1,600 sf sheathing. Materials + labor.'
  },
  
  // Exterior
  roofing: {
    estimate: '$12/sf',
    low: '$8/sf',
    high: '$18/sf',
    notes: 'Metal standing seam shed roof. Simple single pitch = easy install. HomeGuide: metal roofing $8-$14/sf installed. 1600 sf × $12 = $19,200. New roof typically $10K-$25K.'
  },
  siding: {
    estimate: '$14,000',
    low: '$10,000',
    high: '$20,000',
    notes: 'Reduced siding area: west wall (65 ft) mostly sliding doors/windows, south wall (25 ft) has foundation running up partway. Actual siding ~1,200 sf vs typical 1,800 sf. Fiber cement (HardiePlank) at $10-12/sf installed.'
  },
  windows: {
    estimate: '$15,000',
    low: '$10,000',
    high: '$22,000',
    notes: 'Mostly modest-sized windows with a few larger ones in living area. Coastal-grade fiberglass for salt-air resistance. ~8-10 standard windows at $800-$1,200 each ($8K-$12K) + 2-3 larger living room windows at $1,500-$2,500 each ($4K-$7K). Total $12K-$19K.'
  },
  extDoors: {
    estimate: '$22,000',
    low: '$15,000',
    high: '$30,000',
    notes: '⭐ INVESTMENT PRIORITY: 3 large sliding glass doors on back (ocean views): $4,000-$6,000 each = $12K-$18K. Premium front entry door: $2,500-$4,000. Sauna exterior door: $800-$1,200. All coastal-grade with salt-resistant hardware and weathersealing.'
  },
  gutters: {
    estimate: '$1,000',
    low: '$600',
    high: '$1,500',
    notes: 'Single-pitch shed roof = gutters on one side only. ~50-60 LF on low side. $8-15/LF installed = $400-$900. Minimal corners and downspouts.'
  },
  
  // MEP
  electric: {
    estimate: '$18,000',
    low: '$12,000',
    high: '$25,000',
    notes: 'HomeGuide: electrical $12K-$20K. Simple floor plan, standard outlets/lighting. 200-amp panel. Single story = easy runs.'
  },
  plumbing: {
    estimate: '$22,000',
    low: '$15,000',
    high: '$30,000',
    notes: 'HomeGuide: plumbing $12K-$20K for average home. 2.5 baths + kitchen + laundry on one side of house = efficient layout. Higher for coastal area.'
  },
  hvac: {
    estimate: '$3,000',
    low: '$2,000',
    high: '$5,000',
    notes: 'Wood burning stove only for backup/ambiance heat. Primary heating from hydronic radiant floor system. Wood stove + chimney/flue installation: $2,000-$5,000. No mini-splits needed - coastal climate rarely needs AC and radiant provides primary heat.'
  },
  radiantHeat: {
    estimate: '$26,000',
    low: '$20,000',
    high: '$35,000',
    notes: '⭐ PREMIUM COMFORT: Hydronic radiant floor heating under polished concrete. 1600 sf × $12-15/sf = $19,200-$24,000 for tubing/manifolds. High-efficiency boiler: $5,000-$8,000. Even, silent heat perfect for coastal climate. No ductwork or forced air.'
  },
  
  // Insulation & Drywall
  insulation: {
    estimate: '$10,000',
    low: '$6,000',
    high: '$15,000',
    notes: 'HomeGuide: insulation + drywall combined $12K-$40K. Spray foam or batt insulation. 1600 sf single story = ~3,500 sf of wall + ceiling + floor. Mild climate = less required.'
  },
  drywall: {
    estimate: '$16,000',
    low: '$10,000',
    high: '$25,000',
    notes: 'Drywall install, tape, texture, prime. ~5,000 sf of drywall × $2-4/sf = $10K-$20K. Simple layout = fewer corners and cuts.'
  },
  paint: {
    estimate: '$5,000',
    low: '$3,000',
    high: '$8,000',
    notes: 'Interior painting ~$2-4/sf floor area = $3,200-$6,400. Simple layout. Good DIY candidate - save $3,500+ on labor.'
  },
  
  // Interior
  flooring: {
    estimate: '$8/sf',
    low: '$5/sf',
    high: '$12/sf',
    notes: '⭐ MODERN AESTHETIC: Polished concrete floors throughout. Grinding, polishing, staining, and sealing. 1600 sf × $8 = $12,800. Durable, low maintenance, perfect thermal mass for radiant heating. Industrial-modern coastal vibe. NOT DIY - requires professional equipment.'
  },
  ceiling: {
    estimate: '$10/sf',
    low: '$6/sf',
    high: '$15/sf',
    notes: 'T&G wood ceiling (coastal aesthetic). $8-15/sf installed. 1600 sf × $10 = $16,000. DIY-friendly - save $4-6/sf.'
  },
  intDoors: {
    estimate: '$9,000',
    low: '$7,000',
    high: '$12,000',
    notes: '⭐ INVESTMENT: Premium CVG (clear vertical grain) fir doors. 6-8 doors including double doors to office. CVG fir doors $600-$1,200 each + hardware. Double doors ~$1,500-$2,500 for the pair.'
  },
  trim: {
    estimate: '$2,000',
    low: '$1,000',
    high: '$4,000',
    notes: 'Modern smooth drywall finish - no baseboards, no crown molding. Minimal door/window casing only (~8 interior doors + windows). Simple reveals or shadowline details. Clean contemporary look.'
  },
  
  // Kitchen & Bath
  cabinets: {
    estimate: '$15,000',
    low: '$8,000',
    high: '$30,000',
    notes: 'Mid-grade semi-custom cabinets. Kitchen + 2.5 bath vanities. Stock cabinets $5K-$15K, semi-custom $15K-$30K. DIY install saves $3K-$5K.'
  },
  counters: {
    estimate: '$6,000',
    low: '$3,000',
    high: '$12,000',
    notes: 'Quartz or granite countertops. Kitchen ~40 sf + baths ~20 sf = 60 sf × $50-$150/sf installed = $3K-$9K.'
  },
  appliances: {
    estimate: '$8,000',
    low: '$4,000',
    high: '$15,000',
    notes: 'HomeGuide: appliances $3K-$8K standard, $15K+ high-end. Mid-grade package: range, fridge, dishwasher, microwave, W/D.'
  },
  bathFixtures: {
    estimate: '$12,000',
    low: '$8,000',
    high: '$20,000',
    notes: '2.5 baths: toilets, sinks, faucets, shower/tub, tile. Mid-grade fixtures $2K-$5K per full bath. Tile ~$15-25/sf.'
  },
  
  // Soft Costs
  permits: {
    estimate: '$5,500',
    low: '$4,000',
    high: '$8,000',
    notes: 'TILLAMOOK COUNTY PERMITS: Building permit (structural) ~$2,000-$3,000 based on valuation | Electrical permit ~$300-$500 | Plumbing permit ~$250-$400 | Mechanical permit ~$150-$300 | Zoning permit ~$200 | Septic permit ~$800-$1,200 | School Excise Tax (Neah-Kah-Nie SD) $1.00/sf = $1,600 | May need: Floodplain Development Permit, Geohazard/Beach & Dune Permit for coastal.'
  },
  engineering: {
    estimate: '$5,000',
    low: '$3,500',
    high: '$8,000',
    notes: '⚠️ REQUIRED: Structural engineering for helical pile foundation system. Geotechnical report + structural calculations + sealed drawings. Coastal/hillside sites with challenging soil require engineered foundation design. Helical piles require load calculations and spacing design by licensed PE.'
  },
  insurance: {
    estimate: '$3,500',
    low: '$2,000',
    high: '$5,000',
    notes: "Builder's risk insurance during construction. Typically 1-4% of construction cost. ~$3K-$5K for 6-12 month build."
  },
  gcFee: {
    estimate: '12%',
    low: '10%',
    high: '15%',
    notes: 'Construction Manager fee on hard costs. CM typically 10-15% (vs full GC 15-25%). Coordinates subs, manages schedule, handles permits. Owner-builder eliminates this but requires significant time and expertise.'
  },
  
  // Site Finishing
  driveway: {
    estimate: '$3,500',
    low: '$2,000',
    high: '$6,000',
    notes: 'Gravel driveway and parking area. ~1,500 sf × $2-4/sf = $3K-$6K. Coastal location may need drainage consideration.'
  },
  landscape: {
    estimate: '$4,000',
    low: '$2,000',
    high: '$10,000',
    notes: 'Basic landscaping: native plants, minimal lawn, erosion control. Coastal-appropriate plants. Good DIY potential.'
  },
  deck: {
    estimate: '$12,000',
    low: '$8,000',
    high: '$20,000',
    notes: 'Composite or cedar deck, ~300 sf. $25-60/sf installed. Coastal climate = composite recommended for durability.'
  },
  accessSave: {
    estimate: '$8,000',
    low: '$5,000',
    high: '$12,000',
    notes: 'Savings from good site access reducing material delivery and equipment costs vs. difficult coastal sites.'
  }
};

// Summary stats
export const costSummary = {
  oregonBasicPerSf: { low: 250, high: 350 },
  oregonCustomPerSf: { low: 350, high: 550 },
  sources: [
    'HomeGuide Cost to Build a House (2024)',
    'HomeGuide Cost to Frame a House (2024)',
    'Oregon Building Contractors Association',
    'Local Tillamook County contractor estimates'
  ]
};

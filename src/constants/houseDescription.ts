// Comprehensive house description for the Tide Ave. coastal residence
// This context informs cost estimates and project planning

export const houseDescription = {
  // Location & Site
  location: {
    address: 'Tide Ave',
    city: 'Arch Cape',
    county: 'Tillamook County',
    state: 'Oregon',
    region: 'North Oregon Coast',
    climate: 'Marine West Coast (Cfb)',
    elevation: 'Near sea level with slight grade',
    views: 'Pacific Ocean views to the west',
    hazards: ['Coastal erosion zone', 'High wind exposure', 'Salt air corrosion', 'Seismic zone'],
  },

  // Structure & Architecture
  structure: {
    style: 'Modern coastal single-story',
    squareFootage: 1600,
    stories: 1,
    bedrooms: 2,
    bathrooms: 2.5,
    roofStyle: 'Shed roof (single pitch)',
    roofPitch: 'Low slope (~2:12 to 4:12)',
    frameType: 'Wood frame construction',
    shape: 'Rectangular footprint for cost efficiency',
    ceilingHeight: '9-11 ft (sloped shed roof with exposed rafters)',
  },

  // Foundation System (per geotechnical report)
  foundation: {
    type: 'Hybrid system',
    westSide: {
      method: 'Helical piles',
      reason: 'Per geotechnical report - coastal sandy/shifting soil conditions',
      specs: {
        wallWidth: 65, // feet
        pileSpacing: 8, // feet
        estimatedPiles: 9,
        shaftDiameter: '2.875" - 3.5"',
        helicalPlates: '8" - 14" diameter',
        installDepth: '10-25 ft',
        installMethod: 'Hydraulic torque installation',
      },
      benefits: ['No excavation required', 'Immediate load capacity', 'No cure time', 'Ideal for coastal soil'],
    },
    eastSide: {
      method: 'Conventional crawl space',
      reason: 'More stable soil conditions on uphill side',
      specs: {
        estimatedArea: 800, // SF
        height: '18-24 inches minimum',
        ventilation: 'Per IRC requirements',
      },
    },
    retainingWall: {
      type: 'Poured concrete',
      integration: 'Combined with foundation pour for cost savings',
      costSharing: 'Potential split with neighbor',
    },
  },

  // Exterior Envelope
  exterior: {
    roofing: {
      material: 'Standing seam metal',
      gauge: '24-26 gauge steel',
      finish: 'Kynar 500 coating for coastal durability',
      area: 1600, // SF
      features: ['Single pitch simplifies installation', 'Minimal penetrations', 'Excellent wind resistance'],
    },
    siding: {
      material: 'Fiber cement (HardiePlank or equivalent)',
      style: 'Horizontal lap or board-and-batten',
      reducedArea: true,
      actualArea: 1200, // SF (reduced from typical 1800 due to door/window coverage)
      reason: 'West wall (65 ft) mostly sliding doors/windows; south wall has foundation running up',
    },
    windows: {
      type: 'Coastal-grade fiberglass',
      features: ['Salt-air resistant frames', 'Low-E glass', 'Impact-rated where required'],
      quantity: '8-10 standard + 2-3 large living room',
      standardSize: '$800-$1,200 each',
      largeSize: '$1,500-$2,500 each',
    },
    doors: {
      slidingGlass: {
        quantity: 3,
        location: 'West wall (ocean views)',
        size: 'Large format (8-12 ft wide)',
        priceRange: '$4,000-$6,000 each',
        features: ['Multi-slide or lift-slide operation', 'Coastal-grade hardware', 'Weather sealing'],
      },
      entry: {
        type: 'Premium front entry',
        priceRange: '$2,500-$4,000',
        features: ['Fiberglass or steel core', 'Decorative glass optional'],
      },
      sauna: {
        type: 'Exterior sauna door',
        priceRange: '$800-$1,200',
        features: ['Tempered glass', 'Sealed frame'],
      },
    },
    gutters: {
      configuration: 'Single side only (shed roof)',
      linearFeet: 50-60,
      material: 'Aluminum or steel',
    },
  },

  // Interior Finishes
  interior: {
    flooring: {
      material: 'Polished concrete throughout',
      process: ['Grinding', 'Polishing', 'Staining', 'Sealing'],
      benefits: ['Durable', 'Low maintenance', 'Thermal mass for radiant heat', 'Industrial-modern aesthetic'],
      diyFeasible: false,
      reason: 'Requires professional grinding/polishing equipment',
    },
    ceiling: {
      material: 'Tongue-and-groove (T&G) wood with exposed rafters',
      style: 'Exposed rafter ceiling (coastal aesthetic)',
      height: '9-11 ft varies with shed roof slope',
      skylights: 'Several fixed skylights for natural light',
      area: 1600, // SF
      diyFeasible: true,
      savings: '$4-6/sf labor savings',
    },
    walls: {
      material: 'Drywall',
      finish: 'Smooth or light texture',
      trim: 'Modern minimal - NO baseboards, NO crown molding',
      doors: 'Simple reveals or shadowline details only',
    },
    doors: {
      material: 'CVG (Clear Vertical Grain) fir',
      style: 'Premium solid wood interior doors',
      quantity: '6-8 doors',
      features: ['Double doors to office', 'Consistent grain pattern'],
      hardware: 'Modern lever handles, matte black or brushed nickel',
    },
  },

  // Mechanical, Electrical, Plumbing (MEP)
  mep: {
    heating: {
      primary: {
        type: 'Hydronic radiant floor',
        location: 'Under polished concrete slab',
        coverage: 1600, // SF
        components: ['PEX tubing', 'Manifolds', 'High-efficiency boiler', 'Controls'],
        benefits: ['Even heat distribution', 'Silent operation', 'No ductwork/forced air', 'Works with thermal mass floor'],
      },
      backup: {
        type: 'Wood burning stove',
        purpose: 'Backup heat and ambiance',
        components: ['Stove unit', 'Chimney/flue', 'Hearth pad'],
      },
    },
    cooling: {
      type: 'None (passive)',
      reason: 'Coastal climate rarely requires AC; ocean breezes provide natural cooling',
    },
    electrical: {
      service: '200-amp panel',
      complexity: 'Standard - simple floor plan, single story = easy runs',
      features: ['LED lighting throughout', 'Dedicated circuits for appliances'],
    },
    plumbing: {
      bathrooms: 2.5,
      kitchen: 1,
      laundry: 1,
      layout: 'Efficient - wet areas grouped on one side of house',
      waterHeater: 'May be integrated with hydronic boiler or separate tankless',
    },
    ventilation: {
      bathroom: 'Exhaust fans (code required)',
      kitchen: 'Range hood ventilation',
      general: 'Natural ventilation via operable windows',
    },
  },

  // Kitchen & Bath
  kitchenBath: {
    kitchen: {
      cabinets: 'Semi-custom, soft-close',
      countertops: 'Quartz or granite',
      appliances: ['Range', 'Refrigerator', 'Dishwasher', 'Microwave', 'Range hood'],
      layout: 'Open to living area',
    },
    masterBath1: {
      fixtures: ['Toilet', 'Double vanity', 'Walk-in shower'],
      tile: 'Floor and shower surround',
      grade: 'Mid-range fixtures',
    },
    masterBath2: {
      fixtures: ['Toilet', 'Double vanity', 'Walk-in shower'],
      tile: 'Floor and shower surround',
      grade: 'Mid-range fixtures (identical to Master #1)',
    },
    halfBath: {
      fixtures: ['Toilet', 'Pedestal or small vanity sink'],
      location: 'Near entry/living area',
    },
  },

  // Special Features
  specialFeatures: {
    sauna: {
      included: true,
      type: 'Interior sauna room with exterior door',
      size: 'Fits 2-4 people',
      components: ['Sauna heater', 'Benches', 'Controls', 'Interior cedar lining'],
    },
    oceanViews: {
      primary: 'West wall - 3 large sliding glass doors',
      design: 'Open floor plan maximizes view corridor',
    },
    office: {
      access: 'Double CVG fir doors',
      use: 'Home office or flex space',
    },
  },

  // Site Work
  siteWork: {
    existing: {
      grading: 'Mostly complete',
      access: 'Good site access (reduces costs)',
    },
    required: {
      sitePrep: 'Final grading and compaction only',
      treeRemoval: 'One large tree',
      excavation: 'Minimal - helical piles require none, crawl space prep only',
      driveway: 'Small gravel parking pad (~400 SF, no turnaround)',
      landscaping: 'Owner DIY - native coastal plants, no lawn',
      deck: 'Single composite or cedar deck (9\' x 30\' = 270 SF) on back',
    },
    utilities: {
      septic: 'Alternative septic system, permits obtained, bids received ($25K)',
      water: 'Connection arranged ($11,400 bid)',
      electrical: 'Connection arranged ($9,000 bid)',
    },
  },

  // Cost Factors
  costFactors: {
    locationMultiplier: 1.15,
    locationReason: 'Coastal Oregon: higher transport costs, weather delays, limited contractor availability',
    simplifications: [
      'Single story (no stairs, simpler structure)',
      'Rectangular footprint (efficient framing)',
      'Shed roof (single pitch, simple)',
      'Minimal trim (modern aesthetic = cost savings)',
      'Good site access (reduced delivery costs)',
    ],
    premiumItems: [
      'Helical pile foundation (soil conditions)',
      'Hydronic radiant floor heating',
      'Polished concrete floors',
      'Premium CVG fir interior doors',
      'Large sliding glass doors (ocean views)',
      'Coastal-grade windows and hardware',
      'Standing seam metal roof',
    ],
    diyOpportunities: [
      'Interior painting ($3,500+ savings)',
      'T&G wood ceiling installation ($4-6/sf savings)',
      'Interior door hanging ($2,000+ savings)',
      'Basic landscaping ($4,000 savings)',
      'Deck construction ($8,000 savings)',
      'Cabinet installation ($3-5K savings)',
    ],
  },
};

// Summary for quick reference
export const houseSummary = {
  shortDescription: '1,600 SF modern coastal single-story residence with ocean views',
  location: 'Tide Ave, Arch Cape, Tillamook County, Oregon',
  keyFeatures: [
    '2 bed / 2.5 bath single-story',
    'Hybrid foundation (helical piles + crawl space)',
    'Standing seam metal shed roof',
    'Hydronic radiant floor heating',
    'Polished concrete floors throughout',
    'T&G wood ceiling',
    '3 large sliding glass doors (ocean views)',
    'Built-in sauna',
    'Premium CVG fir interior doors',
    'Modern minimal trim (no baseboards/crown)',
  ],
  costRange: {
    low: '$350,000',
    target: '$425,000',
    high: '$500,000',
    perSqFt: '$220-$310/SF',
  },
};

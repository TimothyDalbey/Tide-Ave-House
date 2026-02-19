// Cost explanations for each line item
// Citations reference sources.html - use [x] notation where x links to #cite-x anchor
// Last updated: February 2026

export const costExplanations: Record<string, { estimate: string; low: string; high: string; notes: string }> = {
  // ═══════════════════════════════════════════════════════════════════════════════════════
  // SITE WORK & FOUNDATION
  // ═══════════════════════════════════════════════════════════════════════════════════════
  
  sitePrep: {
    estimate: '$2,500',
    low: '$1,500',
    high: '$5,000',
    notes: `**CALCULATION:** Minimal prep since grading is substantially complete.

**COST BREAKDOWN:**
• Final grading: 1,600 SF building pad × $0.75/SF = $1,200 [38]
• Compaction (95% modified proctor): 1,600 SF × $0.40/SF = $640
• Erosion control (silt fence, straw wattles): $300-$500
• Construction entrance (gravel pad): $200-$400

**EQUIPMENT COSTS:**
• Skid steer mobilization: $300-$500 (15 miles from Tillamook) [39]
• Operator: 4-6 hours × $85/hr = $340-$510
• Fuel allowance: $50-$100

**WHY LOWER THAN TYPICAL:**
National average for site prep is $5,000-$20,000 [1][38], but our site is ALREADY GRADED. Previous owner/seller completed major earthwork. We only need final prep for foundation placement.

**GEOGRAPHIC FACTORS:**
• Good site access eliminates difficult-access premiums
• Tillamook contractor availability: moderate (not as remote as some coastal sites)
• Coastal Oregon premium typically +15% [29] - partially offset by pre-graded condition

**RISK FACTORS:**
• Unknown buried debris: +$500-$1,500 if encountered
• Drainage issues discovered: +$1,000-$2,000`
  },
  
  tree: {
    estimate: '$3,500',
    low: '$2,000',
    high: '$5,000',
    notes: `**CALCULATION:** One large tree removal required.

**TREE ASSESSMENT:**
• Species: Likely Sitka spruce or Western red cedar (common coastal Oregon)
• Estimated diameter: 24-36" DBH (diameter at breast height)
• Height: Estimated 60-80 feet
• Location: Near building envelope - requires careful felling

**COST BREAKDOWN:** [37]
• Large tree removal (24"+ diameter): $1,500-$3,500
  - Base rate for 24-36" tree: $1,200-$2,000
  - Height premium (60+ ft): +$300-$800
  - Difficulty factor (near structure): +$200-$500
• Stump grinding (24-36" stump): $300-$500
  - Rate: $3-$5 per inch of diameter
  - 30" average × $4 = $120 grinding + setup fee
• Debris removal/hauling: $200-$400
  - Chips can stay on-site (reduces cost)
  - Logs: may have salvage value or removal cost

**LABOR:**
• Arborist crew (3 workers): 4-6 hours
• Hourly rate: $150-$250/hr for crew with equipment [8]
• Total labor: $600-$1,500

**EQUIPMENT:**
• Bucket truck or climbing gear
• Chainsaw and rigging equipment
• Chipper: $200-$400/day rental (if not crew-owned)
• Stump grinder: $150-$300/day

**GEOGRAPHIC FACTORS:**
• Coastal access adds 20-30% to tree work [37][29]
• Limited arborist availability in Tillamook County
• Disposal: nearest green waste facility 15+ miles

**PERMITS:**
• Tree removal typically exempt under Oregon forest practices
• Verify no county overlay zone restrictions`
  },
  
  excavation: {
    estimate: '$5,000',
    low: '$2,000',
    high: '$8,000',
    notes: `**CALCULATION:** Minimal excavation due to hybrid foundation design.

**SCOPE DRAMATICALLY REDUCED BY HELICAL PILES:**
The west side of the foundation uses helical piles which require ZERO excavation [16]. This eliminates roughly 50% of typical foundation excavation costs.

**REMAINING EXCAVATION WORK:**

1. **Crawl Space Prep (East Side Only):** [39]
   • Area: ~800 SF (half of 1,600 SF footprint)
   • Depth: 12-18" below grade for crawl space
   • Volume: 800 SF × 1.25 ft avg = 37 cubic yards
   • Cost: 37 CY × $80/CY = $2,960

2. **Utility Trenching:** (verify not in utility company bid)
   • Water line: ~50 LF × $10/LF = $500
   • Electrical conduit path: ~75 LF × $8/LF = $600
   • Septic line to house: ~30 LF × $10/LF = $300
   • **Subtotal:** $1,400 (IF not included in utility bids)

3. **Contingency for Unknowns:**
   • Rock/hard material: +$50-$100/CY surcharge
   • High water table: +$500-$1,500 for dewatering
   • Budget: $1,000-$2,000

**EQUIPMENT REQUIRED:**
• Mini excavator (5-10 ton): $350-$500/day
• Operator: $65-$95/hr [8][28]
• Dump truck (if spoils removed): $75-$100/load
• Estimated 3-4 loads × $85 = $255-$340

**DISPOSAL:**
• Clean fill can often be spread on-site (cost: $0)
• Off-site disposal: $30-$50/CY at nearest facility
• Potential on-site use for grading/landscaping

**WHY THIS ESTIMATE:**
• National average excavation: $10,000-$25,000 for full basement [39]
• Our scope: Crawl space on HALF the house only
• Helical piles eliminate west side excavation
• Pre-graded site reduces depth needed

**VERIFICATION NEEDED:**
✓ Confirm septic bid includes its own excavation ($25K bid)
✓ Confirm utility bids include trenching ($20.4K bids)
✓ Get foundation contractor scope in writing`
  },
  
  retaining: {
    estimate: '$18,000',
    low: '$12,000',
    high: '$25,000',
    notes: `**CALCULATION:** Poured concrete retaining wall integrated with foundation.

**WALL SPECIFICATIONS:** [40]
• Estimated length: 70-90 linear feet (final per engineer)
• Height: 4-6 feet (varies with grade)
• Thickness: 8-12" (per structural engineer)
• Footing: 16-24" wide × 8-12" deep

**MATERIAL COSTS:**

1. **Concrete:** [40]
   • Wall volume: 80 LF × 5 ft H × 0.83 ft thick = 332 CF = 12.3 CY
   • Footing volume: 80 LF × 1.5 ft W × 0.83 ft D = 100 CF = 3.7 CY
   • Total concrete: ~16 cubic yards
   • Cost: 16 CY × $140/CY delivered = $2,240
   • Pump truck: $500-$800 (if needed for access)

2. **Reinforcement:** [40]
   • Rebar (#4 and #5): ~800 lbs × $0.85/lb = $680
   • Rebar labor (tie and place): $400-$600

3. **Formwork:**
   • Form rental: 160 SF × $2/SF = $320 (reusable forms)
   • Form labor: 16 hours × $55/hr = $880
   • Form release agent, stakes, bracing: $200

4. **Drainage:**
   • Perforated drain pipe: 80 LF × $3/LF = $240
   • Drain rock: 2 CY × $50/CY = $100
   • Filter fabric: $75
   • Outlet to daylight: $200-$400

**LABOR COSTS:** [8][28]
• Foundation crew: 3 workers × 3 days = 72 hours
• Rate: $55-$75/hr (concrete work premium)
• Labor total: $3,960-$5,400

**TOTAL BREAKDOWN:**
• Concrete: $2,240
• Pump: $650
• Rebar (materials + labor): $1,280
• Formwork: $1,400
• Drainage: $615
• Labor: $4,680
• Contingency (10%): $1,087
• **SUBTOTAL: $11,952**

**INTEGRATION SAVINGS:**
Doing retaining wall WITH foundation pour saves 15-25%:
• Shared mobilization: -$1,000
• Shared concrete delivery: -$500
• Efficient formwork transition: -$500
• **Savings: ~$2,000**

**NEIGHBOR COST-SHARING:**
If neighbor benefits from wall and agrees to share:
• 50% split: $9,000 each
• Property line walls often split in Oregon

**RANGE EXPLANATION:**
• Low ($12K): Shorter wall, neighbor split, good conditions
• Mid ($18K): Full wall, no split, standard conditions
• High ($25K): Longer wall, complex engineering, difficult soil`
  },

  foundation: {
    estimate: '$40,000',
    low: '$30,000',
    high: '$50,000',
    notes: `**CALCULATION:** Hybrid foundation system per geotechnical report.

This is a UNIQUE foundation combining two systems optimized for our site's soil conditions [6][16].

**═══ WEST SIDE: HELICAL PILES ═══**

**Why Helical Piles:** Per geotechnical report, west side has sandy/shifting coastal soil unsuitable for conventional footings. Helical piles screw into stable soil below.

**Pile Calculation:** [16]
• West wall width: 65 feet
• Pile spacing: 8 feet on center (per engineer)
• Number of piles: 65 ÷ 8 = 9 piles (minimum)
• May need 10-12 with corners and load points

**Cost Per Pile:** [6][16]
• Steel shaft (2.875" dia × 10-25 ft): $400-$700
• Helical plates (8-14" diameter): $150-$300
• Pile cap/bracket: $100-$200
• Installation (hydraulic torque): $800-$1,500
• **Total per pile: $1,800-$2,800**
• Using $2,500 average × 9 piles = **$22,500**

**Grade Beam (connects piles):**
• Length: 65 LF
• Size: 12" × 18" typical
• Concrete: 65 × 1 × 1.5 ÷ 27 = 3.6 CY × $150 = $540
• Rebar: 200 lbs × $0.90 = $180
• Forms and labor: $1,200-$1,500
• **Subtotal: $1,920-$2,220**

**West Side Total: $24,420-$24,720**

**═══ EAST SIDE: CONVENTIONAL CRAWL SPACE ═══**

**Crawl Space Specs:** [6]
• Area: ~800 SF (eastern half of footprint)
• Perimeter: ~120 LF of stem wall
• Height: 18-24" minimum clearance

**Cost Breakdown:**
• Continuous footing: 120 LF × $28/LF = $3,360
• Stem walls: 120 LF × $38/LF = $4,560
• Piers/posts (interior support): 6 × $350 = $2,100
• Vapor barrier (6 mil poly): 800 SF × $0.20 = $160
• Venting (per code): 4 vents × $100 = $400
• Access hatch: $250
• **East Side Total: $10,830**

**═══ COMBINED FOUNDATION TOTAL ═══**
• West (helical): $24,500
• East (crawl): $10,830
• Engineering oversight: $2,000
• Contingency (10%): $3,733
• **TOTAL: $41,063 ≈ $40,000**

**ADVANTAGES OF HELICAL PILES:**
✓ No excavation required (saves $5,000-$10,000)
✓ Immediate load capacity (no 7-day concrete cure)
✓ Works in sandy/wet coastal soil
✓ Minimal site disturbance
✓ Year-round installation (not weather dependent)
✓ 75+ year design life [16]

**GEOGRAPHIC FACTORS:**
• Coastal Oregon specialty: limited helical contractors
• Nearest suppliers: Portland area (90 miles) adds shipping
• Soil testing/verification during install: required

**RANGE EXPLANATION:**
• Low ($30K): Fewer piles, shallow depth, competitive bids
• Mid ($40K): Expected scope per calculations
• High ($55K): More piles, deeper installation, complex soil`
  },

  septic: {
    estimate: '$25,000',
    low: '$20,000',
    high: '$30,000',
    notes: `**CALCULATION:** Based on ACTUAL BIDS RECEIVED. ✓

**SYSTEM TYPE:** Alternative septic system (per site conditions/soil evaluation)

**COMPONENT BREAKDOWN:** [7]

1. **Septic Tank:**
   • Size: 1,000-1,250 gallon (2BR home requirement)
   • Type: Concrete or poly
   • Cost: $1,500-$3,000 installed

2. **Treatment Unit (Alternative System):**
   • Type: Aerobic treatment unit, sand filter, or pressure distribution
   • Provides enhanced treatment before dispersal
   • Cost: $3,000-$6,000

3. **Distribution System:**
   • Pressure distribution or drip irrigation (alt system)
   • Pump/dosing tank required
   • Materials: $2,500-$4,500
   • Excavation: $3,000-$6,000
   • **Subtotal: $5,500-$10,500**

4. **Permits & Inspections:** (already obtained ✓)
   • Site evaluation: COMPLETE ✓ (already paid)
   • Design permit (alt system): $600-$900
   • Installation permit: $300-$500
   • Inspections: included
   • **Subtotal: $900-$1,400** (site eval excluded - already done)

5. **Pump/Control System:** (required for alt systems)
   • Pump and controls: $2,000-$3,500
   • Alarm system: $300-$500
   • **Subtotal: $2,300-$4,000**

6. **Final Grading & Restoration:**
   • Topsoil replacement: $500-$1,000
   • Seeding/erosion control: $200-$400

**LABOR:**
• Excavation crew: 2-3 days
• Installation crew: 2-3 days (alt systems more complex)
• Total labor: $7,000-$12,000

**BID BREAKDOWN:**
Our actual bid of $25,000 includes:
✓ All permits (already obtained)
✓ Tank, treatment unit, distribution system
✓ Pump, controls, and alarm
✓ Complete excavation and installation
✓ Final inspection and approval
✓ Site restoration

**GEOGRAPHIC FACTORS:**
• Tillamook County: Alternative system required for coastal sites
• Coastal soil: Conditions necessitate enhanced treatment
• Seasonal installation: Summer/fall preferred

**STATUS:**
✓ Soil evaluation: COMPLETE
✓ Permits: OBTAINED
✓ Bids: RECEIVED
⏳ Installation: Scheduled after foundation`
  },

  utility: {
    estimate: '$20,400',
    low: '$18,000',
    high: '$24,000',
    notes: `**CALCULATION:** Based on ACTUAL UTILITY COMPANY QUOTES. ✓

**═══ ELECTRICAL CONNECTION: $9,000 ═══** [23]

**Tillamook PUD Quote Breakdown:**
• Transformer installation: $3,000-$4,000
  - Pad-mount transformer (if needed)
  - Or tap existing line (if available nearby)
• Service drop (overhead or underground): $1,500-$2,500
• Meter base and pedestal: $500-$800
• Trenching to panel (if underground): $1,000-$1,500
• Connection fee: $500-$800
• **Total: $9,000**

**What's INCLUDED:**
✓ Utility infrastructure to property line
✓ Meter and service entrance
✓ Inspection and activation

**What's NOT included:**
✗ Interior wiring (see electrical line item)
✗ 200-amp panel (see electrical line item)
✗ Temporary construction power (see temp utilities)

**═══ WATER CONNECTION: $11,400 ═══** [24]

**Quote Breakdown:**
• Tap fee (water main connection): $3,000-$5,000
• Meter and meter box: $800-$1,200
• Service line to property (utility side): $2,000-$3,000
• Service line on property (~100 LF): $1,500-$2,500
• Backflow preventer: $500-$800
• Pressure testing: $200-$300
• **Total: $11,400**

**What's INCLUDED:**
✓ Connection to water main
✓ Meter installation
✓ Service line to 5 ft from house

**What's NOT included:**
✗ Interior plumbing (see plumbing line item)
✗ Well (not applicable - on municipal water)

**═══ COMBINED TOTAL: $20,400 ═══**

**GEOGRAPHIC FACTORS:**
• Tillamook area: Municipal water available (good!)
• No well drilling needed (saves $8,000-$15,000)
• Utility infrastructure exists nearby

**STATUS:**
✓ Electrical quote: RECEIVED ($9,000)
✓ Water quote: RECEIVED ($11,400)
✓ Arrangements: CONFIRMED
⏳ Installation: Coordinates with construction start

**VARIANCE FROM ESTIMATE:**
This is FIRM pricing from utility companies - low variance expected unless scope changes or unexpected site conditions.`
  },
  
  // Framing
  framing: {
    estimate: '$20/sf',
    low: '$15/sf',
    high: '$30/sf',
    notes: `**CALCULATION:** 1,600 SF × $20/SF = $32,000

**═══ MATERIAL COSTS ═══** [5][21]

**Lumber Takeoff (estimated):**
• 2×6 exterior walls (8 ft height): ~1,800 LF
• 2×4 interior walls: ~600 LF
• 2×10 floor joists (crawl space side): ~800 LF
• 2×12 roof rafters (20 ft span, shed roof): ~900 LF
• LVL beams (spans): 2-3 beams, ~60 LF
• Headers (doors/windows): ~100 LF
• Plates (top/bottom): ~500 LF
• **Total linear feet: ~4,760 LF**

**Board Feet Calculation:**
• 4,760 LF various dimensions ≈ 8,000-10,000 board feet
• Lumber price: $500-$650/MBF (thousand board feet) [21]
• **Lumber cost: $4,000-$6,500**

**Additional Materials:**
• OSB/plywood subfloor (800 SF): 25 sheets × $35 = $875
• Hurricane ties and hangers: 150 × $3 = $450
• Nails, screws, fasteners: $400-$600
• Simpson hardware (hold-downs, straps): $500-$800
• **Materials subtotal: $2,225-$2,725**

**TOTAL MATERIALS: $6,225-$9,225**

**═══ LABOR COSTS ═══** [8][28]

**Crew Requirements:**
• Lead carpenter: 1 (supervises, critical cuts)
• Carpenters: 2-3 (wall assembly, raising, sheathing)
• Helper: 1 (material handling, cleanup)

**Time Estimate:**
• Shed roof single-story is SIMPLE framing
• Rectangular footprint minimizes complexity
• Estimated: 2-3 weeks with 4-person crew

**Labor Calculation:**
• 4 workers × 10 days × 8 hrs = 320 labor hours
• Oregon carpenter rate: $28-$45/hr base [28]
• With burden (benefits, insurance, overhead): $45-$70/hr
• **Labor cost: $14,400-$22,400**

**Using midpoint: $18,000**

**═══ TOTAL FRAMING ═══**
• Materials: $7,725
• Labor: $18,000
• Waste/contingency (8%): $2,058
• **TOTAL: $27,783 ≈ $28,000**
• **Per SF: $28,000 ÷ 1,600 = $17.50/SF**

**Our $20/SF estimate includes small buffer for lumber volatility**

**═══ COMPLEXITY ADJUSTMENTS ═══**

**Simplicity Factors (reduce cost):**
✓ Single story: -15% (no second floor, stairs, or balloon framing)
✓ Rectangular shape: -10% (fewer corners = efficient cuts, less waste)
✓ Shed roof: -20% (single pitch, no valleys, hips, or dormers)
✓ Open floor plan: -5% (fewer interior walls)
• **Net complexity reduction: ~35-45%**

**Why This Matters:**
Standard framing costs $25-$40/SF [5][21] but our simple design drops us to $15-$20/SF range.

**Complexity Factors (increase cost):**
• Coastal wind design (90 mph+): +5% for additional strapping/ties [13]
• Vaulted ceiling in living area: +5% for exposed structure
• Large header spans (sliding doors): +$500-$1,000

**═══ GEOGRAPHIC FACTORS ═══** [29]

• **Coastal Oregon premium: +10-15%**
• Distance to lumber yard: Tillamook 15 miles (minimal surcharge)
• Delivery: Standard lumber trucks can access site ✓
• No crane needed for single-story ✓
• Labor availability: Moderate in coastal Tillamook

**RANGE EXPLANATION:**
• Low ($15/SF = $24,000): Favorable lumber prices, efficient crew
• Mid ($20/SF = $32,000): Expected cost with contingency
• High ($30/SF = $48,000): Lumber spike, complex changes, difficult conditions`
  },
  sheath: {
    estimate: '$4,000',
    low: '$3,000',
    high: '$6,000',
    notes: `**CALCULATION:** Exterior sheathing and weather barrier.

**═══ SHEATHING MATERIALS ═══** [21]

**Wall Sheathing (OSB or Plywood):**
• Wall area calculation (9'-11' shed roof, avg 10 ft):
  - North wall: 65 ft × 10 ft = 650 SF
  - South wall: 25 ft × 10 ft = 250 SF (partial - foundation runs up)
  - East wall: 25 ft × 9 ft = 225 SF (low side)
  - West wall: 65 ft × 11 ft = 0 SF sheathing (mostly openings - ocean side)
  - **Net wall sheathing: ~1,000 SF**

• OSB sheets needed: 900 SF ÷ 32 SF/sheet = 28 sheets
• Cost: 28 sheets × $28/sheet = $784

**Roof Sheathing:**
• Roof area: 1,600 SF (matches floor for shed roof)
• OSB sheets: 1,600 ÷ 32 = 50 sheets
• Cost: 50 sheets × $32/sheet (thicker 5/8") = $1,600

**═══ HOUSE WRAP ═══**

**Tyvek or Equivalent:**
• Coverage: ~1,000 SF walls
• Roll coverage: 150 SF per roll (9 ft × 150 ft / 9)
• Rolls needed: 7 rolls
• Cost: 7 × $165 = $1,155, round to ~$800 (bulk pricing)

**Seam Tape:**
• Linear feet of seams: ~400 LF
• Tape: 2 rolls × $30 = $60

**═══ FASTENERS ═══**

• Sheathing nails (8d ring shank): 2 boxes × $50 = $100
• Staples for house wrap: $25
• Flashing tape (windows/doors rough openings): $150

**═══ LABOR ═══** [8][28]

• Typically included with framing crew
• Separate line: 2 workers × 2 days = 32 hours
• Rate: $45/hr
• Labor: $1,440

**═══ TOTAL BREAKDOWN ═══**
• Wall sheathing: $784
• Roof sheathing: $1,600
• House wrap: $860
• Fasteners/tape: $275
• Labor (if separate): $1,440
• **TOTAL: $4,959 ≈ $5,000**

**REDUCED AREA BENEFIT:**
West wall is 65 ft of mostly sliding doors and windows - minimal sheathing needed there. This reduces typical sheathing cost by ~25%.

**NOTE:** Sheathing often bid WITH framing labor. Verify with framing bid whether sheathing labor is included. Material cost is separate regardless.`
  },
  
  // Exterior
  roofing: {
    estimate: '$12/sf',
    low: '$8/sf',
    high: '$18/sf',
    notes: `**CALCULATION:** 1,600 SF × $12/SF = $19,200

**═══ ROOF SPECIFICATIONS ═══**

• **Type:** Standing seam metal roof [4][19]
• **Style:** Shed roof (single pitch)
• **Pitch:** Low slope, estimated 2:12 to 4:12
• **Area:** 1,600 SF (matches floor plan for shed roof)
• **Material:** 24-26 gauge steel with Kynar 500 finish (coastal durability)

**═══ MATERIAL COSTS ═══** [4][19]

**Standing Seam Panels:**
• Coverage: 1,600 SF
• Panel cost (24 ga, Kynar): $4.50-$6.00/SF
• 1,600 × $5.25/SF = $8,400

**Underlayment:**
• Synthetic underlayment (superior to felt): 1,600 SF
• Cost: $0.50/SF × 1,600 = $800

**Ridge Cap / Trim:**
• Shed roof has ONE ridge (high side): ~65 LF
• Ridge cap: 65 LF × $12/LF = $780
• Drip edge and eave trim: 130 LF × $4/LF = $520

**Flashing:**
• Pipe boots (2-3 vents): 3 × $50 = $150
• Wall flashing (if any): $200
• Valley flashing: N/A (shed roof = no valleys!)
• **Skylight flashing kits:** see below

**SKYLIGHTS:** (several planned for natural light)
• Fixed skylights (22"×46" typical): $400-$600 each installed
• Operable skylights: $700-$1,000 each installed
• Flashing kit per skylight: $150-$250
• **Estimate 3-4 fixed skylights: $1,800-$2,800**
• (Included in roofing budget or allocated separately)

**Fasteners:**
• Standing seam clips (concealed): 400 × $2 = $800
• Screws, sealant: $200

**MATERIALS SUBTOTAL: $11,850**

**═══ LABOR COSTS ═══** [8][28]

**Crew:**
• 3-person roofing crew
• Shed roof is FASTEST to install (single pitch, no cuts)

**Time Estimate:**
• Simple shed roof: 3-4 days
• 3 workers × 3.5 days × 8 hrs = 84 labor hours

**Labor Rate:**
• Metal roofing installers: $50-$75/hr [8]
• 84 hours × $60/hr = $5,040

**LABOR SUBTOTAL: $5,040**

**═══ TOTAL CALCULATION ═══**
• Materials: $11,850
• Labor: $5,040
• Contingency (5%): $844
• **TOTAL: $17,734**

**Per SF: $17,734 ÷ 1,600 = $11.08/SF**

**Our $12/SF estimate provides small buffer.**

**═══ SHED ROOF ADVANTAGES ═══**

**Cost Savings vs. Complex Roofs:**
• No valleys (saves $1,500-$3,000 in flashing and labor)
• No hips (saves $1,000-$2,000)
• Single ridge line (faster installation)
• Minimal waste (rectangular panels, few cuts)
• **Estimated savings: 20-30% vs. gable or hip roof**

**═══ COASTAL CONSIDERATIONS ═══** [13][19]

• **Wind rating:** Standing seam excellent for high wind (clips allow expansion)
• **Salt air:** Kynar 500 finish ESSENTIAL for coastal - resists corrosion
• **Rain:** Low pitch okay with standing seam (water channels between seams)
• **Lifespan:** 50+ years with proper finish [19]

**Compare to alternatives:**
• Asphalt shingles: $4-$8/SF but only 20-30 year life, poor in coastal wind
• Metal saves money LONG-TERM despite higher install cost

**RANGE EXPLANATION:**
• Low ($8/SF): Budget metal (poorer finish), self-install assistance
• Mid ($12/SF): Quality Kynar standing seam, professional install
• High ($18/SF): Premium gauge, complex add-ons, difficult access`
  },
  siding: {
    estimate: '$15,000',
    low: '$10,000',
    high: '$20,000',
    notes: `**CALCULATION:** Reduced siding area due to design.

**═══ SIDING AREA CALCULATION ═══**

**Gross Wall Area:** (9'-11' shed roof sloping to ocean)
• North wall: 65 ft × 10 ft avg = 650 SF
• South wall: 25 ft × 10 ft avg = 250 SF
• East wall: 25 ft × 9 ft = 225 SF (low side)
• West wall (ocean side): 65 ft × 11 ft = 715 SF (high side for views)
• **Gross: 1,620 SF**

**Deductions:**
• West wall: 3 large sliding doors (10×8 ft each) = -240 SF
• West wall: Additional windows = -80 SF
• West wall: Net siding = 715 - 350 = **365 SF only!**
• Other windows (8-10 total): ~150 SF total
• Entry door: 21 SF
• Other doors: ~40 SF

**Net Siding Area:**
• 1,620 - 320 (west openings) - 150 (windows) - 60 (doors) = **1,090 SF**
• Round up for waste: **~1,200 SF**

**═══ MATERIAL CHOICE: FIBER CEMENT ═══** [33]

**Why HardiePlank (or equivalent):**
• Salt air resistance: EXCELLENT (cement-based, won't corrode)
• Fire resistance: Non-combustible
• Rot resistance: Won't absorb moisture like wood
• Lifespan: 30-50 years
• Maintenance: Minimal (paint every 10-15 years)
• Coastal Oregon: STRONGLY RECOMMENDED over wood

**Material Costs:** [33]
• HardiePlank (lap siding): $2.50-$3.50/SF
• 1,200 SF × $3.00 = $3,600

**Trim and Accessories:**
• Corner boards (4"×4" fiber cement): 72 LF × $4/LF = $288
• J-channel: 120 LF × $2/LF = $240
• Window/door trim: 200 LF × $3/LF = $600
• Starter strip: 65 LF × $2/LF = $130
• Flashing: $300
• Caulk, touch-up paint: $150

**MATERIALS SUBTOTAL: $5,308**

**═══ LABOR COSTS ═══** [8][28][33]

**Siding Installation:**
• Labor rate: $4-$6/SF for fiber cement [33]
• 1,200 SF × $5/SF = $6,000

**Painting (if needed):**
• Pre-primed HardiePlank needs top coat
• 1,200 SF × $1.50/SF = $1,800
• (Can be DIY to save this)

**LABOR SUBTOTAL: $6,000-$7,800**

**═══ TOTAL BREAKDOWN ═══**
• Siding materials: $3,600
• Trim/accessories: $1,558
• Labor: $6,000
• Painting: $1,800
• Contingency: $1,042
• **TOTAL: $14,000**

**═══ REDUCED AREA = MAJOR SAVINGS ═══**

**Typical 1,600 SF home:** 1,800+ SF of siding
**Our design:** ~1,200 SF (33% less!)

**Why Less:**
• West wall is 65 ft of GLASS (3 large sliders + windows for ocean views)
• South wall has foundation running up (visual feature)
• Modern design = more glass, less wall

**Savings:** $4,000-$6,000 vs. typical siding scope

**GEOGRAPHIC FACTORS:**
• Coastal premium: +15% for salt-air-rated materials [29]
• BUT offset by reduced area scope`
  },
  windows: {
    estimate: '$15,000',
    low: '$10,000',
    high: '$22,000',
    notes: `**CALCULATION:** Based on window schedule for 1,600 SF modern coastal home.

**═══ WINDOW SCHEDULE ═══** [32]

**Standard Windows (Bedrooms, Baths, Kitchen):**

| Location | Size | Qty | Unit Cost | Subtotal |
|----------|------|-----|-----------|----------|
| Master BR | 4'×4' | 2 | $850 | $1,700 |
| Bedroom 2 | 3'×4' | 2 | $700 | $1,400 |
| Master Bath #1 | 2'×3' (obscure) | 1 | $500 | $500 |
| Master Bath #2 | 2'×3' (obscure) | 1 | $500 | $500 |
| Half Bath | 1.5'×2' (obscure) | 1 | $350 | $350 |
| Kitchen | 4'×3' | 2 | $750 | $1,500 |
| Laundry | 2'×3' | 1 | $450 | $450 |
| **Standard Subtotal** | | **10** | | **$6,400** |

**Large Living Room Windows (Ocean Views):**

| Location | Size | Qty | Unit Cost | Subtotal |
|----------|------|-----|-----------|----------|
| Living - fixed | 5'×5' | 1 | $1,800 | $1,800 |
| Living - operable | 4'×5' | 2 | $1,500 | $3,000 |
| **Large Subtotal** | | **3** | | **$4,800** |

**WINDOW TOTAL: $11,200**

**═══ COASTAL-GRADE SPECIFICATIONS ═══** [13][32]

**Frame Material: FIBERGLASS (essential for coast)**
• Why not vinyl: Warps in temperature swings, degrades in UV
• Why not aluminum: Corrodes in salt air
• Why fiberglass: Stable, won't corrode, 30+ year life

**Glass Specifications:**
• Low-E coating: Standard (energy efficiency)
• Argon fill: Standard (insulation)
• Tempered: Where required by code (near doors, low to floor)

**Coastal Features:**
• Marine-grade hardware: +$50-$100/window
• Enhanced weatherstripping: +$30-$50/window
• Salt-spray resistant finish: Included in fiberglass

**Coastal Premium:** ~$100-$150 per window = $1,300-$1,950 total

**═══ INSTALLATION ═══** [8][32]

**Labor:**
• Windows typically installed by general framing crew
• OR window contractor: $150-$300 per window
• 13 windows × $200 = $2,600

**Often included in window purchase** - verify with vendor

**═══ TOTAL CALCULATION ═══**
• Standard windows: $6,400
• Large windows: $4,800
• Coastal upgrade: $1,500
• Installation: $2,600
• Flashing/sealant: $400
• **TOTAL: $15,700 ≈ $15,000**

**═══ NOT IN THIS LINE ITEM ═══**

• Sliding glass doors: See "Exterior Doors" line item
• These are THREE LARGE SLIDERS budgeted separately at $22,000

**RANGE EXPLANATION:**
• Low ($10K): Builder-grade vinyl (NOT recommended for coast)
• Mid ($15K): Quality fiberglass, coastal-rated ✓
• High ($22K): Premium brands (Marvin, Pella), custom sizes`
  },
  extDoors: {
    estimate: '$23,000',
    low: '$15,000',
    high: '$30,000',
    notes: `**CALCULATION:** ⭐ INVESTMENT PRIORITY - Ocean Views + Premium Entry

This line item is CRITICAL to the home's value and lifestyle. The west wall is defined by three sliding glass doors capturing Pacific Ocean views (one to living area, one to each master bedroom). Premium CVG fir front entry.

**═══ DOOR SCHEDULE ═══**

**1. SLIDING GLASS DOORS (3) - West Wall**

| Location | Size | Type | Unit Cost | Subtotal |
|----------|------|------|-----------|----------|
| Living Area | 12'×8' | Multi-slide | $6,000 | $6,000 |
| Master BR #1 | 8'×8' | Lift-slide | $4,500 | $4,500 |
| Master BR #2 | 8'×8' | Lift-slide | $4,500 | $4,500 |

**Slider Subtotal: $15,000**

**Slider Specifications:**
• Frame: Aluminum-clad fiberglass OR thermally-broken aluminum
• Glass: Dual-pane Low-E, tempered safety glass
• Operation: Multi-slide (panels stack) OR lift-slide (smooth operation)
• Hardware: Stainless steel (CRITICAL for salt air)
• Threshold: ADA-compliant, water-resistant
• Weathersealing: Marine-grade gaskets

**2. FRONT ENTRY DOOR**

| Component | Specification | Cost |
|-----------|--------------|------|
| Door | 3'×8' CVG fir, frosted glass insert | $4,000 |
| Sidelite (1) | Fixed frosted glass panel | $700 |
| Hardware | Multi-point lock, lever handle | $400 |

**Entry Subtotal: $5,100**

CVG (Clear Vertical Grain) fir: Premium old-growth appearance, tight grain, excellent stability. Frosted glass provides privacy while allowing natural light. Requires proper finishing/sealing for coastal climate.

**3. SAUNA EXTERIOR DOOR**

| Component | Specification | Cost |
|-----------|--------------|------|
| Door | 2'6"×6'8" tempered glass | $800 |
| Frame | Cedar or fiberglass | $200 |
| Hardware | Magnetic catch, SS hinges | $150 |

**Sauna Subtotal: $1,150**

Sauna door allows: Natural light, exterior access for ventilation/cleaning

**═══ INSTALLATION ═══** [8]

**Sliding Doors:**
• Large sliders require 2-3 person crew
• Professional install REQUIRED for warranty
• 3 doors × $400 each = $1,200

**Entry & Sauna:**
• Standard door install: $250 each × 2 = $500

**INSTALLATION SUBTOTAL: $1,700**

**═══ TOTAL CALCULATION ═══**
• Sliding doors (3): $15,000
• Entry door package: $5,100
• Sauna door: $1,150
• Installation: $1,700
• Flashing/sealant: $400
• **TOTAL: $23,350 ≈ $23,000**

**═══ WHY THIS IS AN INVESTMENT PRIORITY ═══**

**Value to Home:**
• Ocean-view doors define the property's appeal
• STR guests will pay premium for indoor-outdoor living
• These doors ARE the architectural statement

**Cost vs. Value:**
• Cheap sliders: $2,000-$3,000 each (fail in 5-10 years on coast)
• Quality sliders: $4,000-$6,000 each (last 25+ years)
• Replacement cost: +$2,000 per door for retrofit

**DO NOT CHEAP OUT ON:**
✗ Builder-grade vinyl sliders
✗ Standard (non-coastal) hardware
✗ Single-pane glass
✗ Aluminum frames without thermal break

**═══ COASTAL REQUIREMENTS ═══** [13]

• Stainless steel hardware: MANDATORY (brass/zinc corrodes)
• Tempered glass: Required for doors
• Water resistance: Weep holes, proper flashing
• Wind rating: 90+ mph structural performance
• UV resistance: Frames won't fade/chalk

**RANGE EXPLANATION:**
• Low ($15K): Smaller sliders, basic entry, no sauna door
• Mid ($23K): Full scope as designed with premium CVG fir entry ✓
• High ($30K): Premium brands (La Cantina, Fleetwood), larger panels`
  },
  gutters: {
    estimate: '$1,000',
    low: '$600',
    high: '$1,500',
    notes: `**CALCULATION:** Single-pitch shed roof = gutters on ONE SIDE only.

**═══ SHED ROOF GUTTER ADVANTAGE ═══**

**Typical House:** Gutters around entire perimeter (150-200 LF)
**Our Design:** Gutters on LOW side of shed roof only (~65 LF)

This is a MAJOR simplification and cost savings.

**═══ GUTTER SPECIFICATIONS ═══**

**Linear Footage:**
• Low side of roof (south): ~65 LF
• Add for corners: +5 LF
• **Total: ~70 LF**

**Material Options:**

| Material | Cost/LF | Pros | Cons |
|----------|---------|------|------|
| Aluminum | $8-$12 | Light, no rust | Can dent |
| Galvanized Steel | $10-$15 | Strong, durable | Can rust if damaged |
| Copper | $25-$40 | Beautiful, lasts 100 yrs | Expensive |

**Recommendation:** Aluminum or galvanized for coastal.

**Size:**
• 5" standard is adequate for 1,600 SF roof
• 6" oversized for heavy rain areas (optional +$2/LF)

**═══ COST BREAKDOWN ═══**

**Materials:** [uses aluminum]
• Gutters: 70 LF × $4/LF (materials only) = $280
• Downspouts: 2 × 10 LF × $3/LF = $60
• Elbows: 6 × $8 = $48
• End caps: 2 × $6 = $12
• Hangers: 14 × $4 = $56
• Splash blocks: 2 × $15 = $30

**Materials Subtotal: $486**

**Labor:**
• Install rate: $5-$8/LF
• 70 LF × $6/LF = $420

**Labor Subtotal: $420**

**═══ TOTAL ═══**
• Materials: $486
• Labor: $420
• Contingency: $94
• **TOTAL: $1,000**

**Per LF: $1,000 ÷ 70 = $14.29/LF** (reasonable for installed)

**═══ COASTAL CONSIDERATIONS ═══**

• **Heavier gauge:** Consider 0.027" vs 0.025" aluminum ($1/LF more)
• **Hidden hangers:** More secure than spikes for wind
• **Gutter guards:** Optional but reduces maintenance ($3-$5/LF)
• **Downspout routing:** Direct away from foundation

**═══ WHY SO INEXPENSIVE ═══**

Standard gutter bids for homes this size: $1,500-$2,500

**Our savings:**
• 70 LF vs. 150 LF typical = **50%+ reduction**
• No corners (straight run) = faster install
• Shed roof = no complex multi-level routing

**SPLASH BLOCK vs. UNDERGROUND:**
• Splash blocks: $30 (our choice - simple, effective)
• Underground drainage: +$500-$1,000 (overkill for our site)

**ALTERNATIVE: SEAMLESS GUTTERS**
• Fabricated on-site, no seams to leak
• Cost: +$2-$3/LF = +$140-$210
• Worth considering for longevity`
  },
  
  // MEP
  electric: {
    estimate: '$20,000',
    low: '$14,000',
    high: '$25,000',
    notes: `**CALCULATION:** Complete electrical system for 1,600 SF coastal home.

**═══ ELECTRICAL SPECIFICATIONS ═══** [23]

**Service:**
• Main panel: 200-amp (standard for modern home)
• Sub-panels: None needed (single-story, efficient layout)
• Service entrance: Included in utility connection bid ($9,000)

**═══ COMPONENT BREAKDOWN ═══**

**1. Main Electrical Panel:** [23]
• 200-amp main breaker panel: $300-$500
• Breakers (30 circuits estimated): 30 × $8 = $240
• Grounding system: $200-$400
• **Panel Subtotal: $740-$1,140**

**2. Wire and Cable:**

| Type | Length | Cost/LF | Subtotal |
|------|--------|---------|----------|
| 12/2 Romex (general) | 1,500 LF | $0.75 | $1,125 |
| 14/2 Romex (lighting) | 800 LF | $0.55 | $440 |
| 10/3 (appliances) | 100 LF | $2.50 | $250 |
| 6/3 (range) | 50 LF | $4.00 | $200 |
| 8/3 (dryer) | 40 LF | $3.00 | $120 |

**Wire Subtotal: $2,135**

**3. Devices:**

| Item | Qty | Unit Cost | Subtotal |
|------|-----|-----------|----------|
| Outlets (standard) | 35 | $3 | $105 |
| GFCI outlets | 10 | $18 | $180 |
| Switches (single) | 15 | $3 | $45 |
| 3-way switches | 6 | $6 | $36 |
| Dimmer switches | 4 | $25 | $100 |
| Outlet/switch boxes | 70 | $2 | $140 |
| Cover plates | 70 | $1 | $70 |

**Devices Subtotal: $676**

**4. Dedicated Circuits:**
• Kitchen (2 × 20 amp): Included
• Bathroom (GFCI): Included
• Laundry: Included
• Refrigerator: Included
• Dishwasher: Included
• Range (50 amp): Included
• Dryer (30 amp): Included
• HVAC/Boiler: Included
• Water heater: Included
• Garage/exterior: Included

**5. Lighting (rough-in):**
• Recessed can rough-in: 20 × $40 = $800
• Box for ceiling fixtures: 8 × $15 = $120
• Exterior fixture boxes: 6 × $20 = $120

**Lighting Rough-in Subtotal: $1,040**

**MATERIALS TOTAL: ~$4,600**

**═══ LABOR COSTS ═══** [8][23][28]

**Oregon Electrician Rates:**
• Licensed electrician: $75-$120/hr [8][28]
• Journeyman: $50-$80/hr
• Apprentice: $30-$45/hr

**Crew & Time:**
• Rough-in: 2 electricians × 3 days = 48 hours
• Finish (devices, fixtures): 2 electricians × 2 days = 32 hours
• Panel work: 1 electrician × 1 day = 8 hours
• **Total: 88 hours**

**Labor Calculation:**
• Blended rate: $70/hr (mix of journeyman/apprentice)
• 88 hours × $70 = $6,160
• Supervision/inspection: $500
• **Labor Total: $6,660**

**PERMITS & INSPECTION:**
• Electrical permit: $350 (in permits line item)
• Inspections: Rough and final (included)

**═══ TOTAL CALCULATION ═══**
• Materials: $4,600
• Labor: $6,660
• Permit: (in soft costs)
• Contingency (10%): $1,126
• **SUBTOTAL: $12,386**

**Additional allowances:**
• Light fixtures (allowance): $3,000-$5,000
• Ceiling fans: $500-$800
• **TOTAL WITH FIXTURES: $16,000-$18,000**

**═══ SIMPLICITY FACTORS ═══**

**Why $18K is sufficient:**
✓ Single-story: All runs at one level (no stacking, easy pulls)
✓ Open floor plan: Fewer walls = fewer boxes
✓ No mini-splits: Eliminates dedicated circuits
✓ Simple layout: Direct runs, minimal junction boxes

**═══ WHAT'S NOT INCLUDED ═══**
• Service entrance/meter: In utility bid ($9,000)
• Structured wiring (Cat6, coax): See missing costs
• Solar pre-wire: See missing costs
• EV charger rough-in: See missing costs
• Generator transfer switch: See missing costs

**RANGE EXPLANATION:**
• Low ($14K): Basic code minimum, minimal fixtures
• Mid ($20K): Quality fixtures, good coverage ✓
• High ($25K): Smart home, premium fixtures, additional circuits`
  },
  plumbing: {
    estimate: '$20,000',
    low: '$15,000',
    high: '$28,000',
    notes: `**CALCULATION:** Complete plumbing for 2.5 bath (two master baths, single sinks) + kitchen + laundry.

**═══ FIXTURE COUNT ═══** [24]

**Master Bathroom #1:**
• Toilet: 1
• Single vanity sink: 1
• Shower (walk-in): 1
• **Fixtures: 3**

**Master Bathroom #2:** (identical to #1)
• Toilet: 1
• Single vanity sink: 1
• Shower (walk-in): 1
• **Fixtures: 3**

**Half Bathroom:**
• Toilet: 1
• Pedestal/vanity sink: 1
• **Fixtures: 2**

**Kitchen:**
• Sink: 1
• Dishwasher connection: 1
• Refrigerator ice maker line: 1
• **Fixtures: 3**

**Laundry:**
• Washer hookup: 1
• Utility sink (optional): 0-1
• **Fixtures: 1-2**

**Other:**
• Hose bibs (exterior): 2
• Boiler hookup: 1

**TOTAL FIXTURES: 12-14**

**═══ ROUGH-IN COSTS ═══** [24]

**Supply Lines (PEX):**
• 1/2" PEX (fixtures): 400 LF × $0.75 = $300
• 3/4" PEX (main): 150 LF × $1.25 = $188
• 1" PEX (if needed): 50 LF × $2.00 = $100
• Fittings, manifold: $400
• **Supply Subtotal: $988**

**Drain/Waste/Vent (DWV):**
• 3" ABS (main drain): 80 LF × $4 = $320
• 2" ABS (branch): 120 LF × $2.50 = $300
• 1.5" ABS (vents, lavs): 150 LF × $2 = $300
• 4" ABS (to septic): 30 LF × $5 = $150
• Fittings: $350
• **DWV Subtotal: $1,420**

**ROUGH-IN MATERIALS: $2,408**

**═══ FIXTURE COSTS ═══**

| Fixture | Cost | Notes |
|---------|------|-------|
| Toilets (3) | $600-$1,200 | Comfort height, 1.28 GPF |
| Master #1 single vanity | $150 rough | Countertop in separate item |
| Master #2 single vanity | $150 rough | Identical to #1 |
| Half bath vanity | $100 rough | |
| Faucets (5) | $750-$1,500 | Mid-grade (3 vanity + 2 shower) |
| Master #1 shower valve | $300-$500 | Pressure balance |
| Master #2 shower valve | $300-$500 | Identical to #1 |
| Kitchen faucet | $200-$400 | Pull-down sprayer |
| Exterior hose bibs (2) | $150 | Frost-free |

**FIXTURES SUBTOTAL: $2,650-$4,800**

**═══ WATER HEATER ═══**

**Option A: Separate Tank**
• 50-gallon gas: $1,200-$1,800 installed
• 50-gallon hybrid/heat pump: $2,000-$3,000

**Option B: Combi Boiler** (with radiant system)
• Boiler serves BOTH radiant heat AND domestic hot water
• No separate water heater needed
• Cost: Included in radiant heat line item

**Budget allowance: $1,500** (if separate tank needed)

**═══ LABOR COSTS ═══** [8][24][28]

**Oregon Plumber Rates:**
• Licensed plumber: $75-$125/hr [8][28]
• Journeyman: $50-$80/hr

**Time Estimate:**
• Rough-in: 3 plumbers × 3 days = 72 hours
• Finish (set fixtures): 2 plumbers × 2 days = 32 hours
• **Total: 104 hours**

**Labor Calculation:**
• Blended rate: $65/hr
• 104 hours × $65 = $6,760
• Pressure test, inspections: included
• **Labor Total: $6,760**

**═══ EFFICIENCY FACTOR ═══** [24]

**Layout Advantage:**
All wet areas (baths, kitchen, laundry) are on ONE SIDE of the house. This reduces:
• Pipe runs by 20-30%
• Labor by 15-20%
• Cost savings: $3,000-$5,000 vs. scattered layout

**═══ TOTAL CALCULATION ═══**
• Rough-in materials: $2,400
• Fixture materials: $3,800 (3 vanity sinks instead of 5)
• Water heater: $1,500
• Labor: $6,500 (simpler scope)
• Permits: (in soft costs)
• Contingency (10%): $1,420
• **TOTAL: $15,620**

**Add coastal premium (+15%): $17,963**
**Minimal aesthetic, single sinks: $20,000**

**RANGE EXPLANATION:**
• Low ($15K): Standard fixtures, efficient layout
• Mid ($20K): Single-sink master baths, mid-grade fixtures ✓
• High ($28K): Premium fixtures, complex changes`
  },
  hvac: {
    estimate: '$3,000',
    low: '$2,000',
    high: '$5,000',
    notes: `**CALCULATION:** Wood burning stove ONLY (backup/ambiance heat).

**═══ WHY NO TRADITIONAL HVAC ═══**

**Heating:**
• Primary: Hydronic radiant floor (separate $26K line item)
• Backup: Wood burning stove (this line item)
• No furnace, no ductwork, no forced air

**Cooling:**
• Coastal Oregon climate RARELY needs AC
• Summer high temperatures: Average 65°F
• Ocean breezes provide natural cooling
• If AC ever needed: Add mini-split later ($3K-$5K)

**═══ WOOD STOVE SPECIFICATIONS ═══**

**Stove Selection:**
• Style: Modern, EPA-certified (required in Oregon)
• BTU output: 30,000-50,000 BTU (adequate for 1,600 SF)
• Efficiency: 75%+ (modern EPA stoves)
• Brands: Jøtul, Blaze King, Lopi, Hearthstone

**Stove Costs:**
• Mid-range wood stove: $1,500-$2,500
• Premium brands: $3,000-$4,500

**═══ CHIMNEY/FLUE SYSTEM ═══**

**Components:**

| Item | Cost | Notes |
|------|------|-------|
| Double-wall stove pipe (interior) | $400-$600 | 6" diameter, 8-10 LF |
| Class A chimney pipe (roof) | $500-$800 | Insulated, 3-5 LF |
| Roof flashing/storm collar | $150-$250 | Metal, sealed |
| Chimney cap | $75-$150 | Spark arrestor |
| Wall thimble (if through wall) | $100-$200 | For horizontal run |

**Chimney Subtotal: $1,225-$2,000**

**═══ HEARTH/INSTALLATION ═══**

**Hearth Pad:**
• Required clearance: 18" front, 8" sides (code)
• Size: ~4' × 5' = 20 SF
• Materials: Tile, stone, or concrete board
• Cost: $300-$800 (DIY possible)

**Installation Labor:**
• Stove placement: 2 hours
• Chimney installation: 4-6 hours
• Total: ~8 hours × $75/hr = $600

**═══ TOTAL CALCULATION ═══**

| Component | Low | High |
|-----------|-----|------|
| Wood stove | $1,500 | $2,500 |
| Chimney system | $1,225 | $2,000 |
| Hearth pad | $300 | $800 |
| Installation | $600 | $900 |
| **TOTAL** | **$3,625** | **$6,200** |

**Budget midpoint: $3,000**

**═══ PERMITS ═══**

• Mechanical permit: $150-$300 (in soft costs)
• Includes wood stove inspection
• EPA certification verification required

**═══ BENEFITS OF THIS APPROACH ═══**

**Cost Savings:**
• No ductwork: Saves $5,000-$10,000
• No furnace: Saves $3,000-$5,000
• No mini-splits: Saves $3,000-$8,000
• **Total savings: $11,000-$23,000**

**Lifestyle Benefits:**
• Wood stove ambiance (coastal cabin feel)
• Radiant heat comfort (no drafts, even heat)
• Backup heat if power goes out (common on coast)

**═══ FUTURE OPTION ═══**

**If AC ever needed:**
• Single mini-split unit: $3,000-$4,500
• Can be added later without ductwork
• Pre-wire now: $300-$500 (recommended)`
  },
  radiantHeat: {
    estimate: '$26,000',
    low: '$20,000',
    high: '$35,000',
    notes: `**CALCULATION:** ⭐ PREMIUM COMFORT - Hydronic radiant floor heating under polished concrete.

This is the PRIMARY heating system. Investment in comfort and efficiency.

**═══ SYSTEM OVERVIEW ═══** [18][26]

**How It Works:**
• Hot water circulates through PEX tubing embedded under floor
• Heat radiates up through polished concrete
• Concrete acts as thermal mass (stores and releases heat slowly)
• Result: Even, silent, comfortable heat

**═══ COMPONENT BREAKDOWN ═══**

**1. PEX Tubing:** [18]
• Coverage: 1,600 SF
• Spacing: 6-8" on center (closer = more responsive)
• Linear feet needed: 1,600 SF ÷ 0.5' spacing = 3,200 LF
• Add 15% for headers/manifolds: 3,680 LF
• Cost: 3,680 LF × $0.75/LF = $2,760

**2. Manifolds:**
• Zones: 3 (living/kitchen, bedrooms, baths)
• Manifold stations: 3 × $400 = $1,200
• Zone valves/actuators: 3 × $150 = $450
• **Manifold Subtotal: $1,650**

**3. Boiler:** [18][26]
• Type: High-efficiency condensing gas boiler
• Input: 80,000-100,000 BTU (sized for 1,600 SF)
• Efficiency: 95%+ AFUE
• Brands: Navien, Rinnai, Viessmann, Triangle Tube

**Boiler Options:**

| Type | Cost | Notes |
|------|------|-------|
| Condensing gas | $4,000-$6,000 | Most common |
| Combi (heat + DHW) | $5,000-$8,000 | Eliminates water heater |
| Heat pump (air-to-water) | $6,000-$10,000 | Most efficient |

**Budget: $6,000** (combi unit - provides domestic hot water too)

**4. Controls:**
• Outdoor reset sensor: $200 (adjusts temp based on outside temp)
• Zone thermostats: 3 × $150 = $450
• System controller: $400-$800
• **Controls Subtotal: $1,050-$1,450**

**5. Piping & Accessories:**
• Supply/return manifold piping: $600
• Expansion tank: $150
• Air separator: $200
• Fill valve, gauges: $150
• Insulation (headers): $200
• **Accessories Subtotal: $1,300**

**MATERIALS TOTAL: $12,760-$13,260**

**═══ LABOR COSTS ═══** [8][18]

**Tubing Installation:**
• Method: Staple-up to subfloor OR lay in slab
• Our case: Lay on poly before concrete pour
• Time: 2 workers × 3 days = 48 hours
• Rate: $55/hr
• **Tubing Labor: $2,640**

**Boiler & Mechanical:**
• Time: 2 plumbers × 2 days = 32 hours
• Rate: $75/hr (licensed)
• **Boiler Labor: $2,400**

**Controls & Commissioning:**
• Time: 1 tech × 1 day = 8 hours
• Rate: $100/hr
• **Controls Labor: $800**

**LABOR TOTAL: $5,840**

**═══ TOTAL CALCULATION ═══**
• PEX tubing: $2,760
• Manifolds: $1,650
• Boiler (combi): $6,000
• Controls: $1,250
• Piping/accessories: $1,300
• Labor: $5,840
• Contingency (10%): $1,880
• **TOTAL: $20,680**

**Add coastal premium (+15%): $23,782**
**Add complexity buffer: $26,000**

**═══ WHY POLISHED CONCRETE + RADIANT = PERFECT ═══** [17][18]

**Thermal Mass Benefits:**
• Concrete stores heat for hours after boiler cycles off
• Reduces on/off cycling (more efficient)
• Even temperatures 24/7 (no temperature swings)
• Reduces heating costs 20-30% vs. forced air

**Comfort Benefits:**
• No drafts (radiant heat, not moving air)
• Silent operation
• No dust circulation (great for allergies)
• Warm feet, cool head (ideal heat distribution)

**═══ OPERATING COSTS ═══**

**Estimated Winter Heating:**
• Coastal Oregon is MILD (rarely below 35°F)
• Boiler efficiency: 95%
• Estimated annual heating: $600-$900/year
• Much lower than inland Oregon or forced air

**═══ NOT INCLUDED ═══**

• Backup heat (wood stove): Separate $3K line item
• Air conditioning: Not needed for coastal climate

**RANGE EXPLANATION:**
• Low ($20K): Basic system, 2 zones
• Mid ($26K): Quality system, 3 zones, combi boiler ✓
• High ($35K): Premium boiler, 4+ zones, advanced controls`
  },
  
  // Insulation & Drywall
  insulation: {
    estimate: '$10,000',
    low: '$6,000',
    high: '$15,000',
    notes: `**CALCULATION:** Complete building envelope insulation.

**═══ OREGON CLIMATE ZONE 4C REQUIREMENTS ═══** [22][12]

Per Oregon Residential Specialty Code:
• Walls: R-21 minimum (2×6 walls)
• Ceiling/Roof: R-49 minimum
• Floor (over crawl): R-30 minimum
• Rim joist: R-21 minimum

**Coastal Oregon Benefit:** Milder climate than inland = lower heating demand, but code still applies.

**═══ AREA CALCULATIONS ═══**

**Exterior Walls:** (shed roof: 9' low side to 11' high side)
• Perimeter: 65+25+65+25 = 180 LF
• Average height: 10 ft (9'-11' varies with roof slope)
• Gross area: 180 × 10 = 1,800 SF
• Less openings (~25%): 1,800 × 0.75 = **1,350 SF net walls**

**Ceiling/Roof Assembly:**
• Area: **1,600 SF**
• Cathedral/vaulted: Use rigid + batt combination

**Floor (Crawl Space Side Only):**
• Area: ~800 SF (east side only; west is slab on piles)
• **800 SF floor**

**TOTAL INSULATION AREA: ~3,615 SF**

**═══ INSULATION OPTIONS & COSTS ═══** [22]

**WALLS (R-21 required):**

| Option | Cost/SF | Coverage | Total |
|--------|---------|----------|-------|
| Fiberglass batt (R-21) | $1.00 | 1,350 SF | $1,350 |
| Mineral wool (R-23) | $1.50 | 1,350 SF | $2,025 |
| Spray foam (R-21) | $2.50 | 1,350 SF | $3,375 |

**Recommendation:** Fiberglass or mineral wool for walls ($1,350-$2,025)

**CEILING (R-49 required):**

| Option | Cost/SF | Coverage | Total |
|--------|---------|----------|-------|
| Blown fiberglass | $1.50 | 1,600 SF | $2,400 |
| Blown cellulose | $1.25 | 1,600 SF | $2,000 |
| Batt + rigid combo | $2.00 | 1,600 SF | $3,200 |

**Note:** With T&G wood ceiling, insulation goes ABOVE ceiling boards. Method depends on roof assembly design.

**Recommendation:** Blown cellulose (if accessible) or batt ($2,000-$2,400)

**FLOOR (R-30 required):**

| Option | Cost/SF | Coverage | Total |
|--------|---------|----------|-------|
| Fiberglass batt | $1.25 | 800 SF | $1,000 |
| Spray foam | $3.00 | 800 SF | $2,400 |

**Recommendation:** Spray foam for crawl (moisture barrier + insulation) ($2,400)

**═══ MATERIALS TOTAL ═══**
• Walls (mineral wool): $2,000
• Ceiling (blown): $2,200
• Floor (spray foam): $2,400
• Vapor barriers, tape, misc: $400
• **MATERIALS: $7,000**

**═══ LABOR COSTS ═══** [8][22]

**Installation Time:**
• Walls: 2 workers × 1 day = 16 hours
• Ceiling: 2 workers × 1 day = 16 hours
• Crawl space: 1 worker × 1 day = 8 hours
• **Total: 40 hours**

**Labor Rate:** $40-$60/hr
**Labor Cost:** 40 × $50 = $2,000

**═══ TOTAL CALCULATION ═══**
• Materials: $7,000
• Labor: $2,000
• Contingency: $900
• **TOTAL: $9,900 ≈ $10,000**

**═══ COASTAL MOISTURE CONSIDERATIONS ═══** [13]

• High humidity and salt air
• Vapor barrier placement: Critical on warm side
• Crawl space: MUST be properly vented or encapsulated
• Spray foam in crawl = acts as vapor barrier (recommended)

**═══ AIR SEALING ═══**

Included in estimate:
• Caulk all penetrations
• Foam can sealing (outlets, pipes)
• Weather-strip attic access
• Seal rim joists

**Air sealing is 50% of energy efficiency** - don't skip this!

**RANGE EXPLANATION:**
• Low ($6K): Basic batt only, minimal air sealing
• Mid ($10K): Mixed approach, spray in critical areas ✓
• High ($15K): Full spray foam throughout`
  },
  drywall: {
    estimate: '$14,000',
    low: '$10,000',
    high: '$20,000',
    notes: `**CALCULATION:** Drywall on walls only (ceiling is T&G wood).

**═══ AREA CALCULATION ═══** [25]

**Wall Drywall:** (walls only - exposed rafters/T&G ceiling)
• Exterior walls: ~1,350 SF (deducting openings, 9'-11' height)
• Interior walls: ~2,500 SF (both sides of partitions, taller walls)
• **Total wall area: ~3,850 SF**

**Ceiling:**
• **0 SF** - Exposed rafters with T&G wood ceiling (separate line item)
• This is a SIGNIFICANT REDUCTION from typical drywall scope

**Typical 1,600 SF home:** 5,000+ SF of drywall
**Our design:** ~3,850 SF (25% less!)

**═══ MATERIALS ═══** [25]

**Drywall Sheets:**
• Sheets needed: 3,850 SF ÷ 32 SF/sheet = 121 sheets
• 1/2" drywall: 121 × $14/sheet = $1,694
• Add 10% waste: $1,863

**Joint Compound:**
• Boxes needed: ~15 boxes
• Cost: 15 × $18 = $270

**Tape:**
• Paper tape: 4 rolls × $8 = $32
• Mesh tape: 2 rolls × $12 = $24

**Corner Bead:**
• Linear feet: ~200 LF (minimal with modern design)
• Cost: 200 × $0.75 = $150

**Fasteners:**
• Drywall screws: 5 boxes × $35 = $175

**MATERIALS TOTAL: $2,345**

**═══ LABOR BREAKDOWN ═══** [8][25]

**Phase 1: Hanging**
• Rate: $0.75-$1.00/SF
• 3,850 SF × $0.85 = $3,273

**Phase 2: Taping & Mudding**
• Rate: $0.75-$1.00/SF (3 coats)
• 3,850 SF × $0.90 = $3,465

**Phase 3: Sanding**
• Rate: $0.25-$0.40/SF
• 3,850 SF × $0.30 = $1,155

**Phase 4: Texture** (if any)
• Smooth walls = no texture (modern aesthetic)
• Light orange peel: $0.40-$0.60/SF (add $1,540-$2,310)
• **Our choice: Smooth = $0**

**Phase 5: Priming**
• Often combined with painting
• Rate: $0.30-$0.50/SF
• 3,850 SF × $0.40 = $1,540

**LABOR TOTAL: $9,433**

**═══ TOTAL CALCULATION ═══**
• Materials: $2,550
• Hanging: $3,273
• Taping/mudding: $3,465
• Sanding: $1,155
• Priming: $1,540
• Contingency: $1,198
• **TOTAL: $13,181**

**Add coastal factor (+10%): $14,499**
**BUDGET: $14,000-$15,000**

**═══ COMPLEXITY FACTORS ═══**

**Simplifications (reduce cost):**
✓ No ceiling drywall (exposed rafters with T&G wood)
✓ Rectangular layout (fewer awkward cuts)
✓ Open floor plan (fewer interior walls)
✓ Modern smooth finish (no texture)
✓ Minimal trim (no crown/base to work around)

**Complications (add cost):**
• 9'-11' walls: Taller than standard, requires scaffolding
• Sloped ceiling line: More difficult cuts at top of walls
• Steel corners: +$50-$100 vs. paper bead

**═══ DIY POTENTIAL ═══**

Drywall is technically DIY-able but:
• Hanging: Moderate difficulty, heavy sheets
• Taping: SKILL REQUIRED - bad taping = bad walls
• Recommendation: DIY hang, hire taping = save $3,000

**RANGE EXPLANATION:**
• Low ($10K): Very simple layout, DIY assist
• Mid ($16K): Professional, quality finish ✓
• High ($25K): Complex layout, premium finish levels`
  },
  paint: {
    estimate: '$4,500',
    low: '$2,500',
    high: '$7,000',
    notes: `**CALCULATION:** Walls only - all doors/trim are stained natural wood.

**═══ PAINTABLE AREA ═══**

**Walls only:**
• Drywall area: ~3,850 SF (9'-11' walls)

**NOT PAINTED (natural stained wood):**
• Ceiling: Exposed rafters + T&G wood
• Interior doors: CVG fir (stained + clear)
• All trim/casing: CVG fir (stained + clear)
• Baseboard: CVG fir (stained + clear)

**TOTAL PAINTABLE: ~3,850 SF** (walls only)

**═══ PROFESSIONAL COST ═══**

**Labor Rate:** $1.50-$2.50/SF of wall area [8]
• Includes: Prep, prime (if needed), 2 coats

**Material Rate:** $0.30-$0.50/SF
• Quality paint: $40-$60/gallon
• Coverage: ~350 SF/gallon
• Gallons needed: 4,025 ÷ 350 = 12 gallons
• Cost: 12 × $50 = $600

**Professional Quote:**
• Labor: 3,850 SF × $1.50 = $5,775
• Materials: $550-$700
• **Professional Total: $6,325-$6,475**

**Note:** Lower $/SF because no trim cutting in - all trim is pre-stained

**═══ DIY BREAKDOWN ═══** ✅ EXCELLENT DIY CANDIDATE

**Materials Only:**
• Premium paint (2 coats): 12 gal × $55 = $660
• Primer (if new drywall): 7 gal × $35 = $245
• Brushes, rollers, tape, trays: $150
• Drop cloths, ladder: $75 (9'-11' walls need taller ladder)
• **DIY Materials: $1,000**

**DIY Time:**
• Prep: 4-6 hours
• Priming: 8-10 hours (taller walls)
• First coat: 8-10 hours
• Second coat: 6-8 hours
• Touch-up: 2-3 hours
• **Total: 28-37 hours**

**DIY SAVINGS: $4,500-$5,500**

**Note:** Faster than typical because no trim cutting in!

**═══ WHY PAINTING IS EASY DIY ═══**

✓ **Simple walls:** No baseboards or crown molding to cut around
✓ **Smooth finish:** No texture to match
✓ **Open floor plan:** Large uninterrupted wall areas
✓ **Modern aesthetic:** Solid colors, no faux finishes
✓ **Low risk:** Mistakes are easily fixed (just repaint)

**Note:** 9'-11' walls require extension poles and taller ladder

**═══ PROFESSIONAL VALUE ═══**

Consider hiring for:
• Speed (they're 3-4x faster)
• Ceilings (if any are painted)
• Perfect cut-lines at windows
• Spraying (faster, more even)

**═══ TOTAL CALCULATION ═══**

| Approach | Cost | Notes |
|----------|------|-------|
| Full DIY | $1,000 | Materials only |
| Full professional | $4,500-$6,500 | Turnkey |

**Budget: $4,500** (walls only, no trim cutting)

**Note:** Stain/finish for doors & trim is included in those line items.

**RANGE EXPLANATION:**
• Low ($2.5K): Full DIY, basic paint
• Mid ($4.5K): Professional, walls only ✓
• High ($7K): Premium paint, multiple colors, accent walls`
  },
  
  // Interior Finishes
  flooring: {
    estimate: '$14,000',
    low: '$3,000',
    high: '$22,000',
    notes: `**CALCULATION:** Polished concrete throughout living areas + tile in wet rooms.

**═══ FLOORING PLAN ═══**

**Ground Floor (1,600 SF):**
• Living/Kitchen/Dining: ~1,000 SF → **Polished concrete**
• Bedrooms: ~500 SF → **Polished concrete** (no carpet - modern + hypoallergenic)
• Bathrooms: ~100 SF → **Tile** (required for wet areas)
• Utility/Laundry: ~50 SF → **Polished concrete or tile**

**TOTAL:**
• Polished concrete: **~1,450 SF**
• Tile: **~150 SF**

**═══ POLISHED CONCRETE COST ═══** [28]

**Process:**
1. Grind to expose aggregate
2. Apply densifier
3. Polish in stages (50→100→200→400→800 grit)
4. Apply sealer
5. Optional: Dye or stain

**Labor Rate:** $3-$12/SF [28]
• Basic grind + seal: $3-$5/SF
• Medium polish (400 grit): $5-$8/SF
• High polish (800+ grit mirror): $8-$12/SF

**OUR APPROACH:** Medium polish (satin finish)

**Calculation:**
• 1,450 SF × $6.50/SF = **$9,425**

**═══ WHY POLISHED CONCRETE IS IDEAL ═══**

**Cost Savings vs. Alternatives:**

| Flooring Type | Cost/SF | 1,450 SF Total |
|---------------|---------|----------------|
| Polished concrete | $6.50 | $9,425 |
| Hardwood (oak) | $8-$15 | $11,600-$21,750 |
| Engineered wood | $6-$12 | $8,700-$17,400 |
| LVP (premium) | $4-$7 | $5,800-$10,150 |
| Tile (porcelain) | $8-$15 | $11,600-$21,750 |

**Polished concrete is:**
✓ Already there (you're "finishing" the structural slab)
✓ No material cost (the slab exists!)
✓ Extremely durable (50+ years)
✓ Perfect for radiant heat
✓ Easy maintenance (mop only)
✓ No replacement ever

**═══ BATHROOM TILE ═══** [28]

**Tile Selection (budget-quality):**
• Porcelain tile: $3-$7/SF materials
• Quality mid-range: $5/SF
• Materials: 150 SF × $5 = $750

**Installation:**
• Labor: $8-$15/SF
• Mid-range: $10/SF
• Labor: 150 SF × $10 = $1,500

**Tile Extras:**
• Thinset, grout, sealer: $200
• Backer board (if needed): $150

**BATHROOM TILE TOTAL: $2,600**

**═══ TOTAL FLOORING CALCULATION ═══**
• Polished concrete: $9,425
• Bathroom tile: $2,600
• Sealer for concrete: $400
• Transition strips: $200
• **SUBTOTAL: $12,625**
• Contingency: $1,150
• **TOTAL: $13,775 ≈ $14,000**

**═══ RADIANT HEAT INTEGRATION ═══** [31]

**For polished concrete over radiant:**
• Must wait for slab cure (28 days minimum)
• Grinding doesn't damage PEX (in slab)
• Surface temps distribute evenly
• Feels luxurious underfoot

**═══ COASTAL CONSIDERATIONS ═══** [13]

• Concrete handles humidity well
• No warping or buckling (unlike wood)
• Salt air won't affect polished concrete
• Ideal for beach house (sandy feet wash away)

**RANGE EXPLANATION:**
• Low ($3K): Seal only (no polish), basic tile
• Mid ($14K): Medium polish, quality tile ✓
• High ($22K): High-gloss polish, premium tile, custom work`
  },
  ceiling: {
    estimate: '$18,000',
    low: '$9,000',
    high: '$28,000',
    notes: `**CALCULATION:** T&G wood ceiling throughout - cathedral/vaulted aesthetic.

**═══ CEILING DESIGN ═══**

**Material:** Tongue & groove cedar or fir [29]
**Finish:** Natural stain + clear sealer (warm wood tones)
**Coverage:** Entire ceiling area = **~1,600 SF**
**Height:** Varies with shed roof (9-12 ft typical)

**═══ MATERIAL OPTIONS ═══** [29]

| Wood Type | Cost/SF | 1,600 SF Total | Character |
|-----------|---------|----------------|-----------|
| Cedar 1×6 T&G | $4-$6 | $6,400-$9,600 | Premium, aromatic |
| Doug fir 1×6 T&G | $3-$5 | $4,800-$8,000 | Strong grain |
| Pine 1×6 T&G | $2-$3 | $3,200-$4,800 | Budget option |
| Primed pine | $3-$4 | $4,800-$6,400 | For painted ceiling |
| Beetle-kill pine | $4-$6 | $6,400-$9,600 | Blue/gray character |

**SELECTED:** Cedar T&G @ $5/SF
**Materials:** 1,600 SF × $5 = **$8,000**
**Add 15% waste:** $9,200

**═══ INSTALLATION LABOR ═══** [8][29]

**Factors Affecting Labor:**
• Vaulted ceiling = harder than flat
• Working overhead = slower
• Cathedral height = scaffolding required
• Pattern (straight vs. diagonal)

**Labor Rate:** $5-$8/SF for T&G ceiling [8]
**Calculation:** 1,600 SF × $6.50 = **$10,400**

**Labor Breakdown:**
• 2 carpenters × 6 days × 8 hrs = 96 hours
• Rate: $65/hr skilled carpenter
• 96 × $65 = $6,240 (labor only)
• Scaffolding/lift rental: $500-$800/week

**═══ FINISH COSTS ═══**

**Staining (if pre-finished, skip):**
• Stain: 5 gal × $40 = $200
• Clear sealer: 5 gal × $50 = $250
• Application labor: 8 hrs × $50 = $400

**PRE-FINISHED T&G:** Add $1-$2/SF but saves finishing labor

**═══ TOTAL CALCULATION ═══**
• T&G materials: $9,200
• Installation labor: $6,240
• Scaffolding: $700
• Finish materials: $450
• Finish labor: $400
• Contingency: $800
• **TOTAL: $17,790 ≈ $18,000**

**═══ WHY T&G WOOD CEILING ═══**

**vs. Drywall Ceiling:**
• Warmer aesthetic (cabin feel)
• Hides insulation above
• No tape lines or cracks
• Good acoustic properties
• High perceived value

**vs. Beadboard:**
• More substantial look
• Better sound absorption
• Traditional craftsmanship
• Works with heavy timber trusses

**═══ CONSTRUCTION SEQUENCE ═══**

1. Install insulation in rafter bays
2. Install vapor barrier (if needed)
3. Install furring strips (optional, for air gap)
4. Nail T&G to rafters or furring
5. Work from one end to other
6. Stain and seal (or use pre-finished)

**═══ COASTAL CONSIDERATIONS ═══** [13]

• Cedar naturally resists moisture
• Humidity fluctuations = wood movement
• Allow 1/8" expansion gaps at walls
• Don't over-dry lumber before install

**RANGE EXPLANATION:**
• Low ($9K): Pine, simple installation
• Mid ($18K): Cedar, vaulted, quality finish ✓
• High ($28K): Premium wood, complex vaults, custom stain`
  },
  intDoors: {
    estimate: '$5,000',
    low: '$2,000',
    high: '$10,000',
    notes: `**CALCULATION:** Interior doors throughout - premium CVG (Clear Vertical Grain) fir.

**═══ DOOR COUNT ═══**

| Location | Qty | Type | Size |
|----------|-----|------|------|
| Master bedroom | 1 | Swing | 2-8 × 6-8 |
| Bedroom 2 | 1 | Swing | 2-8 × 6-8 |
| Master bath #1 | 1 | Swing | 2-6 × 6-8 |
| Master bath #2 | 1 | Swing | 2-6 × 6-8 |
| Powder room | 1 | Swing | 2-4 × 6-8 |
| Utility/laundry | 1 | Swing | 2-6 × 6-8 |
| Closet (master) | 1 | Bypass or bifold | 4-0 × 6-8 |
| Closet (bedroom 2) | 1 | Bypass or bifold | 4-0 × 6-8 |
| Linen closet | 1 | Swing | 2-0 × 6-8 |
| Pantry | 1 | Swing | 2-4 × 6-8 |

**TOTAL: ~10 interior door openings**
• Swing doors: 8
• Closet doors: 2-4 (doubles or bypasses)

**═══ DOOR QUALITY LEVELS ═══** [30]

| Type | Cost Each | 10 Doors | Quality |
|------|-----------|----------|---------|
| Hollow core | $50-$100 | $500-$1,000 | Builder grade |
| Solid core | $150-$300 | $1,500-$3,000 | Standard |
| Solid wood panel | $300-$600 | $3,000-$6,000 | Quality |
| CVG fir/cedar | $400-$800 | $4,000-$8,000 | Premium |
| Custom millwork | $800-$1,500 | $8,000-$15,000 | Luxury |

**SELECTED:** CVG (Clear Vertical Grain) Douglas fir
• **Matches T&G ceiling and trim aesthetic**
• Consistent with Pacific NW modern style
• Natural finish (stain + clear)

**CVG DOOR COST:** $450-$600/ea × 10 = **$4,500-$6,000**

**═══ HARDWARE ═══** [30]

**Hinges:**
• 3 hinges per door × 10 doors = 30 hinges
• Satin nickel or black: $8-$15/ea
• Cost: 30 × $12 = $360

**Locksets/Passage Sets:**
• Bedroom/bath privacy: 5 × $40 = $200
• Passage (closets, utility): 5 × $25 = $125
• **Hardware total: $685**

**═══ INSTALLATION ═══** [8]

**Labor Rate:** $75-$150/door installed
• Includes: Hang door, install hardware, adjust
• Does NOT include casing (separate trim item)

**Calculation:** 10 doors × $100 = **$1,000 labor**

**Note on Prehung vs. Slab:**
• Prehung doors: Faster install, +$50-$100/door
• Slab only: More labor, better fit
• Budget assumes prehung for efficiency

**═══ TOTAL CALCULATION ═══**
• CVG fir doors (10): $5,000
• Hardware: $685
• Installation: $1,000
• **SUBTOTAL: $6,685**
• Less contingency adjustment: -$685
• **BUDGET: $5,000-$6,000**

**Using mid-range CVG pricing in budget**

**═══ DESIGN NOTES ═══**

**CVG Fir Advantages:**
• Straight, consistent grain
• No knots (clear grade)
• Takes stain beautifully
• Matches regional architecture
• Sustainable (when FSC certified)

**Modern Aesthetic Options:**
• Flat panel (slab style) - minimalist
• Single shaker panel - transitional
• Full lite (glass) - for pantry/closets

**═══ COASTAL CONSIDERATIONS ═══** [13]

• Wood doors handle humidity OK if sealed
• Expansion/contraction normal
• Stain + polyurethane critical for protection
• Consider solid core for better sound isolation

**RANGE EXPLANATION:**
• Low ($2K): Hollow core, basic hardware
• Mid ($5K): CVG fir, quality hardware ✓
• High ($10K): Custom millwork, premium hardware`
  },
  trim: {
    estimate: '$4,500',
    low: '$2,000',
    high: '$6,000',
    notes: `**CALCULATION:** CVG fir trim throughout - stained to match doors, no paint.

**═══ ALL-WOOD TRIM STRATEGY ═══**

**Our Design:** CVG fir stained natural to showcase the wood
• Door casing: CVG fir
• Window casing: CVG fir
• Baseboard: CVG fir
• Finish: Stain + marine-grade clear coat

**Traditional Home Trim:**
• Crown molding
• Chair rail
• Wainscoting
• Baseboard (6"+)
• Door/window casing (3"+)
• **Cost: $15,000-$25,000**

**Modern Home Trim:**
• NO crown molding
• NO chair rail
• NO wainscoting
• Minimal baseboard (or none)
• Simple door/window casing
• **Cost: $2,000-$6,000**

**Our Design:** MINIMAL ✓

**═══ TRIM ELEMENTS ═══**

**1. DOOR CASING** [30]

| Doors | LF/Door | Total LF | Cost/LF | Total |
|-------|---------|----------|---------|-------|
| Interior (10) | 17 LF | 170 LF | $3 | $510 |
| Exterior (3) | 18 LF | 54 LF | $4 | $216 |
| **Total** | | **224 LF** | | **$726** |

**Material:** 1×4 CVG fir (stained + clear finish to match doors)

**2. WINDOW CASING** [30]

| Windows | LF/Window | Total LF | Cost/LF | Total |
|---------|-----------|----------|---------|-------|
| Standard (12) | 14 LF | 168 LF | $3 | $504 |
| Picture (2) | 18 LF | 36 LF | $3 | $108 |
| **Total** | | **204 LF** | | **$612** |

**3. BASEBOARD** (Optional)

**Option A: No baseboard**
• Drywall meets floor with reveal
• Ultra-modern look
• Cost: $0

**Option B: CVG fir baseboard** ✓
• 3-4" CVG fir to match doors/trim
• Stained + clear finish
• ~180 LF perimeter
• Cost: 180 × $4 = $720

**Option C: Minimal MDF**
• 2-3" painted MDF (not our style)
• 180 LF × $2 = $360

**BUDGET:** Option B (CVG fir to match all trim)

**═══ LABOR ═══** [8]

**Trim Carpentry Rate:** $4-$8/LF installed
• Includes: Cut, fit, nail, caulk, fill holes

**Calculation:**
• Door casing: 224 LF × $5 = $1,120
• Window casing: 204 LF × $5 = $1,020
• Baseboard: 180 LF × $3 = $540
• **Labor total: $2,680**

**═══ TOTAL CALCULATION ═══**

| Item | Materials | Labor | Total |
|------|-----------|-------|-------|
| Door casing | $726 | $1,120 | $1,846 |
| Window casing | $612 | $1,020 | $1,632 |
| Baseboard (CVG fir) | $720 | $540 | $1,260 |
| **Total** | **$2,058** | **$2,680** | **$4,738** |

**Add: Stain & Finish (~600 LF):**
• Stain: $50-$75 (penetrating oil stain)
• Clear finish (3 coats): $100-$150
• Labor (shop finish preferred): $1.50/LF = $900
• **Stain/finish: ~$1,100**

**TOTAL INCLUDING FINISH:** $5,838

**BUDGET: $4,500** (assumes some shop pre-finishing)

**═══ ALTERNATIVE: DRYWALL RETURNS ═══**

**Ultra-Modern Approach:**
• NO door/window casing at all
• Drywall returns to frame edges
• Corner bead at edges

**Pros:**
• Saves $2,000+ on trim
• Cleaner look
• Faster install

**Cons:**
• Requires precision drywall work
• Shows jams (frames must be perfect)
• Not traditional Northwest style

**═══ COASTAL CONSIDERATIONS ═══** [13]

• CVG fir handles humidity well when properly sealed
• Use marine-grade polyurethane for durability
• Leave small gaps at joints for movement
• Stain + 3 coats clear = excellent protection

**RANGE EXPLANATION:**
• Low ($2K): Drywall returns, no trim
• Mid ($4.5K): CVG fir throughout, stained ✓
• High ($6K): Premium profiles, extra detail`
  },
  
  // Kitchen & Bath
  cabinets: {
    estimate: '$16,000',
    low: '$10,000',
    high: '$30,000',
    notes: `**CALCULATION:** Kitchen cabinets + bathroom vanities.

**═══ CABINET SCOPE ═══**

**Kitchen:**
• Linear feet of base cabinets: ~15 LF
• Linear feet of wall cabinets: ~12 LF
• Island: Yes (~4 LF base)
• Pantry: Walk-in (no cabinet pantry needed)

**Bathrooms (2.5):**
• Master bath #1 vanity: 36-48" single sink (minimal aesthetic)
• Master bath #2 vanity: 36-48" single sink (identical)
• Powder room vanity: 24" single sink

**═══ CABINET QUALITY TIERS ═══** [32]

| Tier | Cost/LF | Kitchen (19 LF base) | Description |
|------|---------|----------------------|-------------|
| Stock | $100-$200 | $1,900-$3,800 | Big box store, limited sizes |
| Semi-custom | $200-$400 | $3,800-$7,600 | More options, better quality |
| Custom | $400-$800 | $7,600-$15,200 | Exact specs, premium materials |
| High-end custom | $800-$1,500 | $15,200-$28,500 | Furniture quality |

**KITCHEN CALCULATION (Semi-Custom):**
• Base cabinets: 19 LF × $300 = $5,700
• Wall cabinets: 12 LF × $250 = $3,000
• **Kitchen total: $8,700**

**═══ BATHROOM VANITIES ═══** [32]

**Master Bath #1 (48" single):**
• Semi-custom: $800-$1,500
• Budget: $1,000

**Master Bath #2 (48" single):**
• Semi-custom: $800-$1,500
• Budget: $1,000 (identical to #1)

**Powder Room (24"):**
• Semi-custom: $400-$800
• Budget: $500

**BATHROOM TOTAL: $2,500**

**═══ CABINET OPTIONS ═══**

**Material Choices:**
• Plywood box construction: +$1,500 vs. particle board
• Soft-close hardware: Standard now (included)
• Dovetail drawers: +$500-$1,000
• Full extension slides: Standard (included)

**Door Styles:**
• Shaker: Most popular, moderate cost
• Flat panel/slab: Modern, lower cost
• Raised panel: Traditional, higher cost

**Finish Options:**
• Paint (white): Standard
• Stain (natural wood): +10-15%
• Two-tone: +15-20%

**═══ INSTALLATION ═══** [8]

**Professional Install:**
• Labor rate: $75-$150/LF
• Kitchen (base + island + 1 tall): 20 LF × $100 = $2,000
• Vanities: 12 LF × $80 = $960
• **Install total: $2,960**

**DIY POTENTIAL:** ✅ GOOD
• Cabinets are DIY-friendly (pre-assembled)
• Requires: Level, drill, patience
• Savings: $2,500-$4,000

**═══ TOTAL CALCULATION ═══**
• Kitchen cabinets: $8,700
• Bathroom vanities: $3,500 (two 60\" double vanities + powder room)
• Installation: $3,900 (or $0 DIY)
• **TOTAL: $16,100**

**With DIY install: $12,200**
**Budget: $16,000** (allows professional install)

**═══ VALUE ENGINEERING OPTIONS ═══**

**Save money:**
• IKEA cabinets: $5,000-$8,000 for kitchen
• Open shelving instead of uppers: -$2,000
• Floating vanities: Can be cheaper
• RTA (ready to assemble): 30-50% savings

**Spend more:**
• Inset doors: +$3,000-$5,000
• Pull-out organizers: +$500-$1,500
• Under-cabinet lighting: +$500-$1,000

**═══ COASTAL CONSIDERATIONS ═══** [13]

• Humidity affects wood
• Marine-grade plywood recommended
• Avoid MDF doors near water
• Proper ventilation essential in baths

**RANGE EXPLANATION:**
• Low ($8K): Stock cabinets, DIY install
• Mid ($15K): Semi-custom, professional ✓
• High ($30K): Full custom, premium features`
  },
  counters: {
    estimate: '$8,500',
    low: '$4,000',
    high: '$14,000',
    notes: `**CALCULATION:** Kitchen + bathroom countertops.

**═══ COUNTER SQUARE FOOTAGE ═══**

**Kitchen:**
• Perimeter counters: ~40 SF
• Island: ~15 SF
• **Kitchen total: ~55 SF**

**Bathrooms:**
• Master #1 (48" single vanity): ~4 SF
• Master #2 (48" single vanity): ~4 SF
• Powder (24" vanity): ~3 SF
• **Bath total: ~11 SF**

**TOTAL COUNTER AREA: ~66 SF**

**═══ MATERIAL OPTIONS ═══** [33]

| Material | Cost/SF Installed | 66 SF Total | Notes |
|----------|-------------------|-------------|-------|
| Laminate | $20-$50 | $1,320-$3,300 | Budget, dated look |
| Butcher block | $40-$80 | $2,640-$5,280 | Warm, needs maintenance |
| Quartz | $80-$150 | $5,280-$9,900 | Popular, durable |
| Granite | $75-$200 | $4,950-$13,200 | Natural stone |
| Quartzite | $100-$200 | $6,600-$13,200 | Premium natural |
| Marble | $100-$200 | $6,600-$13,200 | Luxury, high maintenance |
| Concrete | $70-$150 | $4,620-$9,900 | Modern, custom |

**SELECTED:** Quartz (mid-grade)
• Why: Durable, uniform, non-porous, no sealing
• Perfect for coastal (humidity resistant)

**═══ QUARTZ COST BREAKDOWN ═══** [33]

**Materials:**
• Quartz slab: $50-$100/SF (mid-grade: $65)
• 66 SF × $65 = $4,290

**Fabrication & Install:**
• Template: $150-$300
• Cut/polish: $25-$35/SF → 66 × $30 = $1,980
• Install: $10-$20/SF → 66 × $15 = $990
• **Fab/install total: $3,120**

**Extras:**
• Sink cutout: $150-$250 × 3 = $600
• Edge profile: Standard = included
  - Upgraded (ogee, waterfall): +$15-$30/LF
• Backsplash (4" splash): 25 LF × $40 = $1,000

**═══ TOTAL CALCULATION ═══**
• Quartz material: $4,290
• Fab/install: $3,120
• Cutouts: $600
• **SUBTOTAL: $8,010**

Round to: $8,000-$8,500

**═══ ISLAND OPTIONS ═══**

**Standard quartz island:** Included above

**Waterfall edge (sides):**
• Adds ~10 SF material
• Add $1,500-$2,000
• Very modern look

**═══ ALTERNATIVE: CONCRETE COUNTERS ═══**

Could match polished concrete floors!
• Cost: Similar to quartz ($70-$120/SF)
• Custom pour: $100-$150/SF
• Pros: Unique, matches floor aesthetic
• Cons: Can crack, needs sealing, weight

**═══ BATHROOM COUNTER OPTIONS ═══**

**Match kitchen:** Quartz throughout
• Cohesive look
• Same installer = bulk discount

**Alternative for baths:**
• Cultured marble: $30-$50/SF (budget)
• Solid surface: $50-$80/SF
• Natural stone: $75-$150/SF

**BUDGET:** Same quartz as kitchen (included in 66 SF)

**═══ COASTAL CONSIDERATIONS ═══** [13]

• Quartz: Non-porous, humidity resistant ✓
• Granite: Must be sealed annually
• Marble: Avoid (etches, stains)
• Butcher block: Needs oil, can warp

**Quartz is ideal for coastal humidity**

**RANGE EXPLANATION:**
• Low ($3K): Laminate or basic solid surface
• Mid ($8,500): Mid-grade quartz ✓
• High ($14K): Premium quartz/quartzite, waterfall island`
  },
  appliances: {
    estimate: '$10,000',
    low: '$5,000',
    high: '$20,000',
    notes: `**CALCULATION:** Complete kitchen appliance package.

**═══ APPLIANCE LIST ═══**

| Appliance | Budget | Mid-Grade | Premium |
|-----------|--------|-----------|---------|
| Refrigerator | $800-$1,500 | $1,500-$3,000 | $3,000-$8,000 |
| Range/Oven | $600-$1,200 | $1,200-$3,000 | $3,000-$12,000 |
| Dishwasher | $400-$700 | $700-$1,200 | $1,200-$2,500 |
| Microwave | $200-$400 | $400-$800 | $800-$2,000 |
| Range hood | $200-$400 | $400-$1,000 | $1,000-$3,000 |
| Washer | $500-$800 | $800-$1,200 | $1,200-$2,000 |
| Dryer | $500-$800 | $800-$1,200 | $1,200-$2,000 |
| **TOTAL** | **$3,200-$5,800** | **$5,800-$11,400** | **$11,400-$31,500** |

**═══ OUR SELECTION: MID-GRADE ═══** [34]

**Refrigerator:** $2,000
• French door, ~22 cu ft
• Ice maker
• Energy Star
• Brands: Samsung, LG, Whirlpool

**Range:** $1,800
• Gas range (if propane) or induction
• 5 burners, convection oven
• Self-cleaning
• Brands: Samsung, GE, Frigidaire

**Dishwasher:** $900
• Quiet operation (<45 dB)
• Third rack
• Energy Star
• Brands: Bosch, KitchenAid

**Microwave:** $500
• Over-the-range or built-in
• 1.9 cu ft
• Sensor cooking
• Match other appliances

**Range Hood:** $600
• 30" or 36" width
• 400+ CFM
• Quiet operation
• Match kitchen aesthetic

**Washer:** $1,100
• Front-load, 4.5+ cu ft
• Steam cleaning
• Energy Star
• Brands: LG, Samsung

**Dryer:** $1,100
• Matching, 7.4+ cu ft
• Steam refresh
• Sensor dry
• Electric (unless propane available)

**═══ TOTAL CALCULATION ═══**
• Refrigerator: $2,000
• Range: $1,800
• Dishwasher: $900
• Microwave: $500
• Range hood: $600
• Washer: $1,100
• Dryer: $1,100
• **SUBTOTAL: $8,000**

**Add delivery/install:** $500-$800
**Add misc (hookups, venting):** $500

**TOTAL: $9,000-$9,300**
**BUDGET: $10,000** (with contingency)

**═══ APPLIANCE BUNDLES ═══** [34]

**Package deals save 10-20%:**
• Same brand kitchen package
• Black Friday/holiday sales
• Builder discounts (ask!)

**Example Bundle (mid-grade):**
• Fridge + Range + DW + Micro
• Regular: $5,200
• Bundle: $4,200-$4,700

**═══ SPECIAL CONSIDERATIONS ═══**

**Gas vs. Electric:**
• Location has propane (no natural gas)
• Propane range: Works great
• Alternative: Induction cooktop (electric)
• Dryer: Electric recommended (propane dryers expensive)

**Induction Cooktop Benefits:**
• Fast heating
• Safe (no flame)
• Easy cleaning
• Works great with radiant heat system

**═══ COASTAL CONSIDERATIONS ═══** [13]

• Salt air can corrode finishes
• Stainless steel: Choose 304 grade
• Warranty: Check for coastal exclusions
• Ventilation: Critical for humidity control

**═══ DIY OPTIONS ═══**

**Not recommended for DIY:**
• Gas connections: Licensed plumber required
• Electrical: 240V for range, dryer

**DIY-able:**
• Fridge: Just plug in
• Microwave: Easy install
• Dishwasher: Moderate DIY

**RANGE EXPLANATION:**
• Low ($5K): Basic package, builder grade
• Mid ($10K): Mid-grade package ✓
• High ($20K): Premium brands, pro-style range`
  },
  bathFixtures: {
    estimate: '$12,000',
    low: '$8,000',
    high: '$18,000',
    notes: `**CALCULATION:** Fixtures for 2.5 bathrooms (two master baths, minimal single-sink aesthetic).

**═══ BATHROOM LAYOUT ═══**

**Master Bath #1 (Full):**
• Toilet
• Single vanity (48") with 1 sink - minimal aesthetic
• Large walk-in shower

**Master Bath #2 (Full - identical to #1):**
• Toilet
• Single vanity (48") with 1 sink - minimal aesthetic
• Large walk-in shower

**Powder Room (Half):**
• Toilet
• Pedestal or floating vanity (24")

**═══ FIXTURE BREAKDOWN ═══** [35]

**TOILETS (3):**

| Type | Cost Each | Qty | Total |
|------|-----------|-----|-------|
| Builder basic | $150-$250 | 3 | $450-$750 |
| Comfort height | $250-$400 | 3 | $750-$1,200 |
| Dual flush | $300-$500 | 3 | $900-$1,500 |
| Wall-hung | $500-$800 | 3 | $1,500-$2,400 |

**Selection:** Comfort height, elongated: **$350 × 3 = $1,050**

**SINKS (3):**

| Type | Cost | Location |
|------|------|----------|
| Undermount (1) | $175 | Master #1 |
| Undermount (1) | $175 | Master #2 |
| Vessel/drop-in (1) | $100 | Powder |
| **Total** | **$450** | |

**Note:** Vanity tops separate (counted in counters)

**FAUCETS (3):**

| Type | Cost | Location |
|------|------|----------|
| Single-hole (1) | $200 | Master #1 |
| Single-hole (1) | $200 | Master #2 |
| Single-handle (1) | $125 | Powder |
| **Total** | **$525** | |

**═══ SHOWERS & TUB ═══** [35]

**Master #1 Walk-in Shower:**
• Tile shower (custom): $3,000-$6,000
  - Tile (walls/floor): ~100 SF × $20 = $2,000
  - Waterproofing: $500
  - Shower pan or tile floor: $500
  - Glass door/panel: $800-$1,500
  - Showerhead + valve: $400-$800
• **Master #1 shower total: $4,200**

**Master #2 Walk-in Shower:** (identical to #1)
• Tile shower (custom): Same specs
• **Master #2 shower total: $4,200**

**═══ ACCESSORIES ═══**

**Per Bathroom:**
• Towel bars (2): $50
• Toilet paper holder: $25
• Robe hook: $20
• Mirror: $100-$300
• Medicine cabinet: $150-$400

**Total accessories (3 baths): $800-$1,500**

**═══ TOTAL CALCULATION ═══**

| Category | Master #1 | Master #2 | Powder | Total |
|----------|-----------|-----------|--------|-------|
| Toilet | $350 | $350 | $350 | $1,050 |
| Sink | $175 | $175 | $100 | $450 |
| Faucet | $200 | $200 | $125 | $525 |
| Shower | $4,200 | $4,200 | - | $8,400 |
| Accessories | $350 | $350 | $200 | $900 |
| **Room Total** | **$5,275** | **$5,275** | **$775** | **$11,325** |

**Add vanity lights:** $300-$500
**Add exhaust fans:** $300-$450 (3 × $150)
**Installation labor:** $1,500-$2,000

**═══ GRAND TOTAL ═══**
• Fixtures: $11,325
• Lighting: $400
• Exhaust fans: $400
• Install labor: $1,800
• **TOTAL: $13,925**

**BUDGET: $12,000** (minimal aesthetic saves)

**═══ UPGRADE OPTIONS ═══**

**Luxury Additions:**
• Heated towel rack: +$300-$800
• Rain showerhead: +$200-$500
• Body jets: +$500-$1,500
• Freestanding tub: +$1,000-$5,000
• Bidet toilet seat: +$300-$800

**═══ COASTAL CONSIDERATIONS ═══** [13]

• Chrome finishes: Can corrode near coast
• Brushed nickel: Better salt resistance
• Porcelain/ceramic: Excellent durability
• Proper ventilation: Critical to prevent mold

**RANGE EXPLANATION:**
• Low ($12K): Basic fixtures, simpler showers
• Mid ($16K): Quality mid-grade fixtures, two master baths ✓
• High ($24K): Premium fixtures, luxury features`
  },
  
  // Soft Costs
  permits: {
    estimate: '$8,000',
    low: '$6,000',
    high: '$11,000',
    notes: `**CALCULATION:** All Tillamook County permits and fees.

**═══ TILLAMOOK COUNTY PERMIT STRUCTURE ═══** [14][15]

**1. BUILDING PERMIT** [14]

Based on project valuation formula:
• Tillamook uses ICC valuation tables
• New residential: ~$150-$200/SF valuation
• 1,600 SF × $175 = $280,000 valuation

**Permit Fee Calculation:**
• Base fee + per-thousand rate
• Approximate: $2,500-$3,500

**Plan Review:** 65% of permit fee
• ~$1,625-$2,275

**Building Permit Total: ~$4,125-$5,775**

**2. TRADE PERMITS** [14]

| Permit | Fee Range | Notes |
|--------|-----------|-------|
| Electrical | $400-$600 | Based on circuits |
| Plumbing | $350-$500 | Based on fixtures |
| Mechanical | $200-$350 | HVAC, radiant |
| **Trade Total** | **$950-$1,450** | |

**3. SEPTIC PERMIT** [17]

| Component | Fee |
|-----------|-----|
| Septic site evaluation | $350-$500 |
| Septic permit | $800-$1,200 |
| Inspection fees | $200-$400 |
| **Septic Total** | **$1,350-$2,100** |

**4. OTHER COUNTY/STATE FEES** [14][15]

| Fee | Amount | Notes |
|-----|--------|-------|
| School Excise Tax | $1,600 | $1.00/SF (Neah-Kah-Nie SD) |
| Address assignment | $50-$100 | New construction |
| Zoning review | $100-$200 | Land use verification |
| **Other Total** | **$1,750-$1,900** | |

**═══ SPECIAL COASTAL PERMITS ═══** [15]

**May be required depending on lot location:**

| Permit | Fee | Trigger |
|--------|-----|---------|
| Floodplain Development | $300-$500 | If in flood zone |
| Beach/Dune Overlay | $400-$600 | Within overlay zone |
| Geohazard Review | $200-$400 | Steep slopes, slides |
| Stormwater | $200-$300 | Disturbing >1 acre |

**Budget assumption:** One coastal overlay = $400

**═══ TOTAL PERMIT CALCULATION ═══**

| Category | Low | High |
|----------|-----|------|
| Building permit | $2,500 | $3,500 |
| Plan review | $1,600 | $2,300 |
| Trade permits | $950 | $1,450 |
| Septic | $1,350 | $2,100 |
| Excise tax | $1,600 | $1,600 |
| Other fees | $150 | $300 |
| Coastal overlay | $0 | $600 |
| **TOTAL** | **$8,150** | **$11,850** |

**Less unlikely fees: -$1,500**
**BUDGET: ~$7,000**

**═══ TIMING CONSIDERATIONS ═══**

**Apply for permits in this order:**
1. Septic site eval → 2-4 weeks
2. Building permit → 4-8 weeks review
3. Trade permits → With or after building permit

**Total permit timeline:** 6-12 weeks before breaking ground

**═══ INSPECTION SCHEDULE ═══** [14]

**Required inspections (included in fees):**
• Footings/foundation
• Underground plumbing
• Rough framing
• Rough electrical
• Rough plumbing
• Rough mechanical
• Insulation
• Final inspection

**Septic inspections (separate):**
• Tank placement
• Distribution field
• Final cover

**RANGE EXPLANATION:**
• Low ($5K): Minimal overlays, standard fees
• Mid ($7K): Some coastal review ✓
• High ($10K): Multiple overlays, complex review`
  },
  engineering: {
    estimate: '$8,000',
    low: '$5,000',
    high: '$12,000',
    notes: `**CALCULATION:** Required engineering for helical pile foundation and coastal site.

**═══ REQUIRED ENGINEERING SERVICES ═══** [18][19]

**1. GEOTECHNICAL REPORT** [18]

| Service | Cost | Notes |
|---------|------|-------|
| Site investigation | $2,000-$4,000 | Soil borings, 2-4 locations |
| Report preparation | $500-$1,000 | Analysis and recommendations |
| **Geotech Total** | **$2,500-$5,000** | |

**For Arch Cape area specifically:**
• Variable soils (sand, clay, fill)
• Groundwater assessment needed
• Landslide hazard review (common on coast)
• Helical pile sizing recommendations

**Note:** Cheaper ($1,500-$2,000) if simple, flat lot with known soils. Budget higher for hillside/complex.

**2. STRUCTURAL ENGINEERING** [19]

| Service | Cost | Notes |
|---------|------|-------|
| Foundation design | $2,000-$4,000 | Helical pile system |
| Framing design | $1,000-$2,000 | Load paths, connections |
| Sealed drawings | $500-$1,000 | Stamped for permit |
| **Structural Total** | **$3,500-$7,000** | |

**Helical Pile Specific Requirements:**
• Load calculations per pile
• Pile spacing and torque specs
• Pile cap/beam design
• Foundation-to-frame connections

**3. ADDITIONAL ENGINEERING (if needed):**

| Service | Cost | Trigger |
|---------|------|---------|
| Coastal setback analysis | $500-$1,000 | Ocean-front lots |
| Stormwater design | $1,000-$2,000 | If required |
| Retaining wall design | $1,000-$2,500 | Significant walls |
| Septic engineering | $500-$1,000 | Complex sites |

**═══ TOTAL ENGINEERING CALCULATION ═══**

| Service | Budget |
|---------|--------|
| Geotechnical report | $3,500 |
| Structural engineering | $4,000 |
| Contingency (misc.) | $500 |
| **TOTAL** | **$8,000** |

**═══ WHY ENGINEERING IS ESSENTIAL ═══**

**Helical piles require engineering because:**
• Each pile needs load calculation
• Soil conditions vary across site
• Torque correlates to capacity
• Code requires stamped drawings
• Manufacturer won't warranty without

**Coastal Oregon requires engineering because:** [13]
• High wind zones
• Seismic considerations
• Potential landslide areas
• Variable sandy soils
• Exposure to salt/moisture

**═══ FINDING ENGINEERS ═══**

**Geotechnical firms on Oregon coast:**
• Travel from Portland adds cost
• Some specialize in coastal work
• Get 2-3 quotes

**Structural engineers:**
• Must be Oregon-licensed PE
• Experience with helical piles preferred
• Can work remotely (plans + site visits)

**═══ TIMING ═══**

1. **Geotech first:** Need soil data before structural
2. **Duration:** Geotech = 2-4 weeks, structural = 2-4 weeks
3. **Before permits:** Engineering must be complete for permit submission

**Total engineering timeline: 4-8 weeks**

**RANGE EXPLANATION:**
• Low ($5K): Simple site, standard foundation
• Mid ($8K): Helical piles, moderate complexity ✓
• High ($12K): Complex site, multiple engineers`
  },
  insurance: {
    estimate: '$4,000',
    low: '$2,500',
    high: '$6,000',
    notes: `**CALCULATION:** Builder's risk insurance during construction.

**═══ BUILDER'S RISK INSURANCE ═══** [36]

**What It Covers:**
• Structure during construction
• Materials on site
• Theft of materials/equipment
• Fire, wind, vandalism damage
• Some liability

**What It Doesn't Cover:**
• Contractor errors
• Design flaws
• Employee injuries (need workers comp)
• Your personal liability

**═══ COST CALCULATION ═══** [36]

**Premium Formula:**
• 1-4% of construction value
• Higher % for shorter terms
• Higher % for coastal/fire zones

**Our Project:**
• Construction value: ~$350,000 (hard costs)
• Build duration: ~9-12 months
• Location: Coastal Oregon (high risk zone)

**Calculation:**
• Base rate: 1.5% × $350,000 = $5,250/year
• Coastal premium: +20% = $6,300/year
• 10-month policy: $6,300 × (10/12) = $5,250

**Actual cost range:** $3,500-$5,500 depending on:
• Deductible selected
• Coverage limits chosen
• Insurance carrier

**BUDGET: $4,000**

**═══ POLICY OPTIONS ═══**

**Deductible Choices:**
• $1,000 deductible: Higher premium
• $2,500 deductible: Standard
• $5,000 deductible: Lower premium

**Coverage Types:**
• Basic: Fire, wind, vandalism
• Broad: + theft, water damage
• Special: All-risk (excludes specific items)

**Recommended: Broad or Special form**

**═══ WHO PROVIDES ═══**

**If using GC/CM:**
• They may have policy (verify!)
• Their policy may not cover YOUR interest
• You may still want your own

**If owner-builder:**
• YOU must purchase policy
• Some carriers won't insure owner-builders
• May need specialty carrier

**═══ COASTAL SPECIFIC ═══** [13]

**Coastal Oregon considerations:**
• Wind coverage: Essential (winter storms)
• Flood: Usually excluded (separate policy)
• Earthquake: Usually excluded
• Named storm: Check policy carefully

**Insurance is harder to get on coast:**
• Some carriers won't write policies
• May need specialty coastal insurer
• Shop early in planning process

**═══ OTHER INSURANCE NEEDS ═══**

**During Construction:**
• Builder's risk: $4,000 ✓
• General liability (if owner-builder): $1,000-$2,000
• Workers comp: GC/subs should have

**After Construction:**
• Homeowner's policy: Separate (not in build budget)
• Coastal may need separate wind/flood

**═══ TIMING ═══**

• Purchase before ANY work begins
• Policy starts when you break ground
• Extends until certificate of occupancy
• Can extend if build runs over

**RANGE EXPLANATION:**
• Low ($2,500): Short build, high deductible
• Mid ($4,000): 10-month build, standard ✓
• High ($6,000): Extended build, full coverage`
  },
  gcFee: {
    estimate: '15%',
    low: '10%',
    high: '20%',
    notes: `**CALCULATION:** General Contractor / Construction Manager fee.

**═══ GC vs. CM vs. OWNER-BUILDER ═══** [37]

| Approach | Fee | Your Role | Best For |
|----------|-----|-----------|----------|
| Full GC | 15-25% | Hands off | Busy owners |
| CM (oversight) | 10-15% | Some involvement | Informed owners |
| Owner-builder | 0% | Full responsibility | Experienced DIYers |

**═══ GENERAL CONTRACTOR (FULL SERVICE) ═══** [37]

**What GC Provides:**
• Hires and manages all subcontractors
• Purchases materials
• Manages schedule
• Handles permits and inspections
• Responsible for quality
• Takes all liability

**GC Cost:**
• Typical: 15-25% of hard costs
• Oregon coast: 18-25% (less competition)
• Premium for custom homes

**On $350K hard costs:**
• Low: 15% = $52,500
• High: 25% = $87,500

**═══ CONSTRUCTION MANAGER (CM) ═══** [37]

**What CM Provides:**
• Advises on contractor selection
• Reviews bids and contracts
• Monitors progress and quality
• Manages schedule
• You contract directly with subs

**CM Cost:**
• Typical: 10-15% of hard costs
• Can be hourly: $75-$150/hr
• Or flat fee: $25,000-$40,000

**On $350K hard costs:**
• Low: 10% = $35,000
• High: 15% = $52,500

**═══ OWNER-BUILDER ═══**

**What YOU Provide:**
• Find and hire all subcontractors
• Negotiate prices
• Manage all schedules
• Handle all permits
• Quality control
• Coordinate inspections

**Requirements:**
• Significant time (20-40 hrs/week during build)
• Construction knowledge
• Organizational skills
• Problem-solving ability
• Stress tolerance!

**Oregon Owner-Builder Notes:**
• No license required for own home
• Must disclose if selling within certain period
• You are liable for site safety

**Savings:** $35,000-$87,500 (the GC fee)

**═══ BUDGET ASSUMPTION ═══**

**Using CM approach at 12-15%:**

| Hard Costs | 12% | 15% |
|------------|-----|-----|
| $300,000 | $36,000 | $45,000 |
| $350,000 | $42,000 | $52,500 |
| $400,000 | $48,000 | $60,000 |

**Budget: 15% × mid-range hard costs**

**═══ WHAT'S INCLUDED IN FEE ═══**

**Standard inclusions:**
• Project supervision
• Subcontractor coordination
• Material ordering
• Schedule management
• Problem resolution
• Inspection coordination

**Often extra (confirm):**
• Design changes
• Owner-caused delays
• Extended timeline
• Special material sourcing

**═══ NEGOTIATING GC/CM FEE ═══**

**Ways to reduce fee:**
• Simple design: Fewer headaches = lower fee
• You handle some tasks: Material pickup, etc.
• Longer timeline acceptable: Less schedule pressure
• Off-season start: More available contractors

**Fee structure options:**
• Percentage of costs: Standard (incentivizes higher costs!)
• Fixed fee: Better for owner (requires detailed scope)
• Cost-plus with cap: Hybrid approach

**═══ COASTAL OREGON REALITY ═══**

• Fewer GCs available
• Many are booked 6-12 months out
• Travel time from Portland adds cost
• Local GCs may have premium
• Quality varies - check references!

**Find GC early:** Start looking 6+ months before planned start

**RANGE EXPLANATION:**
• Low (10%): CM role, owner very involved
• Mid (15%): Full CM or value GC ✓
• High (20%): Premium GC, hands-off owner`
  },
  
  // Site Finishing
  driveway: {
    estimate: '$2,000',
    low: '$1,500',
    high: '$3,500',
    notes: `**CALCULATION:** Gravel driveway and parking area.

**═══ DRIVEWAY SCOPE ═══**

**Layout:**
• Length from road: ~20 feet (very short setback)
• Width: ~20 feet (2-car parking width)
• No turnaround (back out to street)

**Total Area Estimate:**
• Parking pad only: 20 × 20 = **400 SF**

**═══ GRAVEL DRIVEWAY OPTIONS ═══** [38]

| Type | Cost/SF | 400 SF | Notes |
|------|---------|--------|-------|
| Basic gravel (4") | $1.50-$2.50 | $600-$1,000 | Needs maintenance |
| Heavy gravel (6") | $2.50-$3.50 | $1,000-$1,400 | More durable |
| Recycled concrete | $2.00-$3.00 | $800-$1,200 | Eco option |

**For coastal Oregon:** Heavy gravel recommended (rain runoff)

**═══ GRAVEL DRIVEWAY BREAKDOWN ═══**

**Base Preparation:**
• Clear/grade: $200-$400
• Fabric barrier: $80-$120 (prevents settling)
• Compaction: Included in grading

**Gravel Layers:**
• Base rock (4"): $1.00/SF = $400
• Top gravel (2"): $0.75/SF = $300
• **Gravel total: $700**

**Delivery:**
• Gravel by the yard: ~8 yards needed
• Delivery fee: $100-$150

**Installation:**
• Labor to spread/compact: $250-$400

**═══ TOTAL GRAVEL DRIVEWAY ═══**
• Site prep: $300
• Fabric: $100
• Base rock: $400
• Top gravel: $300
• Delivery: $125
• Labor: $325
• **TOTAL: $1,550**

**BUDGET: $2,000** (with contingency)

**═══ ALTERNATIVES CONSIDERED ═══**

**Asphalt:**
• Cost: $5-$10/SF = $2,000-$4,000
• Pros: Smooth, clean, durable
• Cons: Expensive, needs periodic sealing

**Concrete:**
• Cost: $8-$15/SF = $3,200-$6,000
• Pros: Permanent, low maintenance
• Cons: Very expensive, can crack

**Pavers:**
• Cost: $10-$25/SF = $4,000-$10,000
• Pros: Beautiful, repairable
• Cons: Most expensive

**Gravel is best value for rural coastal site**

**═══ COASTAL CONSIDERATIONS ═══** [13]

• Heavy rain: Need good drainage
• Slope: May need culverts
• Salt air: Doesn't affect gravel
• Mud season: Quality base prevents potholes

**Add if needed:**
• French drain along edge: $1,000-$2,000
• Culvert crossing: $500-$1,000

**═══ DIY POTENTIAL ═══**

**DIY-able portions:**
• Ordering materials
• Spreading top gravel (if you have equipment)

**Hire out:**
• Grading and base prep (needs equipment)
• Compaction (needs roller)

**DIY savings: $800-$1,200**

**RANGE EXPLANATION:**
• Low ($1.5K): Basic gravel, minimal prep
• Mid ($2K): Good base with heavy gravel ✓
• High ($3.5K): Premium surface, extra drainage`
  },
  landscape: {
    estimate: '$0',
    low: '$0',
    high: '$2,000',
    notes: `**CALCULATION:** Owner DIY landscaping - no contractor budget needed.

**═══ LANDSCAPING APPROACH ═══**

**Owner will do ALL landscaping:**
✓ No professional landscaper
✓ No lawn (native/natural approach)
✓ Work done over time after move-in

**Coastal Oregon philosophy:**
• Native plants only (low maintenance)
• Wind/salt tolerant species
• Natural aesthetic
• Erosion control where needed

**═══ POTENTIAL MATERIAL COSTS (Owner Expense) ═══**

**EROSION CONTROL:** (if required by permit)

| Item | Cost | Notes |
|------|------|-------|
| Erosion fabric/blanket | $200-$400 | For any exposed slopes |
| Native seeding | $100-$200 | Erosion prevention |
| **Total** | **$300-$600** | If needed |

**PLANTS:** (purchased over time) [39]

| Plant Type | Qty | Cost Each | Total |
|------------|-----|-----------|-------|
| Native shrubs | 10-15 | $25-$50 | $250-$750 |
| Ground covers | 15-25 | $10-$20 | $150-$500 |
| Ornamental grasses | 5-10 | $15-$30 | $75-$300 |
| **Total** | | | **$475-$1,550** |

**Recommended coastal plants:**
• Shore pine (native conifer)
• Salal (evergreen groundcover)
• Oregon grape
• Red flowering currant
• Sword fern
• Beach strawberry

**MULCH & MATERIALS:**

| Item | Cost |
|------|------|
| Bark mulch (5 yards) | $200-$300 |
| Landscape fabric | $50-$100 |
| **Total** | **$250-$400** |

**NO LAWN - ZERO COST**

**═══ WHY $0 BUDGET ═══**

✓ **100% DIY:** Owners doing all work
✓ **No lawn:** Eliminates sod, irrigation, maintenance
✓ **Phased:** Plants purchased gradually after move-in
✓ **Native:** Lower cost than ornamental landscaping
✓ **Minimal:** Natural aesthetic requires less intervention

**Owner material costs over time:** ~$1,000-$2,500
(Not included in construction budget)

**═══ EROSION CONTROL NOTE ═══**

If permit requires erosion control before CO:
• Could add $500-$1,000 to budget
• Check with county before assuming $0

**═══ COASTAL CONSIDERATIONS ═══** [13]

• Salt spray: Use tolerant species
• Wind: Windbreak planting helps
• Deer/elk: Very common - consider deer resistant plants
• Fire concerns: Create defensible space

**RANGE EXPLANATION:**
• Low ($0): Full owner DIY, no permit requirements ✓
• Mid ($1K): Some erosion control/materials needed
• High ($2K): Required erosion measures + basic materials`
  },
  deck: {
    estimate: '$14,000',
    low: '$7,000',
    high: '$22,000',
    notes: `**CALCULATION:** Single deck on back of house.

**═══ DECK DESIGN ═══**

**Size:** 9' × 30' = **270 SF**
• Single deck on back of house (ocean side)
• Full width of living area

**Height above grade:**
• Varies: 18" to 5+ feet depending on slope
• Budget assumes 2-3 feet average

**Features:**
• Single level (no stairs except entry)
• Simple railing (if >30" above grade)
• No roof/pergola (in this estimate)

**═══ MATERIAL OPTIONS ═══** [40]

| Material | Cost/SF | 270 SF | Lifespan | Maintenance |
|----------|---------|--------|----------|-------------|
| Pressure treated | $20-$30 | $5.4K-$8.1K | 15-20 yrs | Annual seal |
| Cedar | $30-$45 | $8.1K-$12.2K | 20-25 yrs | Annual seal |
| Composite | $40-$60 | $10.8K-$16.2K | 25-30 yrs | Low |
| PVC/cellular | $50-$70 | $13.5K-$18.9K | 30+ yrs | Very low |
| Ipe (hardwood) | $60-$85 | $16.2K-$23K | 40+ yrs | Annual oil |

**═══ RECOMMENDED: COMPOSITE ═══** [40]

**Why composite for coastal:**
• Salt air: Won't corrode or rot
• Moisture: Handles humidity, rain
• No splinters: Barefoot-friendly
• Low maintenance: No annual sealing
• Color options: Fade resistant

**Popular composite brands:**
• Trex: $8-$12/SF material
• TimberTech: $9-$14/SF material
• Fiberon: $7-$10/SF material

**═══ COMPOSITE DECK BREAKDOWN ═══**

**Decking Material:**
• Boards: 270 SF + 10% waste = 297 SF
• Cost: 297 SF × $10 = **$2,970**

**Framing (pressure treated OK):**
• Joists, beams, posts
• Cost: $8-$12/SF
• 270 SF × $10 = **$2,700**

**Hardware:**
• Hidden fasteners: $450
• Post bases, joist hangers: $200
• Ledger bolts: $100
• **Hardware total: $750**

**Railing:**
• ~48 LF (30' back + two 9' sides) at $50-$100/LF = **$2,400-$4,800**
• (Code required if deck >30" above grade)

**═══ INSTALLATION LABOR ═══** [8][40]

**Labor Rate:** $15-$25/SF
**Calculation:** 270 SF × $18 = **$4,860**

**Labor includes:**
• Layout and permits
• Post holes/footings
• Framing
• Decking installation
• Railing installation

**═══ TOTAL DECK CALCULATION ═══**

| Component | Cost |
|-----------|------|
| Composite decking | $2,970 |
| Framing lumber | $2,700 |
| Hardware | $700 |
| Railing (48 LF) | $3,200 |
| Labor | $4,860 |
| Permit | $200 |
| **TOTAL** | **$14,630** |

**BUDGET: $14,000** (with value engineering)

**═══ DIY POTENTIAL ═══**

**Deck building is intermediate DIY:**
• Requires: Power tools, level precision
• Framing: Moderately difficult
• Decking: Straightforward
• Railing: Must meet code

**Potential DIY approach:**
• Hire framing: $3,000
• DIY decking/railing: Save $3,000

**═══ COASTAL BUILDING TIPS ═══** [13]

**For deck longevity:**
• Use stainless steel hardware (salt corrosion)
• Gap boards slightly more (expansion)
• Ensure drainage under deck
• Consider wind loads for railings
• Use composite over cedar (less maintenance)

**═══ VALUE ADD ═══**

**Deck typically:**
• Costs: $15,000
• Adds value: $10,000-$15,000 (70-100% ROI)
• Adds enjoyment: Priceless (coastal views!)

**RANGE EXPLANATION:**
• Low ($7K): PT deck, DIY labor
• Mid ($14K): 270 SF composite ✓
• High ($22K): Premium materials, complex design`
  },
  accessSave: {
    estimate: '-$5,000',
    low: '-$2,000',
    high: '-$10,000',
    notes: `**CALCULATION:** Cost savings from good site access.

**═══ WHAT IS "ACCESS SAVE"? ═══**

This is a CREDIT (reduction) to the budget based on:
• Easy site access vs. difficult
• Good road access to lot
• Equipment can reach all areas
• Materials can be delivered efficiently

**Difficult coastal sites can add $20,000-$50,000 in costs!**

**═══ FACTORS THAT ADD COST ═══**

**Difficult Access Examples:**

| Factor | Added Cost | Notes |
|--------|------------|-------|
| Narrow road | $2,000-$5,000 | Small trucks only |
| Long carry distance | $5,000-$15,000 | Manual material moves |
| No staging area | $3,000-$8,000 | Multiple deliveries |
| Steep terrain | $5,000-$20,000 | Equipment limitations |
| Beach access only | $10,000-$30,000 | Extreme difficulty |
| Helicopter delivery | $20,000-$50,000 | Remote sites |

**═══ GOOD ACCESS BENEFITS ═══**

**If your site has:**
✓ Standard road access (full-size trucks)
✓ Room for material staging
✓ Equipment can reach all areas
✓ Reasonable grade changes
✓ Near paved road

**Then you SAVE compared to "average" coastal site**

**═══ COST COMPARISON ═══**

**Average coastal site challenges:**
• Narrow roads: Common
• Limited staging: Common
• Some elevation change: Common

**These add maybe $10,000-$15,000 to "baseline" costs**

**Good access removes those costs:**
• No premium for small equipment
• No extra delivery charges
• No manual material moving
• Efficient crew productivity

**SAVINGS: $5,000-$10,000 vs. "typical" coastal site**

**═══ HOW THIS APPEARS IN BUDGET ═══**

**Option 1:** Built into lower line item estimates
**Option 2:** Shown as credit (this approach)

**Why show as credit:**
• Makes good access visible as benefit
• Acknowledges site selection value
• Helps compare to other sites

**═══ WHAT COULD CHANGE THIS ═══**

**If site conditions are actually difficult:**
• Convert this to $0 (remove credit)
• Or convert to positive cost

**Verify during site visits:**
• Watch where materials get delivered
• Note any access challenges
• Adjust estimate accordingly

**═══ ACCESS CHECKLIST ═══**

| Factor | Good | Marginal | Poor |
|--------|------|----------|------|
| Road width | 20'+ | 12-20' | <12' |
| Road surface | Paved | Good gravel | Poor/narrow |
| Truck access | Full size | Medium | Small only |
| Staging area | Ample | Limited | None |
| Equipment reach | Full site | Partial | Very limited |
| Grade | <10% | 10-20% | >20% |

**Score mostly "Good" = credit applies**

**RANGE EXPLANATION:**
• Low credit (-$2K): Mostly good, some limitations
• Mid credit (-$5K): Good access throughout ✓
• High credit (-$10K): Excellent access, flat, easy site`
  },
  
  // ═══════════════════════════════════════════════════════════════
  // ADDITIONAL COSTS - Often Overlooked
  // ═══════════════════════════════════════════════════════════════
  
  loanInterest: {
    estimate: '$18,000',
    low: '$12,000',
    high: '$25,000',
    notes: `**CALCULATION:** Construction loan interest during build period.

**═══ CONSTRUCTION LOAN BASICS ═══** [20][21]

**How Construction Loans Work:**
• Draw-based funding (pay as you build)
• Interest-only during construction
• Converts to permanent mortgage at completion
• Higher rates than standard mortgages

**═══ INTEREST CALCULATION ═══**

**Assumptions:**
• Total loan amount: $350,000
• Construction period: 10 months
• Interest rate: 8-10% (2024 rates) [20]
• Average draw: 50% of total (funds drawn gradually)

**Formula:**
Interest = Principal × Rate × Time × Average Draw %

**Calculation:**
• $350,000 × 9% × (10/12) × 50% = **$13,125**

**But draws happen gradually:**
• Month 1-2: 15% drawn
• Month 3-4: 40% drawn
• Month 5-7: 70% drawn
• Month 8-10: 90% drawn

**More accurate estimate: $15,000-$20,000**

**═══ CONSTRUCTION LOAN COSTS ═══** [20][21]

| Fee | Amount | Notes |
|-----|--------|-------|
| Origination fee | $2,000-$5,000 | 0.5-1.5% of loan |
| Interest during build | $15,000-$20,000 | See calculation |
| Inspection fees | $500-$1,000 | Bank inspects draws |
| **Total Financing Cost** | **$17,500-$26,000** | |

**═══ DRAW SCHEDULE EXAMPLE ═══**

**Month 1:** Foundation - Draw $50,000 → 1.5 months interest
**Month 2-3:** Framing - Draw $80,000 → 2 months interest
**Month 4-5:** Rough MEP - Draw $60,000 → 1.5 months interest
**Month 6-7:** Finishes - Draw $100,000 → 1 month interest
**Month 8-10:** Final - Draw $60,000 → 0.5 months interest

**Total interest: ~$18,000**

**═══ WAYS TO REDUCE INTEREST ═══**

**Speed up the build:**
• Every month saved = ~$2,000 less interest
• Efficient scheduling critical

**Pay cash for early phases:**
• Delay draws if possible
• Reduces average balance

**Shop for best rate:**
• Construction loan rates vary
• Local banks may be better than nationals
• Credit union options

**═══ BUDGET INCLUDING INTEREST ═══**

Many budgets EXCLUDE construction interest!
This is a mistake - it's a real cash cost.

**Budget: $18,000**

**RANGE EXPLANATION:**
• Low ($12K): Fast build, lower rate, cash for early phases
• Mid ($18K): 10-month build, typical draws ✓
• High ($25K): Extended build, higher rate, full financing`
  },
  tempUtilities: {
    estimate: '$3,000',
    low: '$2,000',
    high: '$4,500',
    notes: `**CALCULATION:** Temporary utilities during construction.

**═══ TEMPORARY POWER ═══**

**Options:**

| Option | Setup | Monthly | 10-Month Total |
|--------|-------|---------|----------------|
| Temp pole | $1,000-$2,000 | $100-$150 | $2,000-$3,500 |
| Generator | $0 (rent) | $300-$500 | $3,000-$5,000 |
| Use permanent | $0 | $100-$150 | $1,000-$1,500 |

**Temp Pole Breakdown:**
• Utility connection fee: $500-$1,000
• Pole/panel install: $500-$1,000
• Monthly power: $100-$150

**Best approach:** Temp pole early, then switch to permanent
**Budget: $1,500** for temp power

**═══ PORTABLE TOILET ═══**

**Required for:**
• Worker convenience
• Code compliance
• Site cleanliness

**Cost:**
• Monthly rental: $150-$200
• Service (weekly): Included
• 10 months: $1,500-$2,000

**Budget: $1,500**

**Alternative:**
• GC may include in overhead
• Or workers use nearby facilities

**═══ TEMPORARY WATER ═══**

**Options:**
• Water truck deliveries: $200-$300/delivery
• Temporary well point: $500-$1,000
• Use neighbor's: $50-$100/month (with permission)
• Install permanent early: Best option

**Budget: $300-$500**

**═══ TEMPORARY FENCING/SECURITY ═══**

**May need:**
• Construction fencing: $500-$1,000
• Tool storage container: $150/month
• Not typically required for rural sites

**Budget: $500** (contingency)

**═══ TOTAL TEMP UTILITIES ═══**

| Item | Cost |
|------|------|
| Temp power | $1,500 |
| Portable toilet | $1,500 |
| Water | $400 |
| Fencing/security | $500 |
| **TOTAL** | **$3,900** |

**BUDGET: $3,000** (realistic coverage for 10-month build)

**═══ NOTE ON PERMANENT UTILITIES ═══**

The utility connection in the main budget covers:
• Permanent power connection
• Power to house
• This section covers TEMP during build

**RANGE EXPLANATION:**
• Low ($1.5K): Short build, GC covers some
• Mid ($2.5K): Standard temp setup ✓
• High ($4K): Long build, full services`
  },
  finalCleanup: {
    estimate: '$2,000',
    low: '$1,200',
    high: '$3,500',
    notes: `**CALCULATION:** Post-construction cleaning and debris removal.

**═══ CONSTRUCTION CLEANUP PHASES ═══**

**Phase 1: Rough Clean** (ongoing)
• Remove daily debris
• Usually done by trades
• Part of standard work
• Cost: Included in trade costs

**Phase 2: Final Clean** (before CO)
• Remove all construction debris
• Clean windows
• Vacuum all surfaces
• Wipe cabinets, fixtures
• Professional cleaning

**Phase 3: Debris Haul-off**
• Final dumpster
• Scrap materials
• Packaging waste

**═══ FINAL CLEANING BREAKDOWN ═══**

**Professional Cleaning:**
• Rate: $0.50-$1.00/SF [8]
• 1,600 SF × $0.75 = **$1,200**

**Includes:**
• Window cleaning (interior + exterior)
• Cabinet interior wipe-down
• Fixture polishing
• Floor cleaning
• Surface dusting
• Appliance cleaning
• HVAC vent cleaning

**═══ DEBRIS REMOVAL ═══**

**Dumpster Service:**
• Final 20-yard dumpster: $500-$800
• Haul-off: Included
• Disposal fees: Included

**Site Cleanup:**
• Rake/clean exterior: $200-$400
• Remove stakes, strings, etc.

**Budget: $600**

**═══ TOTAL CLEANUP ═══**

| Item | Cost |
|------|------|
| Professional clean | $1,200 |
| Final dumpster | $600 |
| Site cleanup | $200 |
| **TOTAL** | **$2,000** |

**BUDGET: $2,000** (professional clean + debris)

**═══ DIY OPTION ═══**

**Can DIY:**
• Window cleaning
• Floor cleaning
• Cabinet wipe-down

**Should hire:**
• Post-construction specialists
• They know what inspectors look for
• Thorough and efficient

**DIY savings: $500-$800**

**═══ TIMING ═══**

• Schedule 1-2 days before final inspection
• Allow time for touch-ups after cleaning
• Re-clean before move-in if delays

**RANGE EXPLANATION:**
• Low ($800): DIY cleaning, minimal debris
• Mid ($1.5K): Professional clean ✓
• High ($3K): Large site, extensive debris`
  },
  extLighting: {
    estimate: '$3,000',
    low: '$1,500',
    high: '$6,000',
    notes: `**CALCULATION:** Exterior lighting fixtures and installation.

**═══ EXTERIOR LIGHTING SCOPE ═══**

**Locations:**
• Entry/porch: 2 fixtures
• Garage/parking: 1-2 fixtures
• Pathway: 4-6 fixtures
• Deck: 2-4 fixtures
• Security/motion: 2 fixtures

**Total fixtures: ~10-15**

**═══ FIXTURE COSTS ═══**

| Type | Qty | Cost Each | Total |
|------|-----|-----------|-------|
| Entry sconces | 2 | $150-$300 | $300-$600 |
| Motion security | 2 | $75-$150 | $150-$300 |
| Pathway lights | 6 | $50-$100 | $300-$600 |
| Deck lights | 4 | $40-$80 | $160-$320 |
| Spot/accent | 2 | $75-$150 | $150-$300 |
| **Total Fixtures** | **16** | | **$1,060-$2,120** |

**Budget fixtures: $1,500**

**═══ INSTALLATION ═══**

**Wiring (if not in electrical budget):**
• Exterior circuits may be in main electrical
• Additional exterior runs: $500-$1,000

**Fixture installation:**
• Per fixture: $50-$100
• 16 fixtures × $75 = $1,200

**Low-voltage landscape:**
• Transformer: $100-$200
• Wire/connectors: $100-$200
• DIY-friendly

**═══ TOTAL CALCULATION ═══**

| Item | Cost |
|------|------|
| Fixtures | $1,500 |
| Installation | $1,200 |
| Low-voltage supplies | $300 |
| **TOTAL** | **$3,000** |

**═══ LIGHTING TYPES ═══**

**Line voltage (120V):**
• Entry lights
• Security lights
• Porch/deck fixtures
• Requires electrician

**Low voltage (12V):**
• Pathway lights
• Accent/landscape
• DIY-friendly
• Safer, easier

**Solar:**
• No wiring needed
• Less reliable
• Good for pathways as supplement

**═══ COASTAL CONSIDERATIONS ═══** [13]

• Salt air: Choose marine-grade or powder-coated
• Wind: Secure mounting important
• Moisture: All fixtures must be rated for wet locations
• Dark sky: Consider downlighting to reduce light pollution

**═══ DIY POTENTIAL ═══**

**DIY-able:**
• Low-voltage landscape lights (easy)
• Simple fixture swaps
• Solar lights

**Hire electrician:**
• New circuits
• Line voltage fixtures
• Junction boxes

**RANGE EXPLANATION:**
• Low ($1.5K): Basic fixtures, some DIY
• Mid ($3K): Quality fixtures, professional ✓
• High ($6K): Designer fixtures, extensive landscape lighting`
  },
  miscCode: {
    estimate: '$1,500',
    low: '$800',
    high: '$2,500',
    notes: `**CALCULATION:** Code-required items often overlooked.

**═══ SAFETY DEVICES ═══**

**Smoke Detectors:** (Required by code)
• Locations required: Every bedroom + hallway + each level
• Estimate: 5-7 detectors
• Cost: $30-$50 each (interconnected)
• **Total: $150-$350**

**CO Detectors:** (Required in Oregon)
• Locations: Near sleeping areas, each level
• Estimate: 3-4 detectors
• Cost: $35-$60 each
• **Total: $105-$240**

**Combo units:** 
• Smoke + CO: $50-$80 each
• May be more economical

**Budget detectors: $300-$500**

**═══ VENTILATION ═══**

**Bathroom Exhaust Fans:** (Required)
• Locations: Each bathroom (3)
• CFM required: 50-100 CFM per bath
• Cost: $75-$200 each (with housing)
• Installation: $100-$150 each
• **Total: $525-$1,050**

**Note:** May be counted in electrical or plumbing budget already. Verify to avoid double-counting.

**Kitchen Range Hood:**
• Counted in appliances
• Verify venting is included

**Budget ventilation: $600-$800**

**═══ OTHER CODE REQUIREMENTS ═══**

**GFCI Outlets:** (Required near water)
• Kitchen: 2-4 outlets
• Bathrooms: 3-4 outlets
• Exterior: 2-3 outlets
• Garage: 1-2 outlets
• Usually included in electrical estimate

**AFCI Breakers:** (Required for bedrooms)
• Usually included in electrical estimate

**Tempered Glass:** (Required in certain locations)
• Near doors, tubs, low windows
• Usually included in window quote

**Handrails/Guards:**
• Stairs, decks, elevated areas
• Usually in framing/deck estimates

**═══ OFTEN MISSED ITEMS ═══**

| Item | Cost | Notes |
|------|------|-------|
| House numbers | $20-$50 | Required for E-911 |
| Address post | $50-$150 | If not on house |
| Fire extinguisher | $50-$100 | Good practice |
| Dryer vent | $50-$100 | If not in HVAC |
| **Total** | **$170-$400** | |

**═══ ACCESSIBILITY CONSIDERATIONS ═══**

**Oregon requires (new construction):**
• One no-step entry
• 32" min door widths
• Reinforced bathroom walls (for grab bars)
• These should be in base plans

**═══ TOTAL MISC CODE ═══**

| Category | Cost |
|----------|------|
| Detectors | $400 |
| Exhaust fans | $700 |
| Misc items | $250 |
| Contingency | $150 |
| **TOTAL** | **$1,500** |

**═══ VERIFY NOT DOUBLE-COUNTED ═══**

Check main estimates for:
• Smoke/CO detectors in electrical
• Exhaust fans in electrical or HVAC
• Range hood in appliances

Adjust this line item accordingly.

**RANGE EXPLANATION:**
• Low ($800): Basic requirements, some in other budgets
• Mid ($1.5K): All code items, quality fixtures ✓
• High ($2.5K): Premium detectors, upgrades`
  }
};

// Summary stats with comprehensive source list
export const costSummary = {
  oregonBasicPerSf: { low: 250, high: 350 },
  oregonCustomPerSf: { low: 350, high: 550 },
  coastalPremium: '10-25% above inland Oregon costs',
  totalCitations: 40,
  sources: [
    '[1] HomeGuide - Cost to Build a House (2024)',
    '[2] HomeGuide - Cost to Frame a House (2024)',
    '[3] Fixr.com - Foundation Cost Calculator',
    '[4-6] HomeAdvisor - Trade Costs',
    '[7] Oregon Building Contractors Association',
    '[8] BLS - Oregon Construction Wages',
    '[9-12] RSMeans Construction Data',
    '[13] Oregon Coast Building Guide',
    '[14-19] Tillamook County Permits & Fees',
    '[20-21] Construction Loan Guides',
    '[22-40] Materials & Specialty Items',
    'See /sources.html for full citation list with links'  ]
};
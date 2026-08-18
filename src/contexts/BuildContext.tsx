import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { baseCosts, gradeMultipliers } from '../constants';

export interface BuildInputs {
  sqft: number;
  roofSqft: number;
  wallLf: number;
  wallHt: number;
  finishGrade: string;
  locFactor: number;
  // Site Work & Foundation
  sitePrep: number;
  piles: number;         // 6 deep piles @ 56-60 ft depth (includes mobilization)
  septic: number;
  utility: number;
  // Framing
  framingLabor: number;
  framingMaterials: number;
  // Exterior
  roofingLabor: number;
  roofingMaterials: number;
  siding: number;
  windows: number;
  extDoors: number;
  gutters: number;
  // MEP
  electric: number;
  plumbing: number;
  hvac: number;
  radiantHeat: number;
  // Insulation & Drywall
  insulation: number;
  drywall: number;
  paint: number;
  // Interior
  flooring: number;
  ceiling: number;
  intDoors: number;
  trim: number;
  // Kitchen & Bath
  cabinets: number;
  counters: number;
  appliances: number;
  bathFixtures: number;
  // Soft Costs
  permits: number;
  engineering: number;
  architect: number;
  insurance: number;
  gcFee: number;
  ownerBuilder: boolean;
  loanInterest: number;
  // Site Finishing
  driveway: number;
  landscape: number;
  deck: number;
  extLighting: number;
  accessSave: number;
  // Additional/Often Overlooked
  tempUtilities: number;
  finalCleanup: number;
  miscCode: number;
  // DIY Options
  diyPaint: boolean;
  diyPaintSave: number;
  diyCeiling: boolean;
  diyCeilingSave: number;
  diyDoors: boolean;
  diyDoorsSave: number;
  diyTrim: boolean;
  diyTrimSave: number;
  diyCabinets: boolean;
  diyCabinetsSave: number;
  diyLandscape: boolean;
  diyLandscapeSave: number;
  diyDeck: boolean;
  diyDeckSave: number;
}

export interface BuildResults {
  // Calculated costs
  framingCost: number;
  roofCost: number;
  flooringCost: number;
  ceilingCost: number;
  // Square footage (for valuation)
  sqft: number;
  // Category totals
  catSite: number;
  catFrame: number;
  catExt: number;
  catMep: number;
  catInsul: number;
  catInt: number;
  catKb: number;
  catSoft: number;
  catFinish: number;
  catSavings: number;
  // Phase totals
  phase1Total: number;  // Dry-in: site, frame, exterior envelope
  phase2Total: number;  // Interior finishes
  // DIY savings
  totalDiySavings: number;
  gcFeeCalc: number;
  gcSavingsAmt: number;
  // Totals
  hardCosts: number;
  baseTotal: number;
  locAdj: number;
  grandTotal: number;
  costPerSf: number;
  // Phase 0: Pre-Build costs (paid out of pocket before construction)
  phase0Total: number;   // permits + engineering + architect (excludes lot)
  preLoanCosts: number;  // Alias for backwards compatibility
  financedTotal: number;
}

interface BuildContextType {
  inputs: BuildInputs;
  results: BuildResults;
  setInput: <K extends keyof BuildInputs>(key: K, value: BuildInputs[K]) => void;
  updateFinishGrade: (grade: string) => void;
}

const defaultInputs: BuildInputs = {
  sqft: 1900,
  roofSqft: 950,
  wallLf: 126,
  wallHt: 20,
  finishGrade: '1.15',
  locFactor: 1,
  // Site Work & Pier and Beam Foundation
  sitePrep: 2500,       // Minimal grading/access - site already prepped
  piles: 57000,         // RamJack estimate for deep pile foundation system
  septic: 28000,        // Bid received
  utility: 22000,    // Bid received
  // Framing
  framingLabor: 9,       // Verified framing labor bid
  framingMaterials: 7,   // Estimated lumber + sheathing + housewrap + hardware
  // Exterior
  roofingLabor: 4,       // Installed standing-seam labor rate ($/SF)
  roofingMaterials: 8,   // Panels, underlayment, flashing, trim ($/SF)
  siding: 15000,     // Fiber cement, updated wall area based on 36' x 27' footprint
  windows: 21000,    // 16 windows per updated actual schedule
  extDoors: 16000,   // 2 large sliders + 1 front entry door
  gutters: 500,
  // MEP
  electric: 20000,   // Calc shows $18K, +$2K buffer for coastal
  plumbing: 20000,   // 2 master baths with single sinks each, minimal aesthetic
  hvac: 4000,        // Wood stove only (mini-split backup separate)
  radiantHeat: 26000, // Calc shows $20.7K + coastal premium = $24K, +$2K buffer
  // Insulation & Drywall
  insulation: 10000,
  drywall: 14000,    // NO ceiling drywall (T&G wood) = 30% less scope
  paint: 4500,
  // Interior
  flooring: 9,       // $/SF - polished concrete + tile
  ceiling: 11,       // $/SF - T&G wood ceiling
  intDoors: 5000,
  trim: 4500,        // CVG fir throughout, stained + clear finish
  // Kitchen & Bath
  cabinets: 10000,  // Kitchen base cabinets + one tall pantry only (no uppers)
  counters: 8500,    // 66 SF quartz @ $125/SF installed (smaller single vanities)
  appliances: 10000,
  bathFixtures: 12000, // Two master baths with single sinks, minimal aesthetic
  // Soft Costs
  permits: 8000,     // Tillamook County full permit package + excise tax
  engineering: 8200,    // $6,700 paid + $1,500 remaining structural engineering
  architect: 14000,
  insurance: 4000,
  gcFee: 15,
  ownerBuilder: true,   // No GC - owner-managed build
  loanInterest: 0,      // Cash build - no construction loan
  // Site Finishing
  driveway: 2000,    // Small parking pad only (~400 SF), no turnaround
  landscape: 0,     // Owner DIY - no lawn, native plants over time
  deck: 14000,      // 9' x 30' (270 SF) single deck on back
  extLighting: 3000,
  accessSave: 5000,
  // Additional/Often Overlooked
  tempUtilities: 3000,  // 10-month build: temp power + portable toilet
  finalCleanup: 2000,   // Professional post-construction clean + debris
  miscCode: 1500,
  // DIY Options
  diyPaint: false,
  diyPaintSave: 4000,
  diyCeiling: false,
  diyCeilingSave: 6,   // $/SF DIY savings
  diyDoors: false,
  diyDoorsSave: 1000,
  diyTrim: false,
  diyTrimSave: 2500,
  diyCabinets: false,
  diyCabinetsSave: 4000,
  diyLandscape: true,
  diyLandscapeSave: 3000,
  diyDeck: false,
  diyDeckSave: 5000,
};

const defaultResults: BuildResults = {
  framingCost: 0,
  roofCost: 0,
  flooringCost: 0,
  ceilingCost: 0,
  sqft: 1900,
  catSite: 0,
  catFrame: 0,
  catExt: 0,
  catMep: 0,
  catInsul: 0,
  catInt: 0,
  catKb: 0,
  catSoft: 0,
  catFinish: 0,
  catSavings: 0,
  phase1Total: 0,
  phase2Total: 0,
  totalDiySavings: 0,
  gcFeeCalc: 0,
  gcSavingsAmt: 0,
  hardCosts: 0,
  baseTotal: 0,
  locAdj: 0,
  grandTotal: 0,
  costPerSf: 0,
  phase0Total: 0,
  preLoanCosts: 0,
  financedTotal: 0,
};

const BuildContext = createContext<BuildContextType | undefined>(undefined);

export function BuildProvider({ children }: { children: ReactNode }) {
  const [inputs, setInputs] = useState<BuildInputs>(defaultInputs);
  const [results, setResults] = useState<BuildResults>(defaultResults);

  const setInput = useCallback(<K extends keyof BuildInputs>(key: K, value: BuildInputs[K]) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  const updateFinishGrade = useCallback((grade: string) => {
    const mult = gradeMultipliers[grade] || 1.0;
    setInputs(prev => ({
      ...prev,
      finishGrade: grade,
      windows: Math.round(baseCosts.windows * mult),
      extDoors: Math.round(baseCosts.extDoors * mult),
      flooring: Math.round(baseCosts.flooring * mult),
      ceiling: Math.round(baseCosts.ceiling * mult),
      intDoors: Math.round(baseCosts.intDoors * mult),
      trim: Math.round(baseCosts.trim * mult),
      cabinets: Math.round(baseCosts.cabinets * mult),
      counters: Math.round(baseCosts.counters * mult),
      appliances: Math.round(baseCosts.appliances * mult),
      bathFixtures: Math.round(baseCosts.bathFixtures * mult),
    }));
  }, []);

  // Recalculate whenever inputs change
  useEffect(() => {
    const {
      sqft, roofSqft, locFactor,
      sitePrep, piles, septic, utility,
      framingLabor, framingMaterials, roofingLabor, roofingMaterials, siding, windows, extDoors, gutters,
      electric, plumbing, hvac, radiantHeat, insulation, drywall, paint,
      flooring, ceiling, intDoors, trim,
      cabinets, counters, appliances, bathFixtures,
      permits, engineering, architect, insurance, gcFee, ownerBuilder, loanInterest,
      driveway, landscape, deck, extLighting, accessSave,
      tempUtilities, finalCleanup, miscCode,
      diyPaint, diyPaintSave,
      diyCeiling, diyCeilingSave, diyDoors, diyDoorsSave,
      diyTrim, diyTrimSave, diyCabinets, diyCabinetsSave,
      diyLandscape, diyLandscapeSave, diyDeck, diyDeckSave
    } = inputs;

    // DIY savings calculations
    const diyCeilingSaveAmt = diyCeiling ? diyCeilingSave * sqft : 0;
    const diyDoorsSaveAmt = diyDoors ? diyDoorsSave : 0;
    const diyTrimSaveAmt = diyTrim ? diyTrimSave : 0;
    const diyCabinetsSaveAmt = diyCabinets ? diyCabinetsSave : 0;
    const diyPaintSaveAmt = diyPaint ? diyPaintSave : 0;
    const diyLandscapeSaveAmt = diyLandscape ? diyLandscapeSave : 0;
    const diyDeckSaveAmt = diyDeck ? diyDeckSave : 0;
    const totalDiySavings = diyCeilingSaveAmt + diyDoorsSaveAmt + 
      diyTrimSaveAmt + diyCabinetsSaveAmt + diyPaintSaveAmt + diyLandscapeSaveAmt + diyDeckSaveAmt;

    // Per-sf calculations
    const framingCost = (framingLabor + framingMaterials) * sqft;
    const roofCost = (roofingLabor + roofingMaterials) * roofSqft;
    const flooringCost = flooring * sqft;
    const ceilingCost = ceiling * sqft;

    // Category totals
    const catSite = sitePrep + piles + septic + utility;
    const catFrame = framingCost;
    const catExt = roofCost + siding + windows + extDoors + gutters;
    const catMep = electric + plumbing + hvac + radiantHeat;
    const catInsul = insulation + drywall + paint;
    const catInt = flooringCost + ceilingCost + intDoors + trim;
    const catKb = cabinets + counters + appliances + bathFixtures;
    const catSavings = accessSave + totalDiySavings;
    const catFinish = driveway + landscape + deck + extLighting + tempUtilities + finalCleanup + miscCode - diyLandscapeSaveAmt - diyDeckSaveAmt;

    // Phase totals (hard costs only, before GC fee and soft costs)
    // Phase 1: Dry-In = Site + Frame + Exterior envelope
    const phase1Total = catSite + catFrame + catExt;
    // Phase 2: Interior = MEP + Insulation/Drywall + Interior + Kitchen/Bath + Site Finishing
    const phase2Total = catMep + catInsul + catInt + catKb + catFinish - (catSavings - diyLandscapeSaveAmt - diyDeckSaveAmt);

    const hardCosts = catSite + catFrame + catExt + catMep + catInsul + catInt + catKb - (catSavings - diyLandscapeSaveAmt - diyDeckSaveAmt);
    const gcFeeCalc = ownerBuilder ? 0 : hardCosts * (gcFee / 100);
    const gcSavingsAmt = ownerBuilder ? hardCosts * (gcFee / 100) : 0;
    
    // Phase 0: Pre-Build costs (paid before construction starts)
    const phase0Total = permits + engineering + architect;
    const preLoanCosts = phase0Total;  // Backwards compatibility
    const catSoft = insurance + gcFeeCalc + loanInterest;  // Includes construction loan interest

    const baseTotal = hardCosts + catSoft + catFinish;
    const locAdj = baseTotal * (locFactor - 1);
    const grandTotal = baseTotal + locAdj + preLoanCosts;  // Grand total includes everything
    const financedTotal = baseTotal + locAdj;  // Financed amount excludes pre-loan costs
    const costPerSf = grandTotal / sqft;

    setResults({
      framingCost,
      roofCost,
      flooringCost,
      ceilingCost,
      sqft,
      catSite,
      catFrame,
      catExt,
      catMep,
      catInsul,
      catInt,
      catKb,
      catSoft,
      catFinish,
      catSavings,
      phase1Total,
      phase2Total,
      totalDiySavings,
      gcFeeCalc,
      gcSavingsAmt,
      hardCosts,
      baseTotal,
      locAdj,
      grandTotal,
      costPerSf,
      phase0Total,
      preLoanCosts,
      financedTotal,
    });
  }, [inputs]);

  return (
    <BuildContext.Provider value={{ inputs, results, setInput, updateFinishGrade }}>
      {children}
    </BuildContext.Provider>
  );
}

export function useBuild() {
  const context = useContext(BuildContext);
  if (context === undefined) {
    throw new Error('useBuild must be used within a BuildProvider');
  }
  return context;
}

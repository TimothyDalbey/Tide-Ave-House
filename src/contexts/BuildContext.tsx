import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { baseCosts, gradeMultipliers } from '../constants';

export interface BuildInputs {
  sqft: number;
  roofSqft: number;
  wallLf: number;
  wallHt: number;
  finishGrade: string;
  locFactor: number;
  // Site Work
  sitePrep: number;
  tree: number;
  excavation: number;
  retaining: number;
  neighborShare: number;
  foundation: number;
  septic: number;
  utility: number;
  // Framing
  framing: number;
  sheath: number;
  // Exterior
  roofing: number;
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
  // Pre-loan costs (paid out of pocket before financing)
  preLoanCosts: number;
  financedTotal: number;
}

interface BuildContextType {
  inputs: BuildInputs;
  results: BuildResults;
  setInput: <K extends keyof BuildInputs>(key: K, value: BuildInputs[K]) => void;
  updateFinishGrade: (grade: string) => void;
}

const defaultInputs: BuildInputs = {
  sqft: 1600,
  roofSqft: 1600,
  wallLf: 180,
  wallHt: 10,
  finishGrade: '1.15',
  locFactor: 1,
  // Site Work - reduced due to pre-graded site and helical pile foundation
  sitePrep: 2500,    // Pre-graded site = minimal prep needed
  tree: 3500,        // Single large tree, coastal arborist rates
  excavation: 5000,  // 50% reduced - helical piles eliminate west side excavation
  retaining: 18000,
  neighborShare: 0,
  foundation: 40000, // 9 helical piles ($22.5K) + crawl space east ($10K) + caps ($7.5K)
  septic: 28000,     // Bid received
  utility: 22000,    // Bid received
  // Framing
  framing: 20,
  sheath: 4500,
  // Exterior
  roofing: 12,
  siding: 15000,     // Fiber cement, 1,620 SF wall area
  windows: 18000,
  extDoors: 23000,   // 3 sliders (living + 2 masters) + CVG fir entry w/frosted glass + sauna
  gutters: 1200,
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
  engineering: 8000,
  architect: 14000,
  insurance: 4000,
  gcFee: 15,
  ownerBuilder: false,
  loanInterest: 18000,
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
  totalDiySavings: 0,
  gcFeeCalc: 0,
  gcSavingsAmt: 0,
  hardCosts: 0,
  baseTotal: 0,
  locAdj: 0,
  grandTotal: 0,
  costPerSf: 0,
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
      sitePrep, tree, excavation, retaining, neighborShare, foundation, septic, utility,
      framing, sheath, roofing, siding, windows, extDoors, gutters,
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
    const framingCost = framing * sqft;
    const roofCost = roofing * roofSqft;
    const flooringCost = flooring * sqft;
    const ceilingCost = ceiling * sqft;

    // Category totals
    const catSite = sitePrep + tree + excavation + (retaining - neighborShare) + foundation + septic + utility;
    const catFrame = framingCost + sheath;
    const catExt = roofCost + siding + windows + extDoors + gutters;
    const catMep = electric + plumbing + hvac + radiantHeat;
    const catInsul = insulation + drywall + paint;
    const catInt = flooringCost + ceilingCost + intDoors + trim;
    const catKb = cabinets + counters + appliances + bathFixtures;
    const catSavings = accessSave + totalDiySavings;
    const catFinish = driveway + landscape + deck + extLighting + tempUtilities + finalCleanup + miscCode - diyLandscapeSaveAmt - diyDeckSaveAmt;

    const hardCosts = catSite + catFrame + catExt + catMep + catInsul + catInt + catKb - (catSavings - diyLandscapeSaveAmt - diyDeckSaveAmt);
    const gcFeeCalc = ownerBuilder ? 0 : hardCosts * (gcFee / 100);
    const gcSavingsAmt = ownerBuilder ? hardCosts * (gcFee / 100) : 0;
    
    // Pre-loan costs (paid before financing)
    const preLoanCosts = permits + engineering + architect;
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
      totalDiySavings,
      gcFeeCalc,
      gcSavingsAmt,
      hardCosts,
      baseTotal,
      locAdj,
      grandTotal,
      costPerSf,
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

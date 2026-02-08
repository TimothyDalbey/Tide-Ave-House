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
  insurance: number;
  gcFee: number;
  ownerBuilder: boolean;
  // Site Finishing
  driveway: number;
  landscape: number;
  deck: number;
  accessSave: number;
  // DIY Options
  diyPaint: boolean;
  diyPaintSave: number;
  diyFlooring: boolean;
  diyFlooringSave: number;
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
  wallLf: 170,
  wallHt: 10,
  finishGrade: '1.15',
  locFactor: 1,
  sitePrep: 2500,
  tree: 3500,
  retaining: 18000,
  neighborShare: 0,
  foundation: 35000,
  septic: 25000,
  utility: 20400,
  framing: 20,
  sheath: 6000,
  roofing: 12,
  siding: 20000,
  windows: 30000,
  extDoors: 15000,
  gutters: 1000,
  electric: 18000,
  plumbing: 22000,
  hvac: 10000,
  insulation: 10000,
  drywall: 16000,
  paint: 5000,
  flooring: 14,
  ceiling: 10,
  intDoors: 9000,
  trim: 2000,
  cabinets: 15000,
  counters: 6000,
  appliances: 8000,
  bathFixtures: 12000,
  permits: 5500,
  insurance: 3500,
  gcFee: 12,
  ownerBuilder: false,
  driveway: 3500,
  landscape: 4000,
  deck: 12000,
  accessSave: 8000,
  diyPaint: false,
  diyPaintSave: 4500,
  diyFlooring: false,
  diyFlooringSave: 4,
  diyCeiling: false,
  diyCeilingSave: 5,
  diyDoors: false,
  diyDoorsSave: 1600,
  diyTrim: false,
  diyTrimSave: 5000,
  diyCabinets: false,
  diyCabinetsSave: 4000,
  diyLandscape: true,
  diyLandscapeSave: 4000,
  diyDeck: false,
  diyDeckSave: 8000,
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
      sitePrep, tree, retaining, neighborShare, foundation, septic, utility,
      framing, sheath, roofing, siding, windows, extDoors, gutters,
      electric, plumbing, hvac, insulation, drywall, paint,
      flooring, ceiling, intDoors, trim,
      cabinets, counters, appliances, bathFixtures,
      permits, insurance, gcFee, ownerBuilder,
      driveway, landscape, deck, accessSave,
      diyPaint, diyPaintSave, diyFlooring, diyFlooringSave,
      diyCeiling, diyCeilingSave, diyDoors, diyDoorsSave,
      diyTrim, diyTrimSave, diyCabinets, diyCabinetsSave,
      diyLandscape, diyLandscapeSave, diyDeck, diyDeckSave
    } = inputs;

    // DIY savings calculations
    const diyFlooringSaveAmt = diyFlooring ? diyFlooringSave * sqft : 0;
    const diyCeilingSaveAmt = diyCeiling ? diyCeilingSave * sqft : 0;
    const diyDoorsSaveAmt = diyDoors ? diyDoorsSave : 0;
    const diyTrimSaveAmt = diyTrim ? diyTrimSave : 0;
    const diyCabinetsSaveAmt = diyCabinets ? diyCabinetsSave : 0;
    const diyPaintSaveAmt = diyPaint ? diyPaintSave : 0;
    const diyLandscapeSaveAmt = diyLandscape ? diyLandscapeSave : 0;
    const diyDeckSaveAmt = diyDeck ? diyDeckSave : 0;
    const totalDiySavings = diyFlooringSaveAmt + diyCeilingSaveAmt + diyDoorsSaveAmt + 
      diyTrimSaveAmt + diyCabinetsSaveAmt + diyPaintSaveAmt + diyLandscapeSaveAmt + diyDeckSaveAmt;

    // Per-sf calculations
    const framingCost = framing * sqft;
    const roofCost = roofing * roofSqft;
    const flooringCost = flooring * sqft;
    const ceilingCost = ceiling * sqft;

    // Category totals
    const catSite = sitePrep + tree + (retaining - neighborShare) + foundation + septic + utility;
    const catFrame = framingCost + sheath;
    const catExt = roofCost + siding + windows + extDoors + gutters;
    const catMep = electric + plumbing + hvac;
    const catInsul = insulation + drywall + paint;
    const catInt = flooringCost + ceilingCost + intDoors + trim;
    const catKb = cabinets + counters + appliances + bathFixtures;
    const catSavings = accessSave + totalDiySavings;
    const catFinish = driveway + landscape + deck - diyLandscapeSaveAmt - diyDeckSaveAmt;

    const hardCosts = catSite + catFrame + catExt + catMep + catInsul + catInt + catKb - (catSavings - diyLandscapeSaveAmt - diyDeckSaveAmt);
    const gcFeeCalc = ownerBuilder ? 0 : hardCosts * (gcFee / 100);
    const gcSavingsAmt = ownerBuilder ? hardCosts * (gcFee / 100) : 0;
    
    // Permits are pre-loan costs (paid before financing)
    const preLoanCosts = permits;
    const catSoft = insurance + gcFeeCalc;  // Permits excluded from financed soft costs

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

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useBuild } from './BuildContext';

export interface FinanceInputs {
  lotPrice: number;
  lotEquity: number;
  lotAppraisal: number;
  constCost: number;
  valueGain: string;
  estValue: number;
  addCash: number;
  rate: number;
  term: number;
  downPct: number;
  closePct: number;
  pmiRate: number;
  financeClosingCosts: boolean;
}

export interface FinanceResults {
  lotPayoff: number;
  totAcq: number;
  finNeed: number;
  reqDown: number;
  lotEquityWithAppraisal: number;
  totDown: number;
  downGap: number;
  loanAmt: number;
  closeCost: number;
  totCash: number;
  // Monthly payment
  monthlyPI: number;
  monthlyPMI: number;
  monthlyTax: number;
  monthlyIns: number;
  monthlyTotal: number;
  // Equity
  ltv: number;
  equity: number;
  eqPct: number;
  needsPMI: boolean;
}

export interface ShareResults {
  eachRequired: number;
  timTowardShare: number;
  laniTowardShare: number;
  timStillNeeds: number;
  laniStillNeeds: number;
  timTotal: number;
  laniTotal: number;
  combined: number;
  each: number;
  diff: number;
  whoOwes: 'tim' | 'lani' | 'balanced';
}

export interface ShareInputs {
  timLot: number;
  timMtg: number;
  timArch: number;
  timOther: number;
  laniLot: number;
  laniMtg: number;
  laniArch: number;
  laniOther: number;
}

interface FinanceContextType {
  inputs: FinanceInputs;
  results: FinanceResults;
  shareInputs: ShareInputs;
  shareResults: ShareResults;
  setInput: <K extends keyof FinanceInputs>(key: K, value: FinanceInputs[K]) => void;
  setShareInput: <K extends keyof ShareInputs>(key: K, value: ShareInputs[K]) => void;
  calcAutoValue: () => void;
}

const defaultInputs: FinanceInputs = {
  lotPrice: 402000,
  lotEquity: 90000,
  lotAppraisal: 402000,
  constCost: 575000,
  valueGain: '1.35',
  estValue: Math.round((402000 + 575000) * 1.35), // Auto-calculated: (lotAppraisal + construction) × gain
  addCash: 0,
  rate: 6.0,
  term: 30,
  downPct: 20,
  closePct: 3,
  pmiRate: 0.5,
  financeClosingCosts: true,
};

const defaultResults: FinanceResults = {
  lotPayoff: 0,
  totAcq: 0,
  finNeed: 0,
  reqDown: 0,
  lotEquityWithAppraisal: 0,
  totDown: 0,
  downGap: 0,
  loanAmt: 0,
  closeCost: 0,
  totCash: 0,
  monthlyPI: 0,
  monthlyPMI: 0,
  monthlyTax: 0,
  monthlyIns: 0,
  monthlyTotal: 0,
  ltv: 0,
  equity: 0,
  eqPct: 0,
  needsPMI: false,
};

const defaultShareInputs: ShareInputs = {
  timLot: 15000,
  timMtg: 1500,
  timArch: 4450,
  timOther: 0,
  laniLot: 75666,
  laniMtg: 1500,
  laniArch: 4450,
  laniOther: 0,
};

const defaultShareResults: ShareResults = {
  eachRequired: 0,
  timTowardShare: 0,
  laniTowardShare: 0,
  timStillNeeds: 0,
  laniStillNeeds: 0,
  timTotal: 0,
  laniTotal: 0,
  combined: 0,
  each: 0,
  diff: 0,
  whoOwes: 'balanced',
};

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export function FinanceProvider({ children }: { children: ReactNode }) {
  const { results: buildResults } = useBuild();
  const [inputs, setInputs] = useState<FinanceInputs>(defaultInputs);
  const [results, setResults] = useState<FinanceResults>(defaultResults);
  const [shareInputs, setShareInputs] = useState<ShareInputs>(defaultShareInputs);
  const [shareResults, setShareResults] = useState<ShareResults>(defaultShareResults);

  const setInput = useCallback(<K extends keyof FinanceInputs>(key: K, value: FinanceInputs[K]) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  const setShareInput = useCallback(<K extends keyof ShareInputs>(key: K, value: ShareInputs[K]) => {
    setShareInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  const calcAutoValue = useCallback(() => {
    const { lotAppraisal, valueGain } = inputs;
    // Use financedTotal (excludes pre-loan costs like permits)
    const constCost = buildResults.financedTotal || inputs.constCost;
    const autoVal = Math.round((lotAppraisal + constCost) * parseFloat(valueGain));
    setInputs(prev => ({ ...prev, estValue: autoVal, constCost }));
  }, [inputs, buildResults.financedTotal]);

  // Sync construction cost from build calculator AND auto-calculate estValue
  useEffect(() => {
    if (buildResults.financedTotal > 0) {
      // Use financedTotal (excludes pre-loan costs like permits)
      const constCost = Math.round(buildResults.financedTotal);
      const autoVal = Math.round((inputs.lotAppraisal + constCost) * parseFloat(inputs.valueGain));
      setInputs(prev => ({ ...prev, constCost, estValue: autoVal }));
    }
  }, [buildResults.financedTotal, inputs.lotAppraisal, inputs.valueGain]);

  // Recalculate finance results
  useEffect(() => {
    const {
      lotPrice, lotEquity, lotAppraisal, constCost, estValue, addCash,
      rate, term, downPct, closePct, pmiRate, financeClosingCosts
    } = inputs;

    // Lot equity increases if appraisal > purchase price
    const lotEquityWithAppraisal = lotEquity + Math.max(0, lotAppraisal - lotPrice);
    
    const lotPayoff = lotPrice - lotEquity;  // Still owe original mortgage
    const totAcq = lotAppraisal + constCost;  // Use appraised value for total project
    const finNeed = constCost + lotPayoff;
    const reqDown = totAcq * (downPct / 100);
    const totDown = lotEquityWithAppraisal + addCash;  // Use enhanced equity
    const downGap = Math.max(0, reqDown - totDown);
    
    let loanAmt = totAcq - totDown;
    let closeCost = loanAmt * (closePct / 100);
    
    // If financing closing costs, add them to loan
    if (financeClosingCosts) {
      loanAmt = loanAmt + closeCost;
    }
    
    const totCash = financeClosingCosts 
      ? downGap + addCash 
      : downGap + closeCost + addCash;

    // LTV based on base loan (before closing costs) vs estValue
    const baseLoan = totAcq - totDown;
    const ltv = (baseLoan / estValue) * 100;
    const needsPMI = ltv > 80;

    // Monthly calculations
    const mr = rate / 100 / 12;
    const np = term * 12;
    let monthlyPI = 0;
    if (mr > 0) {
      monthlyPI = loanAmt * (mr * Math.pow(1 + mr, np)) / (Math.pow(1 + mr, np) - 1);
    }
    const monthlyPMI = needsPMI ? (loanAmt * (pmiRate / 100)) / 12 : 0;
    const monthlyTax = (estValue * 0.01) / 12;
    const monthlyIns = 300;
    const monthlyTotal = monthlyPI + monthlyPMI + monthlyTax + monthlyIns;

    const equity = estValue - loanAmt;
    const eqPct = (equity / estValue) * 100;

    setResults({
      lotPayoff,
      totAcq,
      finNeed,
      reqDown,
      lotEquityWithAppraisal,
      totDown,
      downGap,
      loanAmt,
      closeCost,
      totCash,
      monthlyPI,
      monthlyPMI,
      monthlyTax,
      monthlyIns,
      monthlyTotal,
      ltv,
      equity,
      eqPct,
      needsPMI,
    });
  }, [inputs]);

  // Recalculate share results
  useEffect(() => {
    const { lotEquity, closePct, addCash } = inputs;
    const { loanAmt, downGap } = results;
    
    const closeCost = loanAmt * (closePct / 100);
    const totCash = lotEquity + closeCost + addCash + downGap;
    const eachRequired = totCash / 2;

    const { timLot, timMtg, timArch, timOther, laniLot, laniMtg, laniArch, laniOther } = shareInputs;

    const timOtherContrib = timMtg + timArch + timOther;
    const laniOtherContrib = laniMtg + laniArch + laniOther;
    const timTowardShare = timLot + timOtherContrib;
    const laniTowardShare = laniLot + laniOtherContrib;
    const timStillNeeds = Math.max(0, eachRequired - timTowardShare);
    const laniStillNeeds = Math.max(0, eachRequired - laniTowardShare);

    const timTotal = timLot + timMtg + timArch + timOther;
    const laniTotal = laniLot + laniMtg + laniArch + laniOther;
    const combined = timTotal + laniTotal;
    const each = combined / 2;
    const diff = Math.abs(timTotal - laniTotal) / 2;

    let whoOwes: 'tim' | 'lani' | 'balanced' = 'balanced';
    if (timTotal < laniTotal) whoOwes = 'tim';
    else if (laniTotal < timTotal) whoOwes = 'lani';

    setShareResults({
      eachRequired,
      timTowardShare,
      laniTowardShare,
      timStillNeeds,
      laniStillNeeds,
      timTotal,
      laniTotal,
      combined,
      each,
      diff,
      whoOwes,
    });
  }, [inputs, results, shareInputs]);

  return (
    <FinanceContext.Provider value={{ 
      inputs, 
      results, 
      shareInputs, 
      shareResults, 
      setInput, 
      setShareInput, 
      calcAutoValue 
    }}>
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  const context = useContext(FinanceContext);
  if (context === undefined) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
}

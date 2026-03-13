import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useBuild } from './BuildContext';

export interface FinanceInputs {
  // Property basics
  lotPrice: number;
  lotEquity: number;
  lotAppraisal: number;
  constCost: number;
  valueGain: string;
  estValue: number;
  
  // Refinance inputs (cash build scenario) - these are calculated dynamically
  financeClosingCostsRefi: boolean;  // Whether to roll closing costs into refinance loan
  
  // Loan terms (for refinance)
  rate: number;
  term: number;
  closePct: number;
  
  // Legacy fields (for compatibility)
  addCash: number;
  downPct: number;
  pmiRate: number;
  financeClosingCosts: boolean;
}

export interface FinanceResults {
  // Refinance results
  propertyValue: number;      // Completed property value
  totalInvested: number;      // Lot down payment + construction cash
  instantEquity: number;      // Value - what you spent
  maxLoanAmount: number;      // Based on target LTV
  existingDebtPayoff: number; // Lot loan to pay off
  cashOutAvailable: number;   // How much cash can be pulled out
  newLoanAmount: number;      // The refinance loan amount
  equityAfterRefi: number;    // Equity remaining after refinance
  ltvAfterRefi: number;       // LTV after refinance
  closeCost: number;          // Refinance closing costs
  
  // Monthly payment
  monthlyPI: number;
  monthlyPMI: number;
  monthlyTax: number;
  monthlyIns: number;
  monthlyTotal: number;
  
  // Legacy fields (for compatibility)
  lotPayoff: number;
  totAcq: number;
  finNeed: number;
  reqDown: number;
  lotEquityWithAppraisal: number;
  totDown: number;
  downGap: number;
  loanAmt: number;
  totCash: number;
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
  // Property basics
  lotPrice: 402000,
  lotEquity: 90000,
  lotAppraisal: 402000,
  constCost: 575000,
  valueGain: '1.35',
  estValue: Math.round((402000 + 575000) * 1.35),
  
  // Refinance inputs
  financeClosingCostsRefi: true,  // Roll closing costs into refinance loan
  
  // Loan terms
  rate: 6.5,
  term: 30,
  closePct: 2,
  
  // Legacy fields
  addCash: 0,
  downPct: 20,
  pmiRate: 0.5,
  financeClosingCosts: true,
};

const defaultResults: FinanceResults = {
  // Refinance results
  propertyValue: 0,
  totalInvested: 0,
  instantEquity: 0,
  maxLoanAmount: 0,
  existingDebtPayoff: 0,
  cashOutAvailable: 0,
  newLoanAmount: 0,
  equityAfterRefi: 0,
  ltvAfterRefi: 0,
  closeCost: 0,
  
  // Monthly payment
  monthlyPI: 0,
  monthlyPMI: 0,
  monthlyTax: 0,
  monthlyIns: 0,
  monthlyTotal: 0,
  
  // Legacy fields
  lotPayoff: 0,
  totAcq: 0,
  finNeed: 0,
  reqDown: 0,
  lotEquityWithAppraisal: 0,
  totDown: 0,
  downGap: 0,
  loanAmt: 0,
  totCash: 0,
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

  // Sync construction cost from build calculator AND auto-calculate values
  useEffect(() => {
    if (buildResults.financedTotal > 0) {
      const constCost = Math.round(buildResults.financedTotal);
      const autoVal = Math.round((inputs.lotAppraisal + constCost) * parseFloat(inputs.valueGain));
      setInputs(prev => ({ ...prev, constCost, estValue: autoVal }));
    }
  }, [buildResults.financedTotal, inputs.lotAppraisal, inputs.valueGain]);

  // Recalculate finance results (REFINANCE scenario)
  useEffect(() => {
    const {
      lotPrice, lotEquity, lotAppraisal, constCost, estValue,
      financeClosingCostsRefi, rate, term, closePct, pmiRate
    } = inputs;

    // === CALCULATED VALUES ===
    // Existing lot loan = lot price minus down payment made
    const existingLotLoan = lotPrice - lotEquity;
    // Total cash invested = lot down payment + construction costs
    const totalCashInvested = lotEquity + constCost;

    // === REFINANCE CALCULATIONS ===
    const propertyValue = estValue;
    const totalInvested = totalCashInvested;
    // Instant equity = property value - total cost basis (cash + debt)
    const instantEquity = propertyValue - (totalCashInvested + existingLotLoan);
    
    // Refinance: simply paying off the lot loan (no additional borrowing)
    const existingDebtPayoff = existingLotLoan;
    const closeCost = Math.round(existingDebtPayoff * (closePct / 100));
    
    // New loan amount = lot loan payoff + closing costs (if financed)
    const newLoanAmount = financeClosingCostsRefi 
      ? existingDebtPayoff + closeCost 
      : existingDebtPayoff;
    
    // Max loan would be at 80% LTV (for reference only)
    const maxLoanAmount = Math.round(propertyValue * 0.80);
    // Cash-out available = what they COULD borrow minus what they ARE borrowing
    const cashOutAvailable = Math.max(0, maxLoanAmount - newLoanAmount);
    
    const equityAfterRefi = propertyValue - newLoanAmount;
    const ltvAfterRefi = (newLoanAmount / propertyValue) * 100;
    
    // Monthly calculations for refinance
    const mr = rate / 100 / 12;
    const np = term * 12;
    let monthlyPI = 0;
    if (mr > 0 && newLoanAmount > 0) {
      monthlyPI = newLoanAmount * (mr * Math.pow(1 + mr, np)) / (Math.pow(1 + mr, np) - 1);
    }
    const needsPMI = ltvAfterRefi > 80;
    const monthlyPMI = needsPMI ? (newLoanAmount * (pmiRate / 100)) / 12 : 0;
    const monthlyTax = (propertyValue * 0.01) / 12;
    const monthlyIns = 350; // Higher for coastal property
    const monthlyTotal = monthlyPI + monthlyPMI + monthlyTax + monthlyIns;

    // Legacy fields for backward compatibility
    const lotEquityWithAppraisal = lotEquity + Math.max(0, lotAppraisal - lotPrice);
    const lotPayoff = existingLotLoan;
    const totAcq = lotAppraisal + constCost;
    const loanAmt = newLoanAmount;
    const ltv = ltvAfterRefi;
    const equity = equityAfterRefi;
    const eqPct = (equity / propertyValue) * 100;

    setResults({
      // Refinance results
      propertyValue,
      totalInvested,
      instantEquity,
      maxLoanAmount,
      existingDebtPayoff,
      cashOutAvailable,
      newLoanAmount,
      equityAfterRefi,
      ltvAfterRefi,
      closeCost,
      
      // Monthly payment
      monthlyPI,
      monthlyPMI,
      monthlyTax,
      monthlyIns,
      monthlyTotal,
      
      // Legacy fields
      lotPayoff,
      totAcq,
      finNeed: constCost + existingLotLoan,
      reqDown: 0,
      lotEquityWithAppraisal,
      totDown: totalCashInvested,
      downGap: 0,
      loanAmt,
      totCash: totalCashInvested,
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

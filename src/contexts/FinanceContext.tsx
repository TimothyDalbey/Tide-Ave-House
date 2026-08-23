import { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
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

export interface ShareTransaction {
  id: string;
  party: 'Tim' | 'Lani';
  category: 'lot' | 'mortgage' | 'architect' | 'engineering' | 'refund' | 'other';
  label: string;
  date: string;
  amount: number;
}

interface FinanceContextType {
  inputs: FinanceInputs;
  results: FinanceResults;
  shareInputs: ShareInputs;
  shareTransactions: ShareTransaction[];
  shareResults: ShareResults;
  setInput: <K extends keyof FinanceInputs>(key: K, value: FinanceInputs[K]) => void;
  setShareInput: <K extends keyof ShareInputs>(key: K, value: ShareInputs[K]) => void;
  setShareTransactionAmount: (id: string, amount: number) => void;
  setShareTransactionDate: (id: string, date: string) => void;
  calcAutoValue: () => void;
}

const defaultInputs: FinanceInputs = {
  // Property basics
  lotPrice: 402000,
  lotEquity: 90000,
  lotAppraisal: 402000,
  constCost: 575000,
  valueGain: '950',
  estValue: 1900 * 950,  // sqft × price per sqft (beachfront with ocean view)
  
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

const defaultShareTransactions: ShareTransaction[] = [
  { id: 'tim-lot', party: 'Tim', category: 'lot', label: 'Lot Down Payment', date: '', amount: 15000 },
  { id: 'tim-architect-1', party: 'Tim', category: 'architect', label: 'Architect Payment 1', date: '', amount: 4450 },
  { id: 'tim-architect-2', party: 'Tim', category: 'architect', label: 'Architect Payment 2', date: '', amount: 4935 },
  { id: 'tim-engineering-1', party: 'Tim', category: 'engineering', label: 'Engineering Payment 1', date: '', amount: 1500 },
  { id: 'tim-engineering-2', party: 'Tim', category: 'engineering', label: 'Engineering Payment 2', date: '', amount: 5250 },
  { id: 'tim-bamboo-gardens-1', party: 'Tim', category: 'other', label: 'Bamboo Gardens Invoice', date: '', amount: 210 },
  { id: 'tim-roadapproach', party: 'Tim', category: 'other', label: 'Road Approach Permit', date: '', amount: 782 },
  { id: 'lani-lot', party: 'Lani', category: 'lot', label: 'Lot Down Payment', date: '', amount: 75666 },
  { id: 'lani-architect-1', party: 'Lani', category: 'architect', label: 'Architect Payment', date: '', amount: 4450 },
  { id: 'lani-escrow-refund', party: 'Lani', category: 'refund', label: 'Escrow Refund', date: '', amount: -264 },
];

function summarizeShareTransactions(transactions: ShareTransaction[]): ShareInputs {
  return transactions.reduce<ShareInputs>((totals, transaction) => {
    if (transaction.party === 'Tim') {
      if (transaction.category === 'lot') totals.timLot += transaction.amount;
      else if (transaction.category === 'mortgage') totals.timMtg += transaction.amount;
      else if (transaction.category === 'architect') totals.timArch += transaction.amount;
      else totals.timOther += transaction.amount;
    } else {
      if (transaction.category === 'lot') totals.laniLot += transaction.amount;
      else if (transaction.category === 'mortgage') totals.laniMtg += transaction.amount;
      else if (transaction.category === 'architect') totals.laniArch += transaction.amount;
      else totals.laniOther += transaction.amount;
    }
    return totals;
  }, {
    timLot: 0,
    timMtg: 0,
    timArch: 0,
    timOther: 0,
    laniLot: 0,
    laniMtg: 0,
    laniArch: 0,
    laniOther: 0,
  });
}

function sumTransactionsByParty(transactions: ShareTransaction[], party: 'Tim' | 'Lani') {
  return transactions
    .filter(transaction => transaction.party === party && transaction.category !== 'mortgage')
    .reduce((sum, transaction) => sum + transaction.amount, 0);
}

function updateDerivedShareField(transactions: ShareTransaction[], field: keyof ShareInputs, value: number): ShareTransaction[] {
  const directIds: Partial<Record<keyof ShareInputs, string>> = {
    timLot: 'tim-lot',
    laniLot: 'lani-lot',
  };

  const directId = directIds[field];
  if (directId) {
    return transactions.map(transaction =>
      transaction.id === directId ? { ...transaction, amount: value } : transaction
    );
  }

  const adjustmentConfig: Record<Exclude<keyof ShareInputs, 'timLot' | 'laniLot'>, ShareTransaction> = {
    timMtg: { id: 'tim-mortgage-adjustment', party: 'Tim', category: 'mortgage', label: 'Mortgage Adjustment', date: '', amount: 0 },
    timArch: { id: 'tim-architect-adjustment', party: 'Tim', category: 'architect', label: 'Architect Adjustment', date: '', amount: 0 },
    timOther: { id: 'tim-other-adjustment', party: 'Tim', category: 'other', label: 'Other Adjustment', date: '', amount: 0 },
    laniMtg: { id: 'lani-mortgage-adjustment', party: 'Lani', category: 'mortgage', label: 'Mortgage Adjustment', date: '', amount: 0 },
    laniArch: { id: 'lani-architect-adjustment', party: 'Lani', category: 'architect', label: 'Architect Adjustment', date: '', amount: 0 },
    laniOther: { id: 'lani-other-adjustment', party: 'Lani', category: 'other', label: 'Other Adjustment', date: '', amount: 0 },
  };

  const current = summarizeShareTransactions(transactions)[field];
  const delta = value - current;
  const adjustment = adjustmentConfig[field as Exclude<keyof ShareInputs, 'timLot' | 'laniLot'>];
  const existing = transactions.find(transaction => transaction.id === adjustment.id);

  if (existing) {
    return transactions.map(transaction =>
      transaction.id === adjustment.id
        ? { ...transaction, amount: transaction.amount + delta }
        : transaction
    );
  }

  return [...transactions, { ...adjustment, amount: delta }];
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export function FinanceProvider({ children }: { children: ReactNode }) {
  const { results: buildResults } = useBuild();
  const [inputs, setInputs] = useState<FinanceInputs>(defaultInputs);
  const [results, setResults] = useState<FinanceResults>(defaultResults);
  const [shareTransactions, setShareTransactions] = useState<ShareTransaction[]>(defaultShareTransactions);
  const [shareResults, setShareResults] = useState<ShareResults>(defaultShareResults);
  const shareInputs = useMemo(() => summarizeShareTransactions(shareTransactions), [shareTransactions]);

  const setInput = useCallback(<K extends keyof FinanceInputs>(key: K, value: FinanceInputs[K]) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  const setShareInput = useCallback(<K extends keyof ShareInputs>(key: K, value: ShareInputs[K]) => {
    setShareTransactions(prev => updateDerivedShareField(prev, key, Number(value)));
  }, []);

  const setShareTransactionAmount = useCallback((id: string, amount: number) => {
    setShareTransactions(prev => prev.map(transaction =>
      transaction.id === id ? { ...transaction, amount } : transaction
    ));
  }, []);

  const setShareTransactionDate = useCallback((id: string, date: string) => {
    setShareTransactions(prev => prev.map(transaction =>
      transaction.id === id ? { ...transaction, date } : transaction
    ));
  }, []);

  const calcAutoValue = useCallback(() => {
    const { valueGain } = inputs;
    // Use sqft from build context, price per sqft from valueGain
    const sqft = buildResults.sqft || 1900;
    const pricePerSqft = parseInt(valueGain) || 800;
    const autoVal = Math.round(sqft * pricePerSqft);
    setInputs(prev => ({ ...prev, estValue: autoVal }));
  }, [inputs, buildResults.sqft]);

  // Sync construction cost and recalculate estimated value
  useEffect(() => {
    if (buildResults.financedTotal > 0) {
      const constCost = Math.round(buildResults.financedTotal);
      const sqft = buildResults.sqft || 1900;
      const pricePerSqft = parseInt(inputs.valueGain) || 800;
      const autoVal = Math.round(sqft * pricePerSqft);
      setInputs(prev => ({ ...prev, constCost, estValue: autoVal }));
    }
  }, [buildResults.financedTotal, buildResults.sqft, inputs.valueGain]);

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

    const timTowardShare = sumTransactionsByParty(shareTransactions, 'Tim');
    const laniTowardShare = sumTransactionsByParty(shareTransactions, 'Lani');
    const timStillNeeds = Math.max(0, eachRequired - timTowardShare);
    const laniStillNeeds = Math.max(0, eachRequired - laniTowardShare);

    const timTotal = timTowardShare;
    const laniTotal = laniTowardShare;
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
  }, [inputs, results, shareTransactions]);

  return (
    <FinanceContext.Provider value={{ 
      inputs, 
      results, 
      shareInputs, 
      shareTransactions,
      shareResults, 
      setInput, 
      setShareInput, 
      setShareTransactionAmount,
      setShareTransactionDate,
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

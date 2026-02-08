import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useFinance } from './FinanceContext';

// Seasonal data structure
interface SeasonalData {
  name: string;
  months: number;
  occupancy: number;
  rateMultiplier: number;
}

export interface STRInputs {
  // Base rates (from Arch Cape market data)
  baseADR: number;           // Average daily rate: $519
  
  // Seasonal settings
  seasons: {
    summer: SeasonalData;    // Jun-Aug
    shoulder: SeasonalData;  // Apr-May, Sep-Oct
    winter: SeasonalData;    // Nov-Mar
  };
  
  // Operating settings
  selfManaged: boolean;
  propertyMgmtRate: number;  // 20-25% if not self-managed
  platformFeeRate: number;   // 3% Airbnb
  cleaningFeePerTurn: number; // $175
  cleaningFeeToGuest: number; // How much guest pays
  lodgingTaxRate: number;    // 9.5% Oregon + Tillamook
  
  // Expenses
  utilitiesMonthly: number;
  suppliesMonthly: number;
  maintenanceReserve: number; // % of revenue
  insuranceAnnual: number;
  
  // Personal use
  personalUseNights: number;
  
  // Appreciation & growth
  revenueGrowthRate: number;     // 3% per AirDNA
  appreciationRate: number;      // 4% Oregon coastal
  
  // Tax assumptions
  marginalTaxRate: number;       // For depreciation benefit
  landValuePercent: number;      // Typically 15-20% of property value
}

export interface YearlyProjection {
  year: number;
  revenue: number;
  noi: number;
  cashFlow: number;
  cumulativeCashFlow: number;
  propertyValue: number;
  loanBalance: number;
  equity: number;
  principalPaydown: number;
  appreciation: number;
  depreciation: number;
  taxSavings: number;
  totalReturn: number;
}

export interface STRResults {
  // Revenue breakdown
  grossNights: number;
  availableNights: number;
  occupiedNights: number;
  averageOccupancy: number;
  blendedADR: number;
  grossRevenue: number;
  cleaningFeeIncome: number;
  totalRevenue: number;
  
  // Operating expenses
  platformFees: number;
  cleaningExpense: number;
  propertyManagement: number;
  utilities: number;
  supplies: number;
  maintenance: number;
  insurance: number;
  lodgingTaxes: number;
  totalOperatingExpenses: number;
  
  // NOI & Cash Flow
  netOperatingIncome: number;
  mortgagePayment: number;
  propertyTaxes: number;
  preTaxCashFlow: number;
  
  // Tax benefits
  buildingValue: number;
  annualDepreciation: number;
  taxSavings: number;
  afterTaxCashFlow: number;
  
  // Key metrics
  capRate: number;
  cashOnCashReturn: number;
  operatingExpenseRatio: number;
  breakEvenOccupancy: number;
  
  // 10-year projection
  tenYearProjection: YearlyProjection[];
  totalEquityGain: number;
  totalCashFlow: number;
  totalTaxSavings: number;
  totalReturn: number;
  annualizedReturn: number;
}

interface STRContextType {
  inputs: STRInputs;
  results: STRResults;
  setInput: <K extends keyof STRInputs>(key: K, value: STRInputs[K]) => void;
  setSeasonInput: (season: 'summer' | 'shoulder' | 'winter', field: keyof SeasonalData, value: number) => void;
}

const defaultInputs: STRInputs = {
  baseADR: 519,
  seasons: {
    summer: { name: 'Summer (Jun-Aug)', months: 3, occupancy: 0.90, rateMultiplier: 1.5 },
    shoulder: { name: 'Shoulder (Apr-May, Sep-Oct)', months: 4, occupancy: 0.60, rateMultiplier: 1.0 },
    winter: { name: 'Winter (Nov-Mar)', months: 5, occupancy: 0.40, rateMultiplier: 0.75 },
  },
  selfManaged: true,
  propertyMgmtRate: 0.25,
  platformFeeRate: 0.03,
  cleaningFeePerTurn: 175,
  cleaningFeeToGuest: 175,
  lodgingTaxRate: 0.095,
  utilitiesMonthly: 400,
  suppliesMonthly: 150,
  maintenanceReserve: 0.05,
  insuranceAnnual: 2500,
  personalUseNights: 14,
  revenueGrowthRate: 0.03,
  appreciationRate: 0.04,
  marginalTaxRate: 0.32,
  landValuePercent: 0.20,
};

const defaultResults: STRResults = {
  grossNights: 0,
  availableNights: 0,
  occupiedNights: 0,
  averageOccupancy: 0,
  blendedADR: 0,
  grossRevenue: 0,
  cleaningFeeIncome: 0,
  totalRevenue: 0,
  platformFees: 0,
  cleaningExpense: 0,
  propertyManagement: 0,
  utilities: 0,
  supplies: 0,
  maintenance: 0,
  insurance: 0,
  lodgingTaxes: 0,
  totalOperatingExpenses: 0,
  netOperatingIncome: 0,
  mortgagePayment: 0,
  propertyTaxes: 0,
  preTaxCashFlow: 0,
  buildingValue: 0,
  annualDepreciation: 0,
  taxSavings: 0,
  afterTaxCashFlow: 0,
  capRate: 0,
  cashOnCashReturn: 0,
  operatingExpenseRatio: 0,
  breakEvenOccupancy: 0,
  tenYearProjection: [],
  totalEquityGain: 0,
  totalCashFlow: 0,
  totalTaxSavings: 0,
  totalReturn: 0,
  annualizedReturn: 0,
};

const STRContext = createContext<STRContextType | undefined>(undefined);

export function STRProvider({ children }: { children: ReactNode }) {
  const [inputs, setInputs] = useState<STRInputs>(defaultInputs);
  const [results, setResults] = useState<STRResults>(defaultResults);
  
  const { results: financeResults, inputs: financeInputs } = useFinance();

  const setInput = useCallback(<K extends keyof STRInputs>(key: K, value: STRInputs[K]) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  const setSeasonInput = useCallback((
    season: 'summer' | 'shoulder' | 'winter',
    field: keyof SeasonalData,
    value: number
  ) => {
    setInputs(prev => ({
      ...prev,
      seasons: {
        ...prev.seasons,
        [season]: { ...prev.seasons[season], [field]: value }
      }
    }));
  }, []);

  // Main calculation effect
  useEffect(() => {
    const { seasons, baseADR, selfManaged, propertyMgmtRate, platformFeeRate,
            cleaningFeePerTurn, cleaningFeeToGuest, lodgingTaxRate,
            utilitiesMonthly, suppliesMonthly, maintenanceReserve, insuranceAnnual,
            personalUseNights, revenueGrowthRate, appreciationRate,
            marginalTaxRate, landValuePercent } = inputs;

    // Property values from finance context
    const propertyValue = financeInputs.estValue || 1000000;
    const initialInvestment = financeResults.totDown || 200000;
    const annualMortgage = financeResults.monthlyPI * 12;
    const loanBalance = financeResults.loanAmt || 800000;
    const rate = financeInputs.rate / 100;
    
    // Revenue calculation by season
    const grossNights = 365;
    const availableNights = grossNights - personalUseNights;
    
    let occupiedNights = 0;
    let grossRevenue = 0;
    let turnovers = 0;
    
    Object.values(seasons).forEach(season => {
      const seasonNights = (season.months / 12) * availableNights;
      const occupied = seasonNights * season.occupancy;
      const adr = baseADR * season.rateMultiplier;
      occupiedNights += occupied;
      grossRevenue += occupied * adr;
      turnovers += occupied / 3; // Assume 3-night avg stay
    });
    
    const averageOccupancy = occupiedNights / availableNights;
    const blendedADR = occupiedNights > 0 ? grossRevenue / occupiedNights : 0;
    const cleaningFeeIncome = turnovers * cleaningFeeToGuest;
    const totalRevenue = grossRevenue + cleaningFeeIncome;
    
    // Operating expenses
    const platformFees = grossRevenue * platformFeeRate;
    const cleaningExpense = turnovers * cleaningFeePerTurn;
    const propertyManagement = selfManaged ? 0 : grossRevenue * propertyMgmtRate;
    const utilities = utilitiesMonthly * 12;
    const supplies = suppliesMonthly * 12;
    const maintenance = grossRevenue * maintenanceReserve;
    const insurance = insuranceAnnual;
    const lodgingTaxes = grossRevenue * lodgingTaxRate;
    
    const totalOperatingExpenses = platformFees + cleaningExpense + propertyManagement +
      utilities + supplies + maintenance + insurance + lodgingTaxes;
    
    // NOI & Cash Flow
    const netOperatingIncome = totalRevenue - totalOperatingExpenses;
    const mortgagePayment = annualMortgage;
    const propertyTaxes = propertyValue * 0.01; // Approx 1%
    const preTaxCashFlow = netOperatingIncome - mortgagePayment - propertyTaxes;
    
    // Depreciation & Tax Benefits
    const buildingValue = propertyValue * (1 - landValuePercent);
    const annualDepreciation = buildingValue / 27.5; // Residential depreciation
    const taxSavings = annualDepreciation * marginalTaxRate;
    const afterTaxCashFlow = preTaxCashFlow + taxSavings;
    
    // Key metrics
    const capRate = propertyValue > 0 ? (netOperatingIncome / propertyValue) * 100 : 0;
    const cashOnCashReturn = initialInvestment > 0 ? (afterTaxCashFlow / initialInvestment) * 100 : 0;
    const operatingExpenseRatio = totalRevenue > 0 ? totalOperatingExpenses / totalRevenue : 0;
    const fixedCostsPerNight = availableNights > 0 
      ? (mortgagePayment + propertyTaxes + utilities + insurance) / availableNights 
      : 0;
    const variableCostPerNight = occupiedNights > 0 
      ? (platformFees + cleaningExpense + propertyManagement + lodgingTaxes) / occupiedNights 
      : 0;
    const breakEvenOccupancy = blendedADR > variableCostPerNight 
      ? fixedCostsPerNight / (blendedADR - variableCostPerNight) 
      : 1;
    
    // 10-year projection
    const tenYearProjection: YearlyProjection[] = [];
    let cumulativeCashFlow = 0;
    let currentLoanBalance = loanBalance;
    
    for (let year = 1; year <= 10; year++) {
      const yearRevenue = totalRevenue * Math.pow(1 + revenueGrowthRate, year - 1);
      const yearNOI = netOperatingIncome * Math.pow(1 + revenueGrowthRate, year - 1);
      const yearPropertyValue = propertyValue * Math.pow(1 + appreciationRate, year);
      
      // Mortgage amortization
      const yearInterest = currentLoanBalance * rate;
      const yearPrincipal = Math.min(mortgagePayment - yearInterest, currentLoanBalance);
      currentLoanBalance = Math.max(0, currentLoanBalance - yearPrincipal);
      
      const yearEquity = yearPropertyValue - currentLoanBalance;
      const yearCashFlow = yearNOI - mortgagePayment - (yearPropertyValue * 0.01);
      cumulativeCashFlow += yearCashFlow;
      
      const yearAppreciation = year === 1 
        ? yearPropertyValue - propertyValue
        : propertyValue * Math.pow(1 + appreciationRate, year) - 
          propertyValue * Math.pow(1 + appreciationRate, year - 1);
      
      tenYearProjection.push({
        year,
        revenue: yearRevenue,
        noi: yearNOI,
        cashFlow: yearCashFlow,
        cumulativeCashFlow,
        propertyValue: yearPropertyValue,
        loanBalance: currentLoanBalance,
        equity: yearEquity,
        principalPaydown: yearPrincipal,
        appreciation: yearAppreciation,
        depreciation: annualDepreciation,
        taxSavings,
        totalReturn: (yearCashFlow + yearPrincipal + yearAppreciation + taxSavings),
      });
    }
    
    const lastYear = tenYearProjection[9] || { equity: 0 };
    const totalEquityGain = lastYear.equity - initialInvestment;
    const totalCashFlowSum = cumulativeCashFlow;
    const totalTaxSavingsSum = taxSavings * 10;
    const totalReturnSum = totalEquityGain + totalCashFlowSum + totalTaxSavingsSum;
    const annualizedReturnVal = initialInvestment > 0 
      ? (Math.pow((initialInvestment + totalReturnSum) / initialInvestment, 0.1) - 1) * 100
      : 0;
    
    setResults({
      grossNights,
      availableNights,
      occupiedNights,
      averageOccupancy,
      blendedADR,
      grossRevenue,
      cleaningFeeIncome,
      totalRevenue,
      platformFees,
      cleaningExpense,
      propertyManagement,
      utilities,
      supplies,
      maintenance,
      insurance,
      lodgingTaxes,
      totalOperatingExpenses,
      netOperatingIncome,
      mortgagePayment,
      propertyTaxes,
      preTaxCashFlow,
      buildingValue,
      annualDepreciation,
      taxSavings,
      afterTaxCashFlow,
      capRate,
      cashOnCashReturn,
      operatingExpenseRatio,
      breakEvenOccupancy: Math.min(breakEvenOccupancy, 1),
      tenYearProjection,
      totalEquityGain,
      totalCashFlow: totalCashFlowSum,
      totalTaxSavings: totalTaxSavingsSum,
      totalReturn: totalReturnSum,
      annualizedReturn: annualizedReturnVal,
    });
  }, [inputs, financeResults, financeInputs]);

  return (
    <STRContext.Provider value={{ inputs, results, setInput, setSeasonInput }}>
      {children}
    </STRContext.Provider>
  );
}

export function useSTR() {
  const context = useContext(STRContext);
  if (context === undefined) {
    throw new Error('useSTR must be used within a STRProvider');
  }
  return context;
}

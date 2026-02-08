import { Card, Alert, Row, Results, FormGroup, InputWrap } from '../ui';
import { useSTR } from '../../contexts/STRContext';
import { useFinance } from '../../contexts/FinanceContext';
import { fmt } from '../../utils/format';

export function STRAnalysis() {
  const { inputs, results, setInput, setSeasonInput } = useSTR();
  const { results: financeResults } = useFinance();

  const pctFmt = (n: number) => `${(n * 100).toFixed(0)}%`;

  return (
    <>
      <Card title="🏖️ Short-Term Rental Analysis">
        <Alert type="info" icon="📊">
          <strong>Arch Cape Market Data (AirDNA):</strong> $80,900 average annual revenue, 
          60% occupancy, $519 ADR, 89/100 market score. This 2BR coastal property is well-positioned for STR income.
        </Alert>

        <div className="grid" style={{ marginTop: '20px' }}>
          <div>
            <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>📅 Seasonal Settings</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <FormGroup label="Base Nightly Rate (ADR)" hint="Arch Cape median: $519">
                <InputWrap prefix="$">
                  <input
                    type="number"
                    value={inputs.baseADR}
                    onChange={e => setInput('baseADR', +e.target.value)}
                  />
                </InputWrap>
              </FormGroup>
            </div>

            {(['summer', 'shoulder', 'winter'] as const).map(season => (
              <div key={season} style={{ 
                background: 'var(--bg)', 
                padding: '12px 15px', 
                borderRadius: '8px', 
                marginBottom: '10px' 
              }}>
                <strong style={{ color: 'var(--secondary)' }}>{inputs.seasons[season].name}</strong>
                <div style={{ display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <div>
                    <label style={{ fontSize: '.8rem', color: 'var(--text-light)' }}>Occupancy</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <input
                        type="number"
                        value={Math.round(inputs.seasons[season].occupancy * 100)}
                        onChange={e => setSeasonInput(season, 'occupancy', +e.target.value / 100)}
                        style={{ width: '60px', padding: '6px 8px' }}
                      />
                      <span style={{ color: 'var(--text-light)' }}>%</span>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '.8rem', color: 'var(--text-light)' }}>Rate Multiplier</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <input
                        type="number"
                        value={inputs.seasons[season].rateMultiplier}
                        step={0.1}
                        onChange={e => setSeasonInput(season, 'rateMultiplier', +e.target.value)}
                        style={{ width: '60px', padding: '6px 8px' }}
                      />
                      <span style={{ color: 'var(--text-light)' }}>x</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '.9rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                    = ${Math.round(inputs.baseADR * inputs.seasons[season].rateMultiplier)}/night
                  </div>
                </div>
              </div>
            ))}

            <FormGroup label="Personal Use Days" hint="Nights blocked for your own use">
              <InputWrap suffix="nights/year">
                <input
                  type="number"
                  value={inputs.personalUseNights}
                  onChange={e => setInput('personalUseNights', +e.target.value)}
                  style={{ width: '80px' }}
                />
              </InputWrap>
            </FormGroup>
          </div>

          <div>
            <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>⚙️ Operating Settings</h3>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              marginBottom: '15px',
              background: inputs.selfManaged ? 'rgba(46, 204, 113, 0.1)' : 'rgba(241, 196, 15, 0.1)',
              padding: '12px 15px',
              borderRadius: '8px'
            }}>
              <input
                type="checkbox"
                checked={inputs.selfManaged}
                onChange={e => setInput('selfManaged', e.target.checked)}
                id="selfManaged"
              />
              <label htmlFor="selfManaged" style={{ cursor: 'pointer' }}>
                <strong>Self-Managed</strong>
                <span style={{ display: 'block', fontSize: '.85rem', color: 'var(--text-light)' }}>
                  {inputs.selfManaged ? 'No property management fee' : 'Using property manager (25% fee)'}
                </span>
              </label>
            </div>
            
            {!inputs.selfManaged && (
              <FormGroup label="Property Management Fee" hint="Typical: 20-25%">
                <InputWrap suffix="%">
                  <input
                    type="number"
                    value={Math.round(inputs.propertyMgmtRate * 100)}
                    onChange={e => setInput('propertyMgmtRate', +e.target.value / 100)}
                  />
                </InputWrap>
              </FormGroup>
            )}
            
            <FormGroup label="Platform Fee (Airbnb)" hint="Airbnb: 3%, VRBO: 5-8%">
              <InputWrap suffix="%">
                <input
                  type="number"
                  value={Math.round(inputs.platformFeeRate * 100)}
                  onChange={e => setInput('platformFeeRate', +e.target.value / 100)}
                />
              </InputWrap>
            </FormGroup>
            
            <FormGroup label="Cleaning Cost (per turnover)" hint="Paid to cleaners">
              <InputWrap prefix="$">
                <input
                  type="number"
                  value={inputs.cleaningFeePerTurn}
                  onChange={e => setInput('cleaningFeePerTurn', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>
            
            <FormGroup label="Cleaning Fee to Guest" hint="What guests pay">
              <InputWrap prefix="$">
                <input
                  type="number"
                  value={inputs.cleaningFeeToGuest}
                  onChange={e => setInput('cleaningFeeToGuest', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>
            
            <FormGroup label="Lodging Tax Rate" hint="Oregon 1.5% + Tillamook ~8%">
              <InputWrap suffix="%">
                <input
                  type="number"
                  value={(inputs.lodgingTaxRate * 100).toFixed(1)}
                  step={0.5}
                  onChange={e => setInput('lodgingTaxRate', +e.target.value / 100)}
                />
              </InputWrap>
            </FormGroup>
            
            <FormGroup label="Utilities (monthly)" hint="Electric, gas, water, internet">
              <InputWrap prefix="$">
                <input
                  type="number"
                  value={inputs.utilitiesMonthly}
                  onChange={e => setInput('utilitiesMonthly', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>
            
            <FormGroup label="Supplies (monthly)" hint="Linens, toiletries, consumables">
              <InputWrap prefix="$">
                <input
                  type="number"
                  value={inputs.suppliesMonthly}
                  onChange={e => setInput('suppliesMonthly', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>
            
            <FormGroup label="STR Insurance (annual)" hint="Higher than standard homeowner's">
              <InputWrap prefix="$">
                <input
                  type="number"
                  value={inputs.insuranceAnnual}
                  onChange={e => setInput('insuranceAnnual', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>
          </div>
        </div>
      </Card>

      <Card title="📊 Annual P&L Statement">
        <div className="grid">
          <Results title="💰 Revenue">
            <Row label="Available Nights" value={`${Math.round(results.availableNights)} nights`} />
            <Row label="Occupied Nights" value={`${Math.round(results.occupiedNights)} nights`} />
            <Row label="Average Occupancy" value={pctFmt(results.averageOccupancy)} />
            <Row label="Blended ADR" value={fmt(results.blendedADR)} />
            <div style={{ borderTop: '1px solid var(--border)', marginTop: '10px', paddingTop: '10px' }}>
              <Row label="Gross Rental Income" value={fmt(results.grossRevenue)} />
              <Row label="Cleaning Fee Income" value={fmt(results.cleaningFeeIncome)} />
              <Row label="Total Revenue" value={fmt(results.totalRevenue)} total />
            </div>
          </Results>

          <Results title="📉 Operating Expenses">
            <Row label="Platform Fees (3%)" value={`-${fmt(results.platformFees)}`} />
            <Row label="Cleaning Expense" value={`-${fmt(results.cleaningExpense)}`} />
            {!inputs.selfManaged && (
              <Row label="Property Management" value={`-${fmt(results.propertyManagement)}`} />
            )}
            <Row label="Utilities" value={`-${fmt(results.utilities)}`} />
            <Row label="Supplies" value={`-${fmt(results.supplies)}`} />
            <Row label="Maintenance Reserve (5%)" value={`-${fmt(results.maintenance)}`} />
            <Row label="Insurance" value={`-${fmt(results.insurance)}`} />
            <Row label="Lodging Taxes (9.5%)" value={`-${fmt(results.lodgingTaxes)}`} />
            <Row label="Total Operating Expenses" value={`-${fmt(results.totalOperatingExpenses)}`} total />
          </Results>
        </div>

        <div className="grid" style={{ marginTop: '20px' }}>
          <Results title="📈 Net Operating Income">
            <Row label="Total Revenue" value={fmt(results.totalRevenue)} />
            <Row label="Operating Expenses" value={`-${fmt(results.totalOperatingExpenses)}`} />
            <Row label="Net Operating Income (NOI)" value={fmt(results.netOperatingIncome)} total />
            <div style={{ marginTop: '15px', fontSize: '.9rem', color: 'var(--text-light)' }}>
              Operating Expense Ratio: {pctFmt(results.operatingExpenseRatio)}
            </div>
          </Results>

          <Results title="💵 Cash Flow">
            <Row label="Net Operating Income" value={fmt(results.netOperatingIncome)} />
            <Row label="Mortgage Payment" value={`-${fmt(results.mortgagePayment)}`} />
            <Row label="Property Taxes" value={`-${fmt(results.propertyTaxes)}`} />
            <Row label="Pre-Tax Cash Flow" value={fmt(results.preTaxCashFlow)} highlight />
            <div style={{ marginTop: '15px', borderTop: '1px solid var(--border)', paddingTop: '10px' }}>
              <Row label="Depreciation Deduction" value={fmt(results.annualDepreciation)} />
              <Row label={`Tax Savings (at ${Math.round(inputs.marginalTaxRate * 100)}%)`} value={`+${fmt(results.taxSavings)}`} />
              <Row label="After-Tax Cash Flow" value={fmt(results.afterTaxCashFlow)} total />
            </div>
          </Results>
        </div>

        <div className="grid" style={{ marginTop: '20px' }}>
          <Results title="📊 Key Metrics">
            <Row label="Cap Rate" value={`${results.capRate.toFixed(1)}%`} />
            <Row label="Cash-on-Cash Return" value={`${results.cashOnCashReturn.toFixed(1)}%`} highlight />
            <Row label="Break-Even Occupancy" value={pctFmt(results.breakEvenOccupancy)} />
          </Results>
          <div style={{ background: 'var(--bg)', padding: '15px', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '10px', color: 'var(--secondary)' }}>💡 What These Mean</h4>
            <ul style={{ fontSize: '.85rem', color: 'var(--text-light)', paddingLeft: '20px', margin: 0 }}>
              <li style={{ marginBottom: '8px' }}><strong>Cap Rate:</strong> NOI ÷ Property Value. Higher = better investment return.</li>
              <li style={{ marginBottom: '8px' }}><strong>Cash-on-Cash:</strong> Annual cash flow ÷ initial investment. Your actual return on money invested.</li>
              <li><strong>Break-Even:</strong> Minimum occupancy needed to cover all costs.</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="📈 10-Year Ownership Projection">
        <div className="grid" style={{ marginBottom: '20px' }}>
          <FormGroup label="Revenue Growth Rate" hint="AirDNA: +3%/year">
            <InputWrap suffix="%">
              <input
                type="number"
                value={(inputs.revenueGrowthRate * 100).toFixed(1)}
                step={0.5}
                onChange={e => setInput('revenueGrowthRate', +e.target.value / 100)}
              />
            </InputWrap>
          </FormGroup>
          <FormGroup label="Property Appreciation" hint="Oregon coastal: 3-5%">
            <InputWrap suffix="%">
              <input
                type="number"
                value={(inputs.appreciationRate * 100).toFixed(1)}
                step={0.5}
                onChange={e => setInput('appreciationRate', +e.target.value / 100)}
              />
            </InputWrap>
          </FormGroup>
          <FormGroup label="Marginal Tax Rate" hint="For depreciation benefit">
            <InputWrap suffix="%">
              <input
                type="number"
                value={Math.round(inputs.marginalTaxRate * 100)}
                onChange={e => setInput('marginalTaxRate', +e.target.value / 100)}
              />
            </InputWrap>
          </FormGroup>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', fontSize: '.8rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg)' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>Year</th>
                <th style={{ padding: '10px', textAlign: 'right' }}>Revenue</th>
                <th style={{ padding: '10px', textAlign: 'right' }}>Cash Flow</th>
                <th style={{ padding: '10px', textAlign: 'right' }}>Property Value</th>
                <th style={{ padding: '10px', textAlign: 'right' }}>Loan Balance</th>
                <th style={{ padding: '10px', textAlign: 'right' }}>Equity</th>
                <th style={{ padding: '10px', textAlign: 'right' }}>Total Return</th>
              </tr>
            </thead>
            <tbody>
              {results.tenYearProjection.map(year => (
                <tr key={year.year} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '8px 10px' }}>{year.year}</td>
                  <td style={{ padding: '8px 10px', textAlign: 'right' }}>{fmt(year.revenue)}</td>
                  <td style={{ padding: '8px 10px', textAlign: 'right', color: year.cashFlow >= 0 ? 'var(--success)' : 'var(--danger)' }}>
                    {fmt(year.cashFlow)}
                  </td>
                  <td style={{ padding: '8px 10px', textAlign: 'right' }}>{fmt(year.propertyValue)}</td>
                  <td style={{ padding: '8px 10px', textAlign: 'right' }}>{fmt(year.loanBalance)}</td>
                  <td style={{ padding: '8px 10px', textAlign: 'right', color: 'var(--primary)' }}>{fmt(year.equity)}</td>
                  <td style={{ padding: '8px 10px', textAlign: 'right', fontWeight: 'bold' }}>{fmt(year.totalReturn)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid" style={{ marginTop: '25px', alignItems: 'stretch' }}>
          <Results title="🎯 10-Year Summary">
            <Row label="Starting Investment" value={fmt(financeResults.totDown)} />
            <Row label="Total Cash Flow (10 yrs)" value={fmt(results.totalCashFlow)} />
            <Row label="Total Tax Savings" value={fmt(results.totalTaxSavings)} />
            <Row label="Total Equity Gain" value={fmt(results.totalEquityGain)} highlight />
            <div style={{ marginTop: '10px', fontSize: '.85rem', color: 'var(--text-light)' }}>
              (Property appreciation + mortgage paydown)
            </div>
          </Results>
          <Results title="💎 Total Return on Investment">
            <Row label="Total Value Created" value={fmt(results.totalReturn)} total />
            <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', textAlign: 'center' }}>
                {fmt(results.totalReturn)}
              </div>
              <div style={{ textAlign: 'center', fontSize: '.9rem', color: 'var(--text-light)', marginBottom: '8px' }}>
                Total value after 10 years of ownership
              </div>
              <div style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                {results.annualizedReturn.toFixed(1)}% Annualized Return
              </div>
            </div>
          </Results>
        </div>

        <Alert type="success" icon="🏠" style={{ marginTop: '20px' }}>
          <strong>The Power of STR Ownership:</strong> Over 10 years, you benefit from rental income cash flow, 
          tax savings through depreciation, mortgage paydown (forced savings), and property appreciation. 
          Even with conservative assumptions, coastal Oregon STRs can generate significant wealth.
        </Alert>
      </Card>

      <Card title="📋 Tillamook County STR Requirements">
        <div className="grid">
          <div>
            <h4 style={{ marginBottom: '10px', color: 'var(--secondary)' }}>Required Permits & Taxes</h4>
            <ul style={{ paddingLeft: '20px', fontSize: '.9rem', margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>County Business License</li>
              <li style={{ marginBottom: '6px' }}>Transient Room Tax Registration (~9.5%)</li>
              <li style={{ marginBottom: '6px' }}>STR-specific Insurance Policy</li>
              <li>Land Use/Zoning Compliance</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px', color: 'var(--secondary)' }}>Safety & Compliance</h4>
            <ul style={{ paddingLeft: '20px', fontSize: '.9rem', margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>Smoke Detectors & Fire Extinguisher</li>
              <li style={{ marginBottom: '6px' }}>Emergency Contact Posted</li>
              <li style={{ marginBottom: '6px' }}>Maximum Occupancy Posted</li>
              <li style={{ marginBottom: '6px' }}>Parking Plan (1 space/bedroom)</li>
              <li>Septic Capacity Verification</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '20px', padding: '15px', background: 'var(--bg)', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '10px', color: 'var(--secondary)' }}>📊 Arch Cape Market Stats (AirDNA 2026)</h4>
          <div className="grid" style={{ gap: '10px' }}>
            <div style={{ fontSize: '.9rem' }}>
              <strong>106</strong> active STR listings<br />
              <strong>63%</strong> listed on both Airbnb + VRBO<br />
              <strong>97%</strong> entire home rentals
            </div>
            <div style={{ fontSize: '.9rem' }}>
              <strong>$519</strong> average daily rate<br />
              <strong>60%</strong> average occupancy<br />
              <strong>$80,900</strong> average annual revenue
            </div>
            <div style={{ fontSize: '.9rem' }}>
              <strong>89/100</strong> market score (Great)<br />
              <strong>+3%</strong> revenue YoY growth<br />
              <strong>$311</strong> RevPAR
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

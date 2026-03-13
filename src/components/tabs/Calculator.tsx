import { Card, Alert, Row, Results, FormGroup, InputWrap } from '../ui';
import { useFinance } from '../../contexts/FinanceContext';
import { valueGainOptions, termOptions } from '../../constants';
import { fmt } from '../../utils/format';

export function Calculator() {
  const { inputs, results, setInput, calcAutoValue } = useFinance();
  
  // Dynamically calculated values
  const existingLotLoan = inputs.lotPrice - inputs.lotEquity;
  const totalCashInvested = inputs.lotEquity + inputs.constCost;
  const costBasis = totalCashInvested + existingLotLoan;

  return (
    <>
      <Card title="🏦 Lot Loan Refinance Calculator">
        <Alert type="info" icon="💵">
          <strong>Cash Build Strategy:</strong> You're building with cash and will refinance the existing 
          lot loan into a long-term mortgage after construction completes. No additional borrowing needed.
        </Alert>

        <div className="grid" style={{ marginTop: '20px' }}>
          <div>
            <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Lot Position</h3>
            
            <FormGroup label="Lot Purchase Price">
              <InputWrap prefix="$">
                <input
                  type="number"
                  value={inputs.lotPrice}
                  onChange={e => setInput('lotPrice', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>

            <FormGroup label="Down Payment Made">
              <InputWrap prefix="$">
                <input
                  type="number"
                  value={inputs.lotEquity}
                  onChange={e => setInput('lotEquity', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>

            <div style={{ background: 'rgba(231, 76, 60, 0.1)', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--danger)' }}>
                  <strong>Existing Lot Loan Balance</strong>
                  <br /><span style={{ fontSize: '.8rem', opacity: 0.8 }}>Calculated: Lot Price − Down Payment</span>
                </span>
                <strong style={{ color: 'var(--danger)', fontSize: '1.2rem' }}>{fmt(existingLotLoan)}</strong>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Construction</h3>
            
            <div style={{ background: 'var(--bg)', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>
                  <strong>Construction Cost</strong>
                  <br /><span style={{ fontSize: '.8rem', color: 'var(--text-light)' }}>🔗 Synced from Build Costs tab</span>
                </span>
                <strong style={{ fontSize: '1.2rem' }}>{fmt(inputs.constCost)}</strong>
              </div>
            </div>

            <FormGroup label="Value Gain on Completion" hint="New construction typically adds 20-35% value">
              <select
                value={inputs.valueGain}
                onChange={e => {
                  setInput('valueGain', e.target.value);
                  setTimeout(calcAutoValue, 0);
                }}
              >
                {valueGainOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </FormGroup>

            <div style={{ background: 'rgba(46, 204, 113, 0.1)', padding: '15px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>
                  <strong style={{ color: 'var(--success)' }}>Completed Property Value</strong>
                  <br /><span style={{ fontSize: '.8rem', color: 'var(--text-light)' }}>
                    ({inputs.lotPrice.toLocaleString()} + {inputs.constCost.toLocaleString()}) × {inputs.valueGain}
                  </span>
                </span>
                <strong style={{ color: 'var(--success)', fontSize: '1.2rem' }}>{fmt(inputs.estValue)}</strong>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card title="📊 Investment Summary">
        <div className="grid">
          <Results title="💰 Your Cash Investment">
            <Row label="Lot Down Payment" value={fmt(inputs.lotEquity)} />
            <Row label="Construction Cost (paid cash)" value={fmt(inputs.constCost)} />
            <Row label="Total Cash Invested" value={fmt(totalCashInvested)} total />
          </Results>

          <Results title="📈 Value Creation">
            <Row label="Total Cost Basis (Cash + Lot Loan)" value={fmt(costBasis)} />
            <Row label="Completed Property Value" value={fmt(results.propertyValue)} />
            <Row label="Instant Equity Created" value={fmt(results.propertyValue - costBasis)} highlight />
            <p style={{ fontSize: '.8rem', color: 'var(--text-light)', marginTop: '8px' }}>
              Value gain = {fmt(results.propertyValue - costBasis)} ({((results.propertyValue / costBasis - 1) * 100).toFixed(0)}% ROI)
            </p>
          </Results>
        </div>
      </Card>

      <Card title="🔄 Refinance: Convert Lot Loan to Long-Term Mortgage">
        <Alert type="success" icon="✅">
          <strong>Excellent Position!</strong> You're simply converting your {fmt(existingLotLoan)} lot loan 
          to a long-term mortgage. With {fmt(results.propertyValue)} in property value, your LTV will 
          be just {results.ltvAfterRefi.toFixed(1)}% — well below PMI threshold.
        </Alert>

        <div className="grid" style={{ marginTop: '20px' }}>
          <div>
            <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Loan Terms</h3>
            
            <FormGroup label="Interest Rate" hint="Current 30-year rates: 6.0% - 7.0%">
              <InputWrap suffix="%">
                <input
                  type="number"
                  value={inputs.rate}
                  step={0.125}
                  onChange={e => setInput('rate', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>

            <FormGroup label="Loan Term">
              <select
                value={inputs.term}
                onChange={e => setInput('term', +e.target.value)}
              >
                {termOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </FormGroup>

            <FormGroup label="Closing Costs" hint="Typically 1.5% - 3% for refinance">
              <InputWrap suffix="%">
                <input
                  type="number"
                  value={inputs.closePct}
                  step={0.25}
                  onChange={e => setInput('closePct', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>

            <FormGroup label="Finance Closing Costs?" hint="Roll closing costs into the loan">
              <select
                value={inputs.financeClosingCostsRefi ? 'yes' : 'no'}
                onChange={e => setInput('financeClosingCostsRefi', e.target.value === 'yes')}
              >
                <option value="yes">Yes, add to loan</option>
                <option value="no">No, pay at closing</option>
              </select>
            </FormGroup>
          </div>

          <Results title="📋 Refinance Breakdown">
            <Row label="Lot Loan Payoff" value={fmt(existingLotLoan)} />
            <Row label={`Closing Costs (${inputs.closePct}%)`} value={fmt(results.closeCost)} />
            {inputs.financeClosingCostsRefi ? (
              <Row label="Closing costs rolled into loan" value="✓" />
            ) : (
              <Row label="Pay closing costs at closing" value={fmt(results.closeCost)} />
            )}
            <div style={{ borderTop: '1px solid var(--border)', marginTop: '10px', paddingTop: '10px' }}>
              <Row label="New Loan Amount" value={fmt(results.newLoanAmount)} total />
              <Row label="LTV" value={`${results.ltvAfterRefi.toFixed(1)}%`} />
              <Row label="PMI Required?" value={results.needsPMI ? 'Yes' : 'No'} />
            </div>
          </Results>
        </div>

        <div style={{ background: 'var(--bg)', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
          <h4 style={{ marginBottom: '10px', color: 'var(--secondary)' }}>💵 Your Position After Refinance</h4>
          <div className="grid">
            <div>
              <Row label="Property Value" value={fmt(results.propertyValue)} />
              <Row label="New Mortgage" value={fmt(results.newLoanAmount)} />
            </div>
            <div>
              <Row label="Your Equity" value={fmt(results.equityAfterRefi)} highlight />
              <Row label="Equity %" value={`${results.eqPct.toFixed(1)}%`} highlight />
            </div>
          </div>
          {results.cashOutAvailable > 0 && (
            <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginTop: '10px', padding: '10px', background: 'rgba(46, 204, 113, 0.1)', borderRadius: '6px' }}>
              <strong>Note:</strong> You have {fmt(results.cashOutAvailable)} in additional borrowing capacity 
              at 80% LTV if you ever need it. But you're wisely choosing not to tap it.
            </p>
          )}
        </div>
      </Card>

      <Card title="📅 Monthly Payment Breakdown">
        <div className="grid">
          <Results title="PITI Breakdown">
            <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginBottom: '15px' }}>
              <strong>PITI</strong> = Principal + Interest + Taxes + Insurance
            </p>
            <Row label="Principal & Interest" value={fmt(results.monthlyPI)} />
            <Row label={results.needsPMI ? "PMI (LTV > 80%)" : "PMI"} value={results.needsPMI ? fmt(results.monthlyPMI) : '$0 (no PMI)'} />
            <Row label="Property Tax (1.0%)" value={fmt(results.monthlyTax)} />
            <Row label="Homeowner's Insurance" value={fmt(results.monthlyIns)} />
            <Row label="Total Monthly PITI" value={fmt(results.monthlyTotal)} total />
          </Results>

          <div>
            <Results title="Annual Costs">
              <Row label="Annual PITI" value={fmt(results.monthlyTotal * 12)} />
              <Row label="Annual Principal & Interest" value={fmt(results.monthlyPI * 12)} />
            </Results>
            
            <div style={{ background: 'var(--bg)', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
              <h4 style={{ marginBottom: '10px', color: 'var(--secondary)' }}>🎯 Key Metrics</h4>
              <ul style={{ fontSize: '.9rem', color: 'var(--text-light)', paddingLeft: '20px', margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Debt Service:</strong> {fmt(results.monthlyTotal)}/mo for housing
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Equity Position:</strong> {fmt(results.equityAfterRefi)} ({results.eqPct.toFixed(0)}%)
                </li>
                <li>
                  <strong>Leverage:</strong> {fmt(results.newLoanAmount)} borrowed against {fmt(results.propertyValue)} value
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Alert type="info" icon="📝" style={{ marginTop: '20px' }}>
          <strong>For STR Analysis:</strong> The monthly mortgage payment of {fmt(results.monthlyPI)} 
          (P&I only) flows into the STR Analysis tab to calculate cash flow and returns. 
          Property taxes and insurance are also factored separately in that analysis.
        </Alert>
      </Card>
    </>
  );
}

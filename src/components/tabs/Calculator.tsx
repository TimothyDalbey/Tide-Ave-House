import { Card, Alert, Row, Results, FormGroup, InputWrap } from '../ui';
import { useFinance } from '../../contexts/FinanceContext';
import { useBuild } from '../../contexts/BuildContext';
import { valueGainOptions, termOptions } from '../../constants';
import { fmt } from '../../utils/format';

export function Calculator() {
  const { inputs, results, setInput, calcAutoValue } = useFinance();
  const { results: buildResults } = useBuild();

  return (
    <Card title="🧮 Construction Finance Calculator">
      <div className="grid">
        <div>
          <h3 style={{ marginBottom: '20px', color: 'var(--secondary)' }}>Property & Lot Details</h3>
          <div style={{ background: 'var(--bg)', padding: '12px 15px', borderRadius: '8px', marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Lot Purchase Price (fixed)</span>
              <strong>{fmt(inputs.lotPrice)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Lot Equity (fixed)</span>
              <strong>{fmt(inputs.lotEquity)}</strong>
            </div>
          </div>
          <FormGroup label="Lot Appraisal Value" hint="May increase above purchase price">
            <InputWrap prefix="$">
              <input
                type="number"
                value={inputs.lotAppraisal}
                onChange={e => setInput('lotAppraisal', +e.target.value)}
              />
            </InputWrap>
          </FormGroup>
          <FormGroup label="Estimated Construction Cost" hint="Range: $550,000 - $600,000">
            <InputWrap prefix="$">
              <input
                type="number"
                value={inputs.constCost}
                onChange={e => setInput('constCost', +e.target.value)}
              />
            </InputWrap>
          </FormGroup>
          <FormGroup label="Value Gain on Completion" hint="Typical new construction equity gain">
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
          <FormGroup label="Estimated Completed Value (Appraisal)" hint="Auto-calculated from costs + gain, or override">
            <InputWrap prefix="$">
              <input
                type="number"
                value={inputs.estValue}
                onChange={e => setInput('estValue', +e.target.value)}
              />
            </InputWrap>
          </FormGroup>
          <FormGroup label="Additional Cash at Closing" hint="Extra cash to reduce loan / meet down payment">
            <InputWrap prefix="$">
              <input
                type="number"
                value={inputs.addCash}
                onChange={e => setInput('addCash', +e.target.value)}
              />
            </InputWrap>
          </FormGroup>
        </div>
        <div>
          <h3 style={{ marginBottom: '20px', color: 'var(--secondary)' }}>Loan Terms</h3>
          <FormGroup label="Interest Rate" hint="Current conventional rates ~6.0% - 7.0%">
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
          <FormGroup label="Required Down Payment %" hint="Typical: 10-20% for construction loans">
            <InputWrap suffix="%">
              <input
                type="number"
                value={inputs.downPct}
                step={5}
                onChange={e => setInput('downPct', +e.target.value)}
              />
            </InputWrap>
          </FormGroup>
          <FormGroup label="Closing Costs" hint="Typically 2% - 5% of loan amount">
            <InputWrap suffix="%">
              <input
                type="number"
                value={inputs.closePct}
                step={0.5}
                onChange={e => setInput('closePct', +e.target.value)}
              />
            </InputWrap>
          </FormGroup>
          <FormGroup label="PMI Rate (if LTV > 80%)" hint="Private Mortgage Insurance if down < 20%">
            <InputWrap suffix="%">
              <input
                type="number"
                value={inputs.pmiRate}
                step={0.1}
                onChange={e => setInput('pmiRate', +e.target.value)}
              />
            </InputWrap>
          </FormGroup>
          <div className="chk-group">
            <input
              type="checkbox"
              checked={inputs.financeClosingCosts}
              onChange={e => setInput('financeClosingCosts', e.target.checked)}
              id="financeClosing"
            />
            <label htmlFor="financeClosing">Finance closing costs into loan</label>
          </div>
        </div>
      </div>

      {results.downGap > 0 && (
        <Alert type="warn" icon="⚠️">
          <strong>Down Payment Shortfall:</strong> You need {fmt(results.downGap)} more in cash to meet the {inputs.downPct}% down payment requirement.
        </Alert>
      )}
      {results.downGap === 0 && results.needsPMI && (
        <Alert type="warn" icon="⚠️">
          <strong>PMI Required:</strong> LTV of {results.ltv.toFixed(1)}% exceeds 80%. Monthly PMI of {fmt(results.monthlyPMI)} will apply until you reach 80% LTV.
        </Alert>
      )}
      {results.downGap === 0 && !results.needsPMI && (
        <Alert type="success" icon="✅">
          <strong>Great Position!</strong> Your {fmt(results.totDown)} down payment gives you {results.eqPct.toFixed(1)}% equity and no PMI required.
        </Alert>
      )}

      <div className="grid" style={{ marginTop: '25px' }}>
        <Results title="📊 Loan Calculation">
          <Row label="Total Acquisition Cost" value={fmt(results.totAcq)} />
          <Row label="Lot Mortgage Payoff Required" value={fmt(results.lotPayoff)} />
          <Row label="Total Financing Needed" value={fmt(results.finNeed)} />
          <Row label="Required Down Payment" value={`${fmt(results.reqDown)} (${inputs.downPct}%)`} />
          <Row label="Your Lot Equity (w/ appraisal)" value={fmt(results.lotEquityWithAppraisal)} />
          <Row label="Additional Cash" value={fmt(inputs.addCash)} />
          <Row label="Total Down Payment" value={fmt(results.totDown)} />
          <Row label="Loan Amount" value={fmt(results.loanAmt)} total />
        </Results>
        <Results title="💵 Cash Required">
          <Row label="Down Payment Gap (if any)" value={fmt(results.downGap)} />
          <Row label="Closing Costs" value={fmt(results.closeCost)} />
          <div
            className="row"
            style={{
              background: 'var(--primary)',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '6px'
            }}
          >
            <span className="lbl">Cash at Closing</span>
            <span className="val">{fmt(results.totCash)}</span>
          </div>
          {buildResults.preLoanCosts > 0 && (
            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--border)' }}>
              <div className="row" style={{ background: 'rgba(241, 196, 15, 0.15)', padding: '8px 12px', borderRadius: '6px' }}>
                <span className="lbl" style={{ color: 'var(--warning)' }}>⚠️ Pre-Loan Costs (permits, engineering, architect/designer)</span>
                <span className="val" style={{ color: 'var(--warning)' }}>{fmt(buildResults.preLoanCosts)}</span>
              </div>
              <div className="row hint" style={{ fontSize: '.85rem', color: 'var(--text-light)', marginTop: '5px' }}>
                <span>Architect/designer already paid ($9K) + permits/engineering required before loan closing - not financed</span>
              </div>
            </div>
          )}
          <div
            className="row total"
            style={{
              marginTop: '15px',
              background: (results.totCash + buildResults.preLoanCosts) > 150000 ? 'var(--danger)' : (results.totCash + buildResults.preLoanCosts) > 75000 ? 'var(--warning)' : 'var(--primary)'
            }}
          >
            <span className="lbl">Total Out-of-Pocket Cash</span>
            <span className="val">{fmt(results.totCash + buildResults.preLoanCosts)}</span>
          </div>
        </Results>
      </div>

      <div className="grid" style={{ marginTop: '20px' }}>
        <Results title="Monthly Payment Breakdown (PITI)">
          <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginBottom: '15px' }}>
            <strong>PITI</strong> = Principal + Interest + Taxes + Insurance. This is your total monthly housing cost that lenders use to calculate debt-to-income ratio.
          </p>
          <Row label="Principal & Interest" value={fmt(results.monthlyPI)} />
          <Row label="PMI (if applicable)" value={results.needsPMI ? fmt(results.monthlyPMI) : '$0 (no PMI)'} />
          <Row label="Est. Property Tax (1.0%)" value={fmt(results.monthlyTax)} />
          <Row label="Est. Homeowner's Insurance" value={fmt(results.monthlyIns)} />
          <Row label="Total Monthly PITI" value={fmt(results.monthlyTotal)} total />
        </Results>
        <Results title="📈 Equity & Value">
          <Row label="Estimated Completed Value" value={fmt(inputs.estValue)} />
          <Row label="Final Loan Amount" value={fmt(results.loanAmt)} />
          <Row label="Loan-to-Value (LTV)" value={`${results.ltv.toFixed(1)}%`} />
          <Row label="Instant Equity at Completion" value={fmt(results.equity)} highlight />
          <Row label="Equity % of Value" value={`${results.eqPct.toFixed(1)}%`} highlight />
        </Results>
      </div>

      <Alert type="info" icon="📝" style={{ marginTop: '20px' }}>
        <strong>Why Not FHA?</strong> Tillamook County's 2026 FHA loan limit is $541,287 (floor-level, non-metro area). 
        With a financing need of {fmt(results.finNeed)}, FHA would require over {fmt(Math.max(0, results.finNeed - 541287))} in additional cash. 
        Conventional loans have no government limits, no MIP, and your {fmt(inputs.lotEquity)} lot equity counts toward down payment.
      </Alert>

      <Alert type="info" icon="💡" style={{ marginTop: '15px' }}>
        <strong>About Construction-to-Permanent Loans:</strong> A CTP loan combines the construction loan and permanent mortgage into a single loan with one or two closings. 
        During construction, you typically make interest-only payments on drawn funds. After construction completes and you receive the Certificate of Occupancy, 
        the loan converts to a standard amortizing mortgage. Some lenders offer "single-close" products; others require a modification or second closing.
      </Alert>
    </Card>
  );
}

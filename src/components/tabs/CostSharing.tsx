import { useState } from 'react';
import { Card, Alert, Row, Results, FormGroup, InputWrap } from '../ui';
import { useFinance } from '../../contexts/FinanceContext';
import { fmt } from '../../utils/format';
import { ProtectedSection } from '../auth/ProtectedSection';
import { authConfig } from '../../config/auth.config';

export function CostSharing() {
  const { inputs, results, shareInputs, shareResults, setShareInput } = useFinance();
  const [showDetails, setShowDetails] = useState(false);

  // If auth is disabled, render content directly
  if (!authConfig.costSharingEnabled) {
    return <CostSharingContent inputs={inputs} results={results} shareInputs={shareInputs} shareResults={shareResults} setShareInput={setShareInput} showDetails={showDetails} setShowDetails={setShowDetails} />;
  }

  return (
    <ProtectedSection title="Cost Sharing - Login Required">
      <CostSharingContent inputs={inputs} results={results} shareInputs={shareInputs} shareResults={shareResults} setShareInput={setShareInput} showDetails={showDetails} setShowDetails={setShowDetails} />
    </ProtectedSection>
  );
}

// Extracted content component
function CostSharingContent({ inputs, results, shareInputs, shareResults, setShareInput, showDetails, setShowDetails }: {
  inputs: ReturnType<typeof useFinance>['inputs'];
  results: ReturnType<typeof useFinance>['results'];
  shareInputs: ReturnType<typeof useFinance>['shareInputs'];
  shareResults: ReturnType<typeof useFinance>['shareResults'];
  setShareInput: ReturnType<typeof useFinance>['setShareInput'];
  showDetails: boolean;
  setShowDetails: (v: boolean) => void;
}) {
  return (
    <>
      <Card title="Project Funding Breakdown">
        <p style={{ marginBottom: '20px' }}>
          How the project costs break down and what each party needs to contribute based on the finance calculator.
        </p>

        <div className="grid">
          <Results title="Total Project Costs">
            <Row label="Lot Purchase Price" value={fmt(inputs.lotPrice)} />
            <Row label="Construction Cost" value={fmt(inputs.constCost)} />
            <Row label="Closing Costs" value={fmt(results.closeCost)} />
            <Row label="Total Acquisition Cost" value={fmt(results.totAcq + results.closeCost)} total />
          </Results>

          <Results title="Funding Sources">
            <Row label="Construction Loan" value={fmt(results.loanAmt)} />
            <Row label="Lot Equity (already paid)" value={fmt(inputs.lotEquity)} />
            <Row label="Additional Cash at Closing" value={fmt(inputs.addCash)} />
            <Row label="Total Cash Required" value={fmt(results.totCash + inputs.lotEquity)} total />
          </Results>
        </div>

        <Results title="Per-Person Contribution (50/50 Split)" style={{ marginTop: '20px' }}>
          <div className="grid">
            <div>
              <Row label="Tim's Required Contribution" value={fmt(shareResults.eachRequired)} highlight />
              <Row label="Tim's Lot Equity Paid" value={fmt(shareInputs.timLot)} />
              <Row label="Tim's Other Paid (pre-const)" value={fmt(shareInputs.timMtg + shareInputs.timArch + shareInputs.timOther)} />
              <Row label="Tim's Cash at Closing" value={fmt(shareResults.timStillNeeds)} />
              <div className="row" style={{ background: 'rgba(26,95,122,.1)' }}>
                <span className="lbl"><strong>Tim Still Needs to Bring</strong></span>
                <span className="val" style={{ color: 'var(--primary)' }}>{fmt(shareResults.timStillNeeds)}</span>
              </div>
            </div>
            <div>
              <Row label="Lani's Required Contribution" value={fmt(shareResults.eachRequired)} highlight />
              <Row label="Lani's Lot Equity Paid" value={fmt(shareInputs.laniLot)} />
              <Row label="Lani's Other Paid (pre-const)" value={fmt(shareInputs.laniMtg + shareInputs.laniArch + shareInputs.laniOther)} />
              <Row label="Lani's Cash at Closing" value={fmt(shareResults.laniStillNeeds)} />
              <div className="row" style={{ background: 'rgba(87,131,123,.1)' }}>
                <span className="lbl"><strong>Lani Still Needs to Bring</strong></span>
                <span className="val" style={{ color: 'var(--secondary)' }}>{fmt(shareResults.laniStillNeeds)}</span>
              </div>
            </div>
          </div>
        </Results>

        <Alert type="info" icon="💡">
          <strong>How This Works:</strong> The total cash required (lot equity + closing costs + any down payment gap) is split 50/50. 
          Each person's prior contributions count toward their share. The "Still Needs to Bring" amount is what each person owes at closing to achieve equal contribution.
        </Alert>
      </Card>

      <Card>
        <h2
          style={{ cursor: 'pointer', marginBottom: showDetails ? '20px' : 0 }}
          onClick={() => setShowDetails(!showDetails)}
        >
          Contribution Details{' '}
          <span style={{ float: 'right', fontSize: '.8rem', color: 'var(--primary)', fontWeight: 400 }}>
            {showDetails ? '▼ Hide Details' : '▶ Show Details'}
          </span>
        </h2>

        {showDetails && (
          <>
            <p style={{ marginBottom: '20px' }}>
              Tracking contributions to ensure equitable cost sharing. Updates dynamically based on finance calculator values.
            </p>

            <div className="grid">
              <Results title="Contributions to Date">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border)' }}>
                      <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-light)' }}>Expense</th>
                      <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--primary)' }}>Tim</th>
                      <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--secondary)' }}>Lani</th>
                      <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-light)' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 8px' }}>Lot Down Payment</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px' }}>{fmt(shareInputs.timLot)}</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px' }}>{fmt(shareInputs.laniLot)}</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-light)' }}>{fmt(shareInputs.timLot + shareInputs.laniLot)}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 8px' }}>Mortgage Payments</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px' }}>{fmt(shareInputs.timMtg)}</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px' }}>{fmt(shareInputs.laniMtg)}</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-light)' }}>{fmt(shareInputs.timMtg + shareInputs.laniMtg)}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 8px' }}>Architect Fees</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px' }}>{fmt(shareInputs.timArch)}</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px' }}>{fmt(shareInputs.laniArch)}</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-light)' }}>{fmt(shareInputs.timArch + shareInputs.laniArch)}</td>
                    </tr>
                    <tr style={{ background: 'var(--bg)', fontWeight: 600 }}>
                      <td style={{ padding: '12px 8px' }}>Total Paid</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--primary)' }}>{fmt(shareResults.timTotal)}</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--secondary)' }}>{fmt(shareResults.laniTotal)}</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px' }}>{fmt(shareResults.combined)}</td>
                    </tr>
                  </tbody>
                </table>
              </Results>

              <Results title="Balance (50/50 Split)">
                <Row label="Total Expenses" value={fmt(shareResults.combined)} />
                <Row label="Each Should Pay (50%)" value={fmt(shareResults.each)} />
                <Row label="Tim Has Paid" value={fmt(shareResults.timTotal)} />
                <Row label="Lani Has Paid" value={fmt(shareResults.laniTotal)} />
                <div
                  className="row total"
                  style={{ background: shareResults.whoOwes === 'balanced' ? 'var(--success)' : 'var(--warning)' }}
                >
                  <span className="lbl">
                    {shareResults.whoOwes === 'tim' ? 'Tim Owes Lani' : shareResults.whoOwes === 'lani' ? 'Lani Owes Tim' : 'Balanced!'}
                  </span>
                  <span className="val">{fmt(shareResults.diff)}</span>
                </div>
              </Results>
            </div>

            <Alert type="info" icon="💡">
              <strong>Joint Financing Note:</strong> Since the construction loan will be in both names, ongoing mortgage payments will naturally be shared. 
              The imbalance represents pre-construction contributions. You can settle this by:<br />
              • Paying before or at closing<br />
              • Contributing more to closing costs<br />
              • Adjusting ownership percentages accordingly<br />
              • Tracking as a loan between partners
            </Alert>

            <Card style={{ marginTop: '20px', padding: '20px' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '15px' }}>Custom Calculator</h3>
              <p style={{ marginBottom: '15px', fontSize: '.9rem', color: 'var(--text-light)' }}>
                Update values as expenses change:
              </p>
              <div className="grid">
                <div>
                  <FormGroup label="Tim - Lot Down Payment">
                    <InputWrap prefix="$">
                      <input type="number" value={shareInputs.timLot} onChange={e => setShareInput('timLot', +e.target.value)} />
                    </InputWrap>
                  </FormGroup>
                  <FormGroup label="Tim - Mortgage Payments">
                    <InputWrap prefix="$">
                      <input type="number" value={shareInputs.timMtg} onChange={e => setShareInput('timMtg', +e.target.value)} />
                    </InputWrap>
                  </FormGroup>
                  <FormGroup label="Tim - Architect Fees">
                    <InputWrap prefix="$">
                      <input type="number" value={shareInputs.timArch} onChange={e => setShareInput('timArch', +e.target.value)} />
                    </InputWrap>
                  </FormGroup>
                  <FormGroup label="Tim - Other Expenses">
                    <InputWrap prefix="$">
                      <input type="number" value={shareInputs.timOther} onChange={e => setShareInput('timOther', +e.target.value)} />
                    </InputWrap>
                  </FormGroup>
                </div>
                <div>
                  <FormGroup label="Lani - Lot Down Payment">
                    <InputWrap prefix="$">
                      <input type="number" value={shareInputs.laniLot} onChange={e => setShareInput('laniLot', +e.target.value)} />
                    </InputWrap>
                  </FormGroup>
                  <FormGroup label="Lani - Mortgage Payments">
                    <InputWrap prefix="$">
                      <input type="number" value={shareInputs.laniMtg} onChange={e => setShareInput('laniMtg', +e.target.value)} />
                    </InputWrap>
                  </FormGroup>
                  <FormGroup label="Lani - Architect Fees">
                    <InputWrap prefix="$">
                      <input type="number" value={shareInputs.laniArch} onChange={e => setShareInput('laniArch', +e.target.value)} />
                    </InputWrap>
                  </FormGroup>
                  <FormGroup label="Lani - Other Expenses">
                    <InputWrap prefix="$">
                      <input type="number" value={shareInputs.laniOther} onChange={e => setShareInput('laniOther', +e.target.value)} />
                    </InputWrap>
                  </FormGroup>
                </div>
              </div>
              <Results title="Updated Balance" style={{ marginTop: '20px' }}>
                <Row label="Tim Total" value={fmt(shareResults.timTotal)} />
                <Row label="Lani Total" value={fmt(shareResults.laniTotal)} />
                <Row label="Combined Total" value={fmt(shareResults.combined)} />
                <Row label="Each Should Pay (50%)" value={fmt(shareResults.each)} />
                <div
                  className="row total"
                  style={{ background: shareResults.whoOwes === 'balanced' ? 'var(--success)' : 'var(--warning)' }}
                >
                  <span className="lbl">
                    {shareResults.whoOwes === 'tim' ? 'Tim Owes Lani' : shareResults.whoOwes === 'lani' ? 'Lani Owes Tim' : 'Balanced!'}
                  </span>
                  <span className="val">{fmt(shareResults.diff)}</span>
                </div>
              </Results>
            </Card>
          </>
        )}
      </Card>
    </>
  );
}

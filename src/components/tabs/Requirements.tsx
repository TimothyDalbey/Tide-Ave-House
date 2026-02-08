import { Card, Alert, Row, Results } from '../ui';

export function Requirements() {
  return (
    <>
      <Card title="📋 Conventional Construction Loan Requirements">
        <div className="grid">
          <div>
            <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Credit & Financial</h3>
            <ul className="rlist">
              <li>
                <span>•</span>
                <div>
                  <strong>Credit Score: 680+ typically required</strong><br />
                  <span style={{ color: 'var(--text-light)' }}>720+ for best rates; some accept 660+</span>
                </div>
              </li>
              <li>
                <span>•</span>
                <div>
                  <strong>Down Payment: 10-20% typical</strong><br />
                  <span style={{ color: 'var(--text-light)' }}>Land equity counts; 20% avoids PMI</span>
                </div>
              </li>
              <li>
                <span>•</span>
                <div>
                  <strong>Debt-to-Income: 43-45% maximum</strong><br />
                  <span style={{ color: 'var(--text-light)' }}>Based on projected housing payment</span>
                </div>
              </li>
              <li>
                <span>•</span>
                <div>
                  <strong>Cash Reserves: 6-12 months PITI</strong><br />
                  <span style={{ color: 'var(--text-light)' }}>Lenders want contingency funds</span>
                </div>
              </li>
              <li>
                <span>•</span>
                <div><strong>Employment: 2 years stable history</strong></div>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Property & Builder</h3>
            <ul className="rlist">
              <li>
                <span>•</span>
                <div>
                  <strong>Primary or Second Home</strong><br />
                  <span style={{ color: 'var(--text-light)' }}>Investment properties harder to finance</span>
                </div>
              </li>
              <li>
                <span>•</span>
                <div>
                  <strong>Licensed General Contractor</strong><br />
                  <span style={{ color: 'var(--text-light)' }}>Must be approved by lender</span>
                </div>
              </li>
              <li>
                <span>•</span>
                <div>
                  <strong>Fixed-price construction contract</strong><br />
                  <span style={{ color: 'var(--text-light)' }}>Detailed specs and draw schedule</span>
                </div>
              </li>
              <li>
                <span>•</span>
                <div>
                  <strong>Builder's Risk Insurance</strong><br />
                  <span style={{ color: 'var(--text-light)' }}>Coverage during construction</span>
                </div>
              </li>
              <li>
                <span>•</span>
                <div>
                  <strong>Plans & Permits Required</strong><br />
                  <span style={{ color: 'var(--text-light)' }}>Approved before closing</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Alert type="success" icon="✅">
          <strong>No Loan Limit!</strong> Unlike FHA, conventional loans have no government-imposed loan limits. 
          The limit is based on the lender's own guidelines, your qualifications, and the appraised value of the completed home.
        </Alert>
      </Card>

      <Card title="📊 Conventional vs FHA Comparison">
        <Results>
          <Row label="Loan Limit" value="None (Conventional) vs $541,287 (FHA Tillamook)" />
          <Row label="Down Payment" value="10-20% (Conv) vs 3.5% (FHA)" />
          <Row label="Upfront MIP" value="None (Conv) vs 1.75% (FHA)" />
          <Row label="Annual MIP/PMI" value="PMI drops at 80% LTV (Conv) vs MIP for loan life (FHA)" />
          <Row label="Credit Score" value="680+ typical (Conv) vs 580+ (FHA)" />
          <Row label="Best For This Project" value="Conventional ✓" highlight />
        </Results>
      </Card>
    </>
  );
}

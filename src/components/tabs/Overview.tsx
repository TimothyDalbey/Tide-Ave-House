import { Card, Alert, Row, Results, Spec, StatusItem } from '../ui';
import { useBuild } from '../../contexts/BuildContext';
import { useFinance } from '../../contexts/FinanceContext';
import { useStatus } from '../../contexts/StatusContext';
import { formatCurrency } from '../../utils/format';
import { statusItems } from '../../constants';

export function Overview() {
  const { inputs: buildInputs, results: buildResults } = useBuild();
  const { inputs: financeInputs, results: financeResults } = useFinance();
  const { status, toggle } = useStatus();

  const lotPrice = financeInputs.lotPrice;
  const lotEquity = financeInputs.lotEquity;
  // Calculate estimated value from price per sqft 
  const sqft = buildResults.sqft || 1600;
  const pricePerSqft = parseInt(financeInputs.valueGain) || 800;
  const estValue = financeInputs.estValue || (sqft * pricePerSqft);
  const equity = estValue - financeResults.loanAmt;
  
  // Phase 0 costs (pre-build)
  const phase0Total = buildResults.phase0Total > 0 ? buildResults.phase0Total : (buildInputs.permits + buildInputs.engineering + buildInputs.architect);
  const totalPhase0WithLot = lotPrice + phase0Total;

  return (
    <>
      <Card title="🌊 Project Overview">
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          The Tide Ave. House is a planned coastal residence in Tillamook County, Oregon. 
          <strong>Beachfront lot with full ocean view.</strong> This project involves constructing 
          a single-floor home on an already-owned lot, paid for with cash. 
          utilizing a <strong>conventional construction-to-permanent loan</strong>.
        </p>
        <div className="specs">
          <Spec value="2" label="Bedrooms" />
          <Spec value="2.5" label="Bathrooms" />
          <Spec value="1" label="Story" />
          <Spec value={formatCurrency(estValue)} label="Est. Value" />
        </div>
      </Card>

      <Card title="🔔 Current Status">
        <Alert type="info" icon="⏳">
          <strong>Pending: Architect's Completed Plans</strong><br />
          We are currently waiting for the final architectural plans to be completed. Once received, we can proceed with builder selection and loan pre-qualification.
        </Alert>
      </Card>

      <div className="grid">
        <Card title="📋 Phase 0: Pre-Build (Complete)">
          <ul className="rlist">
            <li>
              <span className="chk">✓</span>
              <div>
                <strong>Lot Purchased</strong><br />
                <span style={{ color: 'var(--text-light)' }}>{formatCurrency(lotPrice)} with {formatCurrency(lotEquity)} down payment</span>
              </div>
            </li>
            <li>
              <span className="chk">✓</span>
              <div>
                <strong>Geotechnical Study</strong><br />
                <span style={{ color: 'var(--text-light)' }}>Helical piles recommended for west side; no elevated foundation required</span>
              </div>
            </li>
            <li>
              <span className="chk">✓</span>
              <div>
                <strong>Septic Permits</strong><br />
                <span style={{ color: 'var(--text-light)' }}>Permits obtained</span>
              </div>
            </li>
            <li>
              <span className="chk">✓</span>
              <div>
                <strong>Utilities Arranged</strong><br />
                <span style={{ color: 'var(--text-light)' }}>Electrical and water concerns addressed</span>
              </div>
            </li>
            <li>
              <span className="chk">✓</span>
              <div>
                <strong>Architect/Designer</strong><br />
                <span style={{ color: 'var(--text-light)' }}>{formatCurrency(buildInputs.architect)} — paid</span>
              </div>
            </li>
            <li>
              <span className="chk wip">⏳</span>
              <div>
                <strong>Structural Engineering</strong><br />
                <span style={{ color: 'var(--warning)' }}>In progress — {formatCurrency(buildInputs.engineering)} budgeted</span>
              </div>
            </li>
            <li>
              <span className="chk">○</span>
              <div>
                <strong>Building Permits</strong><br />
                <span style={{ color: 'var(--text-light)' }}>{formatCurrency(buildInputs.permits)} budgeted</span>
              </div>
            </li>
          </ul>
          <div style={{ background: 'rgba(241, 196, 15, 0.1)', padding: '12px', borderRadius: '8px', marginTop: '15px' }}>
            <Row label="Phase 0 (excl. lot)" value={formatCurrency(phase0Total)} />
            <Row label="Lot Purchase" value={formatCurrency(lotPrice)} />
            <Row label="Total Phase 0 Investment" value={formatCurrency(totalPhase0WithLot)} total />
          </div>
        </Card>

        <Card title="📊 Project Summary">
          <Results>
            <div style={{ background: 'rgba(241, 196, 15, 0.1)', padding: '8px 10px', borderRadius: '6px', marginBottom: '10px' }}>
              <Row label="Phase 0: Pre-Build + Lot" value={formatCurrency(totalPhase0WithLot)} style={{ fontWeight: 'bold' }} />
            </div>
            <Row label="Construction Cost (Phase 1 + 2)" value={formatCurrency(buildResults.financedTotal)} />
            <Row label="Estimated Completed Value" value={formatCurrency(estValue)} />
            <Row label="Lot Loan After Build" value={formatCurrency(financeResults.newLoanAmount)} />
            <Row label="Projected Equity at Completion" value={formatCurrency(equity)} highlight />
          </Results>
        </Card>
      </div>

      <Card title="📊 Project Status Tracker">
        <p style={{ marginBottom: '5px' }}>Click items to toggle status. Progress saved automatically.</p>
        <p style={{ marginBottom: '20px', fontSize: '.9rem', color: 'var(--text-light)' }}>
          <span style={{ color: 'var(--success)' }}>●</span> Completed{' '}
          <span style={{ color: 'var(--warning)' }}>●</span> In Progress{' '}
          <span style={{ color: 'var(--border)' }}>●</span> Not Started
        </p>

        <div className="tl">
          {statusItems.preConstruction.map(item => (
            <StatusItem
              key={item.id}
              status={status[item.id] || ''}
              title={item.title}
              note={item.note}
              onClick={() => toggle(item.id)}
            />
          ))}
        </div>

        <div className="milestone">
          <div className="milestone-icon">📋</div>
          <div className="milestone-content">
            <h3>✅ READY TO BUILD!</h3>
            <p>Lot purchased, diligence complete, plans approved, permits in hand. Let's go!</p>
          </div>
        </div>

        <div className="tl">
          {statusItems.construction.filter(item => 
            ['site', 'sepinst', 'found', 'utilinst', 'frame', 'roof', 'siding', 'windows', 'extdoors'].includes(item.id)
          ).map(item => (
            <StatusItem
              key={item.id}
              status={status[item.id] || ''}
              title={item.title}
              note={item.note}
              onClick={() => toggle(item.id)}
            />
          ))}
        </div>

        <div className="milestone">
          <div className="milestone-icon">🏠</div>
          <div className="milestone-content">
            <h3>🎉 MAJOR MILESTONE: Dried In!</h3>
            <p>Shell complete &amp; weather-tight. Protected from the elements!</p>
          </div>
        </div>

        <div className="tl">
          {statusItems.construction.filter(item => 
            ['mep', 'ins', 'dry', 'ceiling', 'floor', 'cab', 'intdoors', 'bath', 'appl', 'paint', 'ext'].includes(item.id)
          ).map(item => (
            <StatusItem
              key={item.id}
              status={status[item.id] || ''}
              title={item.title}
              note={item.note}
              onClick={() => toggle(item.id)}
            />
          ))}
          {statusItems.completion.map(item => (
            <StatusItem
              key={item.id}
              status={status[item.id] || ''}
              title={item.title}
              note={item.note}
              onClick={() => toggle(item.id)}
            />
          ))}
        </div>

        <div className="milestone">
          <div className="milestone-icon">🎉</div>
          <div className="milestone-content">
            <h3>🏡 MOVE IN READY!</h3>
            <p>Construction complete. Welcome home!</p>
          </div>
        </div>
      </Card>
    </>
  );
}

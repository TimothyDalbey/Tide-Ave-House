import { Card, Alert, Row, Results, Spec, StatusItem } from '../ui';
import { useBuild } from '../../contexts/BuildContext';
import { useFinance } from '../../contexts/FinanceContext';
import { useStatus } from '../../contexts/StatusContext';
import { formatCurrency } from '../../utils/format';
import { statusItems } from '../../constants';

export function Overview() {
  const { results: buildResults } = useBuild();
  const { inputs: financeInputs, results: financeResults } = useFinance();
  const { status, toggle } = useStatus();

  const lotPrice = financeInputs.lotPrice;
  const lotEquity = financeInputs.lotEquity;
  const constCost = buildResults.grandTotal > 0 ? buildResults.grandTotal : financeInputs.constCost;
  // Calculate estimated value dynamically: (lot + construction) * value gain multiplier
  const valueGainMultiplier = parseFloat(financeInputs.valueGain) || 1.35;
  const estValue = Math.round((lotPrice + constCost) * valueGainMultiplier);
  const equity = estValue - financeResults.loanAmt;

  return (
    <>
      <Card title="🌊 Project Overview">
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          The Tide Ave. House is a planned coastal residence in Tillamook County, Oregon. 
          This project involves financing and constructing a single-floor home on an already-owned lot, 
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
        <Card title="✅ Completed Pre-Construction">
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
              <span className="chk wip">⏳</span>
              <div>
                <strong>Final Architectural Plans</strong><br />
                <span style={{ color: 'var(--primary-light)' }}>In progress — awaiting completion from architect</span>
              </div>
            </li>
          </ul>
        </Card>

        <Card title="📋 Project Summary">
          <Results>
            <Row label="Lot Value" value={formatCurrency(lotPrice)} />
            <Row label="Current Equity in Lot" value={formatCurrency(lotEquity)} />
            <Row label="Estimated Construction Cost" value={formatCurrency(constCost)} />
            <Row label="Estimated Completed Value" value={formatCurrency(estValue)} />
            <Row label="Projected Equity at Completion" value={formatCurrency(equity)} highlight />
          </Results>
        </Card>
      </div>

      <Card title="📊 Project Status Tracker">
        <p style={{ marginBottom: '5px' }}>Click items to toggle status. Progress saved automatically.</p>
        <p style={{ marginBottom: '20px', fontSize: '.9rem', color: 'var(--text-light)' }}>
          <span style={{ color: 'var(--success)' }}>●</span> Completed{' '}
          <span style={{ color: 'var(--primary-light)' }}>●</span> In Progress{' '}
          <span style={{ color: 'var(--border)' }}>●</span> Not Started
        </p>

        <div className="tl">
          {[
            ...statusItems.preConstruction,
            ...statusItems.financing,
            ...statusItems.construction,
            ...statusItems.completion
          ].map(item => (
            <StatusItem
              key={item.id}
              status={status[item.id] || ''}
              title={item.title}
              note={item.note}
              onClick={() => toggle(item.id)}
            />
          ))}
        </div>
      </Card>
    </>
  );
}

import { Card, StatusItem } from '../ui';
import { useStatus } from '../../contexts/StatusContext';
import { statusItems } from '../../constants';

export function StatusTracker() {
  const { status, toggle, reset } = useStatus();

  return (
    <Card title="📊 Project Status Tracker">
      <p style={{ marginBottom: '5px' }}>Click items to toggle status. Progress saved automatically.</p>
      <p style={{ marginBottom: '20px', fontSize: '.9rem', color: 'var(--text-light)' }}>
        <span style={{ color: 'var(--success)' }}>●</span> Completed{' '}
        <span style={{ color: 'var(--warning)' }}>●</span> In Progress{' '}
        <span style={{ color: 'var(--border)' }}>●</span> Not Started
      </p>

      <div className="stat-sec">
        <h3>Pre-Construction Phase</h3>
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
      </div>

      <div className="milestone">
        <div className="milestone-icon">📋</div>
        <div className="milestone-content">
          <h3>✅ READY TO BUILD!</h3>
          <p>Lot purchased, diligence complete, plans approved, permits in hand. Let's go!</p>
        </div>
      </div>

      <div className="stat-sec">
        <h3>Construction Phase 1: Shell / Dry-In</h3>
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
      </div>

      <div className="milestone">
        <div className="milestone-icon">🏠</div>
        <div className="milestone-content">
          <h3>🎉 MAJOR MILESTONE: Dried In!</h3>
          <p>Shell complete &amp; weather-tight. Protected from the elements!</p>
        </div>
      </div>

      <div className="stat-sec">
        <h3>Construction Phase 2: Interior Finishes</h3>
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
        </div>
      </div>

      <div className="stat-sec">
        <h3>Completion Phase</h3>
        <div className="tl">
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
      </div>

      <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
        <button
          onClick={reset}
          style={{
            padding: '10px 20px',
            background: 'var(--text-light)',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Reset All Status
        </button>
      </div>
    </Card>
  );
}

import { useState } from 'react';
import { Overview, BuildCosts, Calculator, Lenders, Requirements, Process, StatusTracker, CostSharing, STRAnalysis } from './components/tabs';

type TabId = 'overview' | 'buildcost' | 'calculator' | 'str' | 'lenders' | 'requirements' | 'process' | 'status' | 'costs';

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'buildcost', label: 'Build Costs' },
  { id: 'calculator', label: 'Finance Calculator' },
  { id: 'str', label: 'STR Analysis' },
  { id: 'lenders', label: 'Lenders' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'process', label: 'Building Process' },
  { id: 'status', label: 'Status Tracker' },
  { id: 'costs', label: 'Cost Sharing' },
];

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleTabClick = (id: TabId) => {
    setActiveTab(id);
    setMobileNavOpen(false);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'overview': return <Overview />;
      case 'buildcost': return <BuildCosts />;
      case 'calculator': return <Calculator />;
      case 'str': return <STRAnalysis />;
      case 'lenders': return <Lenders />;
      case 'requirements': return <Requirements />;
      case 'process': return <Process />;
      case 'status': return <StatusTracker />;
      case 'costs': return <CostSharing />;
      default: return <Overview />;
    }
  };

  return (
    <>
      <header>
        <h1>Lani and Tim Build A Coastie House</h1>
        <p>Our Coastal Home Construction Journey - Finance &amp; Progress Tracker</p>
        <div className="badge">Tillamook County, Oregon</div>
      </header>

      <div className="container">
        {/* Mobile hamburger menu */}
        <button
          className="hamburger"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span className="hamburger-icon">{mobileNavOpen ? '✕' : '☰'}</span>
          <span className="hamburger-label">Menu</span>
        </button>

        {/* Mobile navigation */}
        <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop tabs */}
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {renderTab()}
      </div>

      <footer>
        <p>Lani and Tim Build A Coastie House</p>
        <p style={{ marginTop: '5px' }}>
          <a href="/tide-ave/sources.html">Sources & Citations</a>
        </p>
        <p style={{ marginTop: '5px' }}>© 2026 | Tillamook County, Oregon</p>
      </footer>
    </>
  );
}

export default App;

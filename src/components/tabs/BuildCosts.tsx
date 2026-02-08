import { useState } from 'react';
import { Card, Alert, Row, Results, FormGroup, InputWrap } from '../ui';
import { useBuild } from '../../contexts/BuildContext';
import { gradeOptions, gradeDescriptions } from '../../constants';
import { costExplanations } from '../../constants/costExplanations';
import { fmt } from '../../utils/format';

export function BuildCosts() {
  const { inputs, results, setInput, updateFinishGrade } = useBuild();
  const gradeInfo = gradeDescriptions[inputs.finishGrade];
  const [showExplanations, setShowExplanations] = useState(false);

  return (
    <>
      <Card title="🏗️ Construction Cost Estimator">
        <p style={{ marginBottom: '15px' }}>
          Detailed cost breakdown for the Tide Ave. House. Based on 2025-2026 Oregon coastal construction rates. 
          Adjust values to match your specifications.
        </p>
        <Alert type="info" icon="📐">
          <strong>Home Specs:</strong> 1,600 sq ft single-story | Wood frame | Shed metal roof | 
          Drywall interior | Wood floors & ceiling | Mid-to-high-mid grade finishes | Fiberglass windows
        </Alert>

        <div className="grid" style={{ marginTop: '20px' }}>
          <div>
            <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Base Parameters</h3>
            <FormGroup label="Square Footage">
              <InputWrap suffix="sf">
                <input
                  type="number"
                  value={inputs.sqft}
                  onChange={e => setInput('sqft', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>
            <FormGroup label="Roof Area" hint="Single-pitch shed roof ≈ floor area">
              <InputWrap suffix="sf">
                <input
                  type="number"
                  value={inputs.roofSqft}
                  onChange={e => setInput('roofSqft', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>
            <FormGroup label="Exterior Wall Linear Feet">
              <InputWrap suffix="lf">
                <input
                  type="number"
                  value={inputs.wallLf}
                  onChange={e => setInput('wallLf', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>
            <FormGroup label="Wall Height">
              <InputWrap suffix="ft">
                <input
                  type="number"
                  value={inputs.wallHt}
                  onChange={e => setInput('wallHt', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>
          </div>
          <div>
            <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Quality Multiplier</h3>
            <FormGroup label="Finish Grade">
              <select
                value={inputs.finishGrade}
                onChange={e => updateFinishGrade(e.target.value)}
              >
                {gradeOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </FormGroup>
            <div style={{ background: 'var(--bg)', padding: '12px 15px', borderRadius: '8px', marginBottom: '15px', fontSize: '.9rem', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--secondary)' }}>{gradeInfo.title}:</strong> {gradeInfo.description}
            </div>
            <FormGroup label="Location Factor" hint="Multiplier for regional cost differences (1 = no adjustment)">
              <InputWrap suffix="x">
                <input
                  type="number"
                  value={inputs.locFactor}
                  step={0.05}
                  onChange={e => setInput('locFactor', +e.target.value)}
                />
              </InputWrap>
            </FormGroup>
            <div style={{ background: 'var(--bg)', padding: '12px 15px', borderRadius: '8px', marginBottom: '15px', fontSize: '.9rem', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text-light)' }}>Location Factor:</strong> Adjusts the total by a multiplier if your estimates don't already account for regional pricing. 
              Set to 1.0 if your itemized costs already reflect local rates. Use 1.10-1.20 only if using national averages that need coastal Oregon adjustment.
            </div>
          </div>
        </div>
      </Card>

      <Card title="📋 Itemized Cost Breakdown">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <p style={{ fontSize: '.9rem', color: 'var(--text-light)', margin: 0 }}>
            Costs editable for custom estimates.
          </p>
          <button
            onClick={() => setShowExplanations(!showExplanations)}
            style={{
              padding: '6px 12px',
              fontSize: '.85rem',
              background: showExplanations ? 'var(--primary)' : 'var(--bg)',
              color: showExplanations ? '#fff' : 'var(--text)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {showExplanations ? '🔽 Hide Explanations' : '📊 Show Cost Sources'}
          </button>
        </div>

        {showExplanations && (
          <Alert type="info" icon="📚" style={{ marginBottom: '20px' }}>
            <strong>Estimate Methodology:</strong> Oregon basic construction costs $250-$350/sf (HomeGuide 2024). 
            For a simple 1,600 sf single-story with shed roof, estimates target the lower end of complexity. 
            Ranges shown as Low / Estimate / High based on HomeGuide, local contractors, and actual bids.
          </Alert>
        )}

        <Results title="🔨 Site Work & Foundation">
          <CostRowWithExplanation label="Site Prep (grading already done)" value={inputs.sitePrep} field="sitePrep" setInput={setInput} explanation={costExplanations.sitePrep} show={showExplanations} />
          <CostRowWithExplanation label="Tree Removal (large tree)" value={inputs.tree} field="tree" setInput={setInput} explanation={costExplanations.tree} show={showExplanations} />
          <CostRowWithExplanation label="Retaining Wall (poured concrete, part of foundation)" value={inputs.retaining} field="retaining" setInput={setInput} explanation={costExplanations.retaining} show={showExplanations} />
          <div className="row" style={{ background: 'rgba(39,174,96,.05)' }}>
            <span className="lbl" style={{ paddingLeft: '20px' }}>↳ Neighbor Contribution</span>
            <div>
              <span className="val" style={{ color: 'var(--success)' }}>-{fmt(inputs.neighborShare)}</span>
              <input type="number" value={inputs.neighborShare} onChange={e => setInput('neighborShare', +e.target.value)} style={{ width: '100px', marginLeft: '10px', padding: '4px 8px' }} />
            </div>
          </div>
          <CostRowWithExplanation label="Foundation (crawl space w/ helical pylons west side)" value={inputs.foundation} field="foundation" setInput={setInput} explanation={costExplanations.foundation} show={showExplanations} />
          <CostRowWithExplanation label="Septic System (already permitted)" value={inputs.septic} field="septic" setInput={setInput} explanation={costExplanations.septic} show={showExplanations} />
          <CostRowWithExplanation label="Water & Utility Connections" value={inputs.utility} field="utility" setInput={setInput} explanation={costExplanations.utility} show={showExplanations} />
        </Results>

        <Results title="🪵 Framing & Structure">
          <div className="row">
            <span className="lbl">Wood Framing ($/sf: ${inputs.framing})</span>
            <div>
              <span className="val">{fmt(results.framingCost)}</span>
              <input type="number" value={inputs.framing} onChange={e => setInput('framing', +e.target.value)} style={{ width: '80px', marginLeft: '10px', padding: '4px 8px' }} />/sf
            </div>
          </div>
          {showExplanations && <ExplanationRow explanation={costExplanations.framing} />}
          <CostRowWithExplanation label="Sheathing & House Wrap" value={inputs.sheath} field="sheath" setInput={setInput} explanation={costExplanations.sheath} show={showExplanations} />
        </Results>

        <Results title="🏠 Exterior">
          <div className="row">
            <span className="lbl">Metal Shed Roof - Single Pitch ($/sf: ${inputs.roofing})</span>
            <div>
              <span className="val">{fmt(results.roofCost)}</span>
              <input type="number" value={inputs.roofing} onChange={e => setInput('roofing', +e.target.value)} style={{ width: '80px', marginLeft: '10px', padding: '4px 8px' }} />/sf
            </div>
          </div>
          {showExplanations && <ExplanationRow explanation={costExplanations.roofing} />}
          <CostRowWithExplanation label="Exterior Siding & Trim" value={inputs.siding} field="siding" setInput={setInput} explanation={costExplanations.siding} show={showExplanations} />
          <CostRowWithExplanation label="⭐ Premium Windows (coastal-grade)" value={inputs.windows} field="windows" setInput={setInput} explanation={costExplanations.windows} show={showExplanations} />
          <CostRowWithExplanation label="⭐ Exterior Doors (3 sliders + entry + sauna)" value={inputs.extDoors} field="extDoors" setInput={setInput} explanation={costExplanations.extDoors} show={showExplanations} />
          <CostRowWithExplanation label="Gutters & Downspouts" value={inputs.gutters} field="gutters" setInput={setInput} explanation={costExplanations.gutters} show={showExplanations} />
        </Results>

        <Results title="⚡ Mechanical, Electrical, Plumbing (MEP)">
          <CostRowWithExplanation label="Electrical (panel, wiring, fixtures)" value={inputs.electric} field="electric" setInput={setInput} explanation={costExplanations.electric} show={showExplanations} />
          <CostRowWithExplanation label="Plumbing (2.5 bath, kitchen, laundry)" value={inputs.plumbing} field="plumbing" setInput={setInput} explanation={costExplanations.plumbing} show={showExplanations} />
          <CostRowWithExplanation label="HVAC (heat pump / mini-split)" value={inputs.hvac} field="hvac" setInput={setInput} explanation={costExplanations.hvac} show={showExplanations} />
        </Results>

        <Results title="🧱 Insulation & Drywall">
          <CostRowWithExplanation label="Insulation (walls, ceiling, floor)" value={inputs.insulation} field="insulation" setInput={setInput} explanation={costExplanations.insulation} show={showExplanations} />
          <CostRowWithExplanation label="Drywall (install, tape, texture)" value={inputs.drywall} field="drywall" setInput={setInput} explanation={costExplanations.drywall} show={showExplanations} />
          <DiyRow
            label="Interior Painting"
            value={inputs.paint}
            field="paint"
            diyChecked={inputs.diyPaint}
            diyField="diyPaint"
            diySave={inputs.diyPaintSave}
            diySaveField="diyPaintSave"
            setInput={setInput}
          />
          {showExplanations && <ExplanationRow explanation={costExplanations.paint} />}
        </Results>

        <Results title="🪟 Interior Finishes">
          <DiyPerSfRow
            label={`⭐ Premium Hardwood Flooring ($/sf: $${inputs.flooring})`}
            cost={results.flooringCost}
            rate={inputs.flooring}
            rateField="flooring"
            diyChecked={inputs.diyFlooring}
            diyField="diyFlooring"
            diySave={inputs.diyFlooringSave}
            diySaveField="diyFlooringSave"
            sqft={inputs.sqft}
            setInput={setInput}
          />
          {showExplanations && <ExplanationRow explanation={costExplanations.flooring} />}
          <DiyPerSfRow
            label={`Wood Ceiling ($/sf: $${inputs.ceiling})`}
            cost={results.ceilingCost}
            rate={inputs.ceiling}
            rateField="ceiling"
            diyChecked={inputs.diyCeiling}
            diyField="diyCeiling"
            diySave={inputs.diyCeilingSave}
            diySaveField="diyCeilingSave"
            sqft={inputs.sqft}
            setInput={setInput}
          />
          {showExplanations && <ExplanationRow explanation={costExplanations.ceiling} />}
          <DiyRow
            label="⭐ CVG Fir Interior Doors (incl. office doubles)"
            value={inputs.intDoors}
            field="intDoors"
            diyChecked={inputs.diyDoors}
            diyField="diyDoors"
            diySave={inputs.diyDoorsSave}
            diySaveField="diyDoorsSave"
            setInput={setInput}
          />
          {showExplanations && <ExplanationRow explanation={costExplanations.intDoors} />}
          <DiyRow
            label="Trim (door/window casing only)"
            value={inputs.trim}
            field="trim"
            diyChecked={inputs.diyTrim}
            diyField="diyTrim"
            diySave={inputs.diyTrimSave}
            diySaveField="diyTrimSave"
            setInput={setInput}
          />
          {showExplanations && <ExplanationRow explanation={costExplanations.trim} />}
        </Results>

        <Results title="🍳 Kitchen & Bath">
          <DiyRow
            label="Kitchen Cabinets (mid-high grade)"
            value={inputs.cabinets}
            field="cabinets"
            diyChecked={inputs.diyCabinets}
            diyField="diyCabinets"
            diySave={inputs.diyCabinetsSave}
            diySaveField="diyCabinetsSave"
            setInput={setInput}
          />
          {showExplanations && <ExplanationRow explanation={costExplanations.cabinets} />}
          <CostRowWithExplanation label="Countertops (quartz/granite)" value={inputs.counters} field="counters" setInput={setInput} explanation={costExplanations.counters} show={showExplanations} />
          <CostRowWithExplanation label="Appliances (mid-high grade package)" value={inputs.appliances} field="appliances" setInput={setInput} explanation={costExplanations.appliances} show={showExplanations} />
          <CostRowWithExplanation label="Bathroom Fixtures & Tile (2.5 bath)" value={inputs.bathFixtures} field="bathFixtures" setInput={setInput} explanation={costExplanations.bathFixtures} show={showExplanations} />
        </Results>

        <Results title="📄 Soft Costs & Fees">
          <CostRowWithExplanation label="⚠️ Permits & Fees (pre-loan cost)" value={inputs.permits} field="permits" setInput={setInput} explanation={costExplanations.permits} show={showExplanations} />
          {showExplanations && (
            <div style={{ background: 'var(--bg)', padding: '12px 15px', borderRadius: '8px', marginBottom: '10px', fontSize: '.85rem' }}>
              <div style={{ background: 'rgba(241, 196, 15, 0.15)', padding: '8px 12px', borderRadius: '4px', marginBottom: '10px', border: '1px solid rgba(241, 196, 15, 0.3)' }}>
                <strong style={{ color: 'var(--warning)' }}>⚠️ Pre-Loan Cost:</strong> Permits must be obtained before loan closing. This ${fmt(inputs.permits)} is paid out-of-pocket and is <em>not</em> included in the financed construction cost.
              </div>
              <strong style={{ color: 'var(--secondary)', display: 'block', marginBottom: '8px' }}>📋 Tillamook County Permits Breakdown:</strong>
              <table style={{ width: '100%', fontSize: '.85rem' }}>
                <tbody>
                  <tr><td>Building Permit (structural, based on valuation)</td><td style={{ textAlign: 'right' }}>$2,000 - $3,000</td></tr>
                  <tr><td>Electrical Permit</td><td style={{ textAlign: 'right' }}>$300 - $500</td></tr>
                  <tr><td>Plumbing Permit</td><td style={{ textAlign: 'right' }}>$250 - $400</td></tr>
                  <tr><td>Mechanical Permit (mini-splits)</td><td style={{ textAlign: 'right' }}>$150 - $300</td></tr>
                  <tr><td>Zoning Permit</td><td style={{ textAlign: 'right' }}>$150 - $250</td></tr>
                  <tr><td>Septic/Sanitation Permit</td><td style={{ textAlign: 'right' }}>$800 - $1,200</td></tr>
                  <tr><td><strong>School Excise Tax</strong> (Neah-Kah-Nie SD @ $1.00/sf)</td><td style={{ textAlign: 'right' }}><strong>$1,600</strong></td></tr>
                  <tr style={{ borderTop: '1px solid var(--border)' }}><td><em>Subtotal (typical permits)</em></td><td style={{ textAlign: 'right' }}><em>$5,250 - $7,250</em></td></tr>
                </tbody>
              </table>
              <div style={{ marginTop: '10px', color: 'var(--text-light)', fontSize: '.8rem' }}>
                <strong>May also need:</strong> Floodplain Development Permit (if in flood zone) | Geohazard/Beach & Dune Permit (coastal properties)
              </div>
            </div>
          )}
          <div className="row">
            <span className="lbl">Architect/Design <span style={{ color: 'var(--text-light)', fontWeight: 'normal' }}>(tracked in Cost Sharing)</span></span>
            <span className="val">$0</span>
          </div>
          <CostRowWithExplanation label="Builder's Risk Insurance" value={inputs.insurance} field="insurance" setInput={setInput} explanation={costExplanations.insurance} show={showExplanations} />
          <div className="row">
            <span className="lbl">Construction Manager Fee (% of hard costs)</span>
            <div>
              <span className="val">{inputs.ownerBuilder ? '$0 (Owner-Builder)' : fmt(results.gcFeeCalc)}</span>
              <input type="number" value={inputs.gcFee} onChange={e => setInput('gcFee', +e.target.value)} style={{ width: '80px', marginLeft: '10px', padding: '4px 8px' }} />%
            </div>
          </div>
          {showExplanations && <ExplanationRow explanation={costExplanations.gcFee} />}
          <div className="row" style={{ background: 'var(--bg)' }}>
            <label className="lbl" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={inputs.ownerBuilder}
                onChange={e => setInput('ownerBuilder', e.target.checked)}
                style={{ marginRight: '8px' }}
              />
              Owner-Builder (eliminate CM fee)
            </label>
            <span className="val" style={{ color: 'var(--success)' }}>
              {inputs.ownerBuilder ? `Saving ${fmt(results.gcSavingsAmt)}` : ''}
            </span>
          </div>
        </Results>

        <Results title="🌳 Site Finishing">
          <CostRowWithExplanation label="Gravel Driveway & Parking" value={inputs.driveway} field="driveway" setInput={setInput} explanation={costExplanations.driveway} show={showExplanations} />
          <DiyRow
            label="Basic Landscaping"
            value={inputs.landscape}
            field="landscape"
            diyChecked={inputs.diyLandscape}
            diyField="diyLandscape"
            diySave={inputs.diyLandscapeSave}
            diySaveField="diyLandscapeSave"
            setInput={setInput}
          />
          {showExplanations && <ExplanationRow explanation={costExplanations.landscape} />}
          <DiyRow
            label="Deck/Patio (if included)"
            value={inputs.deck}
            field="deck"
            diyChecked={inputs.diyDeck}
            diyField="diyDeck"
            diySave={inputs.diyDeckSave}
            diySaveField="diyDeckSave"
            setInput={setInput}
          />
          {showExplanations && <ExplanationRow explanation={costExplanations.deck} />}
        </Results>

        <Results title="📉 Cost Reductions">
          <div className="row">
            <span className="lbl">Single-Story Accessibility Savings</span>
            <div>
              <span className="val">-{fmt(inputs.accessSave)}</span>
              <input type="number" value={inputs.accessSave} onChange={e => setInput('accessSave', +e.target.value)} style={{ width: '100px', marginLeft: '10px', padding: '4px 8px' }} />
            </div>
          </div>
          <div className="hint" style={{ marginTop: '5px', paddingLeft: '10px' }}>
            Single-level = no stairs, simpler framing, easier trade access, reduced scaffolding
          </div>
          {results.totalDiySavings > 0 && (
            <Row label="Owner Labor Savings (DIY)" value={`-${fmt(results.totalDiySavings)}`} style={{ marginTop: '10px', color: 'var(--success)' }} />
          )}
        </Results>
      </Card>

      <Card title="📊 Cost Summary">
        <div className="grid">
          <Results title="By Category">
            <Row label="Site Work & Foundation" value={fmt(results.catSite)} />
            <Row label="Framing & Structure" value={fmt(results.catFrame)} />
            <Row label="Exterior (roof, siding, windows, doors)" value={fmt(results.catExt)} />
            <Row label="MEP (electrical, plumbing, HVAC)" value={fmt(results.catMep)} />
            <Row label="Insulation & Drywall" value={fmt(results.catInsul)} />
            <Row label="Interior Finishes" value={fmt(results.catInt)} />
            <Row label="Kitchen & Bath" value={fmt(results.catKb)} />
            <Row label="Soft Costs & GC Fee" value={fmt(results.catSoft)} />
            <Row label="Site Finishing" value={fmt(results.catFinish)} />
            <div className="row" style={{ color: 'var(--success)' }}>
              <span className="lbl">Total Savings (Single-Story + DIY Labor)</span>
              <span className="val">-{fmt(results.catSavings)}</span>
            </div>
          </Results>
          <Results title="Totals">
            <Row label="Base Construction Cost (financed)" value={fmt(results.baseTotal)} />
            <div className="row" style={{ fontSize: '.85rem', color: 'var(--text-light)' }}>
              <span className="lbl">↳ Finish grade applied to line items (windows, cabinets, flooring, etc.)</span>
              <span className="val"></span>
            </div>
            <Row label="Location Factor (Coastal)" value={`${results.locAdj >= 0 ? '+' : ''}${fmt(results.locAdj)}`} />
            <Row label="Financed Construction Cost" value={fmt(results.financedTotal)} total />
            <div className="row" style={{ marginTop: '15px', background: 'rgba(241, 196, 15, 0.1)', padding: '8px 10px', borderRadius: '4px' }}>
              <span className="lbl" style={{ color: 'var(--warning)' }}>⚠️ Pre-Loan Costs (permits - paid out of pocket)</span>
              <span className="val" style={{ color: 'var(--warning)' }}>{fmt(results.preLoanCosts)}</span>
            </div>
            <Row label="Total Project Cost (including pre-loan)" value={fmt(results.grandTotal)} highlight />
            <Row label="Cost Per Square Foot" value={`${fmt(results.costPerSf)}/sf`} style={{ marginTop: '10px', color: 'var(--text-light)' }} />
          </Results>
        </div>
        <Alert type="success" icon="💰">
          <strong>This estimate feeds into the Finance Calculator.</strong> The total build cost is used as the default construction cost.
        </Alert>
      </Card>
    </>
  );
}

// Helper components
interface ExplanationProps {
  estimate: string;
  low: string;
  high: string;
  notes: string;
}

function ExplanationRow({ explanation }: { explanation: ExplanationProps }) {
  return (
    <div style={{ 
      background: 'rgba(52, 152, 219, 0.08)', 
      padding: '8px 15px', 
      marginTop: '-1px',
      marginBottom: '5px',
      fontSize: '.85rem', 
      color: 'var(--text-light)',
      borderLeft: '3px solid var(--primary-light)'
    }}>
      <div style={{ marginBottom: '4px' }}>
        <strong style={{ color: 'var(--text)' }}>Range:</strong> {explanation.low} – <span style={{ color: 'var(--primary)' }}>{explanation.estimate}</span> – {explanation.high}
      </div>
      <div>{explanation.notes}</div>
    </div>
  );
}

interface CostRowProps {
  label: string;
  value: number;
  field: keyof import('../../contexts/BuildContext').BuildInputs;
  setInput: (key: keyof import('../../contexts/BuildContext').BuildInputs, value: number) => void;
}

function CostRow({ label, value, field, setInput }: CostRowProps) {
  return (
    <div className="row">
      <span className="lbl">{label}</span>
      <div>
        <span className="val">{fmt(value)}</span>
        <input
          type="number"
          value={value}
          onChange={e => setInput(field, +e.target.value)}
          style={{ width: '100px', marginLeft: '10px', padding: '4px 8px' }}
        />
      </div>
    </div>
  );
}

interface CostRowWithExplanationProps extends CostRowProps {
  explanation: ExplanationProps;
  show: boolean;
}

function CostRowWithExplanation({ label, value, field, setInput, explanation, show }: CostRowWithExplanationProps) {
  return (
    <>
      <CostRow label={label} value={value} field={field} setInput={setInput} />
      {show && <ExplanationRow explanation={explanation} />}
    </>
  );
}

interface DiyRowProps {
  label: string;
  value: number;
  field: keyof import('../../contexts/BuildContext').BuildInputs;
  diyChecked: boolean;
  diyField: keyof import('../../contexts/BuildContext').BuildInputs;
  diySave: number;
  diySaveField: keyof import('../../contexts/BuildContext').BuildInputs;
  setInput: (key: keyof import('../../contexts/BuildContext').BuildInputs, value: number | boolean) => void;
}

function DiyRow({ label, value, field, diyChecked, diyField, diySave, diySaveField, setInput }: DiyRowProps) {
  const displayValue = diyChecked ? value - diySave : value;
  return (
    <div className="row">
      <span className="lbl">{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <label className="diy-save" style={{ marginRight: '10px' }}>
          <input
            type="checkbox"
            checked={diyChecked}
            onChange={e => setInput(diyField, e.target.checked)}
          />
          DIY
          {diyChecked && (
            <span className="diy-amt">
              : -$<input
                type="number"
                value={diySave}
                onChange={e => setInput(diySaveField, +e.target.value)}
              />
            </span>
          )}
        </label>
        <span className="val" style={diyChecked ? { color: 'var(--success)' } : undefined}>{fmt(displayValue)}</span>
        <input
          type="number"
          value={value}
          onChange={e => setInput(field, +e.target.value)}
          style={{ width: '100px', marginLeft: '10px', padding: '4px 8px' }}
        />
      </div>
    </div>
  );
}

interface DiyPerSfRowProps {
  label: string;
  cost: number;
  rate: number;
  rateField: keyof import('../../contexts/BuildContext').BuildInputs;
  diyChecked: boolean;
  diyField: keyof import('../../contexts/BuildContext').BuildInputs;
  diySave: number;
  diySaveField: keyof import('../../contexts/BuildContext').BuildInputs;
  sqft: number;
  setInput: (key: keyof import('../../contexts/BuildContext').BuildInputs, value: number | boolean) => void;
}

function DiyPerSfRow({ label, cost, rate, rateField, diyChecked, diyField, diySave, diySaveField, sqft, setInput }: DiyPerSfRowProps) {
  const displayCost = diyChecked ? cost - (diySave * sqft) : cost;
  return (
    <div className="row">
      <span className="lbl">{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <label className="diy-save" style={{ marginRight: '10px' }}>
          <input
            type="checkbox"
            checked={diyChecked}
            onChange={e => setInput(diyField, e.target.checked)}
          />
          DIY
          {diyChecked && (
            <span className="diy-amt">
              : -$<input
                type="number"
                value={diySave}
                onChange={e => setInput(diySaveField, +e.target.value)}
                style={{ width: '40px' }}
              />/sf
            </span>
          )}
        </label>
        <span className="val" style={diyChecked ? { color: 'var(--success)' } : undefined}>{fmt(displayCost)}</span>
        <input
          type="number"
          value={rate}
          onChange={e => setInput(rateField, +e.target.value)}
          style={{ width: '80px', marginLeft: '10px', padding: '4px 8px' }}
        />/sf
      </div>
    </div>
  );
}

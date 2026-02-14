import { Card, Row, Results, Step } from '../ui';

export function Process() {
  return (
    <>
      <Card title="🔨 Construction-to-Permanent Loan Process">
        <Step
          num={1}
          title="Pre-Qualification (1-2 weeks)"
          description="Submit financial documents, credit check, income verification. Get pre-qualified amount."
        />
        <Step
          num={2}
          title="Builder Selection & Approval (2-4 weeks)"
          description="Select licensed contractor. Lender reviews builder credentials, license, insurance, and financials."
        />
        <Step
          num={3}
          title="Plans, Specs & Contract"
          description="Submit finalized architectural drawings, specifications, and fixed-price construction contract."
        />
        <Step
          num={4}
          title="Appraisal"
          description="'Subject to completion' appraisal based on plans. Confirms projected value."
        />
        <Step
          num={5}
          title="Underwriting & Closing (4-6 weeks)"
          description="Full underwriting. Single close (or first of two). Rate may lock or float during construction."
        />
        <Step
          num={6}
          title="Construction Phase (6-9 months)"
          description="Draw requests as milestones completed. Inspections before each draw. Interest-only on drawn funds."
        />
        <Step
          num={7}
          title="Conversion to Permanent Mortgage"
          description="After C.O., loan converts. Some products require modification closing; others are automatic."
        />
      </Card>

      <Card title="🏗️ Construction Timeline">
        <p style={{ marginBottom: '20px' }}>
          Estimated for 2-bed, 2.5-bath single-floor coastal home:
        </p>
        <div className="grid">
          <Results>
            <Row label="Site Preparation" value="1-2 weeks" />
            <Row label="Foundation (w/ helical piles)" value="2-4 weeks" />
            <Row label="Framing" value="3-4 weeks" />
            <Row label="Roofing" value="1-2 weeks" />
            <Row label="Rough-ins (MEP)" value="3-4 weeks" />
          </Results>
          <Results>
            <Row label="Insulation" value="1 week" />
            <Row label="Drywall" value="2-3 weeks" />
            <Row label="Interior Finishes" value="4-6 weeks" />
            <Row label="Exterior Finishes" value="2-3 weeks" />
            <Row label="Final Inspections" value="1-2 weeks" />
            <Row label="Total Estimated" value="6-9 months" total />
          </Results>
        </div>
      </Card>

      <Card title="📞 Tillamook County Resources">
        <div className="grid">
          <div>
            <h4>Community Development</h4>
            <p>
              <strong>Address:</strong> 1510-B Third Street, Tillamook, OR 97141<br />
              <strong>Phone:</strong> (503) 842-3408<br />
              <strong>Hours:</strong> Mon-Fri, 8:00 AM - 4:00 PM<br />
              <strong>Inspections:</strong> (503) 842-1815
            </p>
          </div>
          <div>
            <h4>Permit Notes</h4>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Appointments required for submittals</li>
              <li>Digital submission requires coordination</li>
              <li>Flood zone properties need pre-app meeting</li>
            </ul>
            <p style={{ marginTop: '10px' }}>
              <a href="https://www.tillamookcounty.gov/commdev" target="_blank" rel="noopener noreferrer">
                Visit County Website →
              </a>
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}

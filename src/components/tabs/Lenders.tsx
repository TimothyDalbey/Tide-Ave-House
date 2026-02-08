import { Card, Alert, LenderCard } from '../ui';
import { lenders } from '../../constants';

export function Lenders() {
  return (
    <Card title="🏦 Construction Loan Providers">
      <p style={{ marginBottom: '20px' }}>
        The following lenders offer conventional construction-to-permanent loans that may serve Tillamook County, Oregon.
      </p>
      <Alert type="info" icon="💡">
        <strong>Tip:</strong> For conventional construction loans, shop both large national banks and local/regional lenders. 
        Credit unions often offer competitive rates for members.
      </Alert>
      <div className="lgrid">
        {lenders.map(lender => (
          <LenderCard
            key={lender.name}
            type={lender.type}
            name={lender.name}
            description={lender.description}
            url={lender.url}
          />
        ))}
      </div>
    </Card>
  );
}

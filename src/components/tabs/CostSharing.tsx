import { useMemo, useState } from 'react';
import { Card, Alert, Row, Results, FormGroup, InputWrap } from '../ui';
import { useFinance } from '../../contexts/FinanceContext';
import { fmt } from '../../utils/format';
import { ProtectedSection } from '../auth/ProtectedSection';
import { authConfig } from '../../config/auth.config';

export function CostSharing() {
  const { inputs, results, shareInputs, shareTransactions, shareResults, setShareTransactionAmount, setShareTransactionDate } = useFinance();
  const [showDetails, setShowDetails] = useState(false);

  // If auth is disabled, render content directly
  if (!authConfig.costSharingEnabled) {
    return <CostSharingContent inputs={inputs} results={results} shareInputs={shareInputs} shareTransactions={shareTransactions} shareResults={shareResults} setShareTransactionAmount={setShareTransactionAmount} setShareTransactionDate={setShareTransactionDate} showDetails={showDetails} setShowDetails={setShowDetails} />;
  }

  return (
    <ProtectedSection title="Cost Sharing - Login Required">
      <CostSharingContent inputs={inputs} results={results} shareInputs={shareInputs} shareTransactions={shareTransactions} shareResults={shareResults} setShareTransactionAmount={setShareTransactionAmount} setShareTransactionDate={setShareTransactionDate} showDetails={showDetails} setShowDetails={setShowDetails} />
    </ProtectedSection>
  );
}

// Extracted content component
function CostSharingContent({ inputs, results, shareInputs, shareTransactions, shareResults, setShareTransactionAmount, setShareTransactionDate, showDetails, setShowDetails }: {
  inputs: ReturnType<typeof useFinance>['inputs'];
  results: ReturnType<typeof useFinance>['results'];
  shareInputs: ReturnType<typeof useFinance>['shareInputs'];
  shareTransactions: ReturnType<typeof useFinance>['shareTransactions'];
  shareResults: ReturnType<typeof useFinance>['shareResults'];
  setShareTransactionAmount: ReturnType<typeof useFinance>['setShareTransactionAmount'];
  setShareTransactionDate: ReturnType<typeof useFinance>['setShareTransactionDate'];
  showDetails: boolean;
  setShowDetails: (v: boolean) => void;
}) {
  const [sortMode, setSortMode] = useState<'recorded' | 'date-asc' | 'date-desc'>('recorded');

  const sortedTransactions = useMemo(() => {
    const withIndex = shareTransactions.map((transaction, index) => ({ transaction, index }));

    if (sortMode === 'recorded') {
      return withIndex.map(item => item.transaction);
    }

    return [...withIndex]
      .sort((left, right) => {
        const leftDate = left.transaction.date || '9999-12-31';
        const rightDate = right.transaction.date || '9999-12-31';

        if (leftDate === rightDate) {
          return left.index - right.index;
        }

        return sortMode === 'date-asc'
          ? leftDate.localeCompare(rightDate)
          : rightDate.localeCompare(leftDate);
      })
      .map(item => item.transaction);
  }, [shareTransactions, sortMode]);

  const ledgerRows = useMemo(() => {
    let timPaid = 0;
    let laniPaid = 0;

    return sortedTransactions.map(transaction => {
      if (transaction.party === 'Tim') timPaid += transaction.amount;
      else laniPaid += transaction.amount;

      const netDifference = timPaid - laniPaid;
      const settlement = Math.abs(netDifference) / 2;
      const runningBalance = settlement === 0
        ? 'Balanced'
        : netDifference > 0
          ? `Lani owes Tim ${fmt(settlement)}`
          : `Tim owes Lani ${fmt(settlement)}`;

      return { ...transaction, runningBalance };
    });
  }, [sortedTransactions]);

  const transactionSummary = useMemo(() => {
    const categories: Record<string, { tim: number; lani: number; label: string }> = {
      lot: { tim: 0, lani: 0, label: 'Lot Down Payment' },
      architect: { tim: 0, lani: 0, label: 'Architect Fees' },
      engineering: { tim: 0, lani: 0, label: 'Engineering Fees' },
      refund: { tim: 0, lani: 0, label: 'Refunds / Credits' },
      other: { tim: 0, lani: 0, label: 'Other Adjustments' },
    };

    shareTransactions.forEach(transaction => {
      if (transaction.category === 'mortgage') return;
      const bucket = categories[transaction.category];
      if (!bucket) return;
      if (transaction.party === 'Tim') bucket.tim += transaction.amount;
      else bucket.lani += transaction.amount;
    });

    return Object.values(categories).filter(row => row.tim !== 0 || row.lani !== 0);
  }, [shareTransactions]);

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
              <Row label="Tim's Other Paid (pre-const)" value={fmt(shareResults.timTotal - shareInputs.timLot)} />
              <Row label="Tim's Cash at Closing" value={fmt(shareResults.timStillNeeds)} />
              <div className="row" style={{ background: 'rgba(26,95,122,.1)' }}>
                <span className="lbl"><strong>Tim Still Needs to Bring</strong></span>
                <span className="val" style={{ color: 'var(--primary)' }}>{fmt(shareResults.timStillNeeds)}</span>
              </div>
            </div>
            <div>
              <Row label="Lani's Required Contribution" value={fmt(shareResults.eachRequired)} highlight />
              <Row label="Lani's Lot Equity Paid" value={fmt(shareInputs.laniLot)} />
              <Row label="Lani's Other Paid (pre-const)" value={fmt(shareResults.laniTotal - shareInputs.laniLot)} />
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

            <Results title="Line-Item Transactions" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', gap: '12px', flexWrap: 'wrap' }}>
                <p style={{ margin: 0, fontSize: '.9rem', color: 'var(--text-light)' }}>
                  Running balance follows the current ledger sort order.
                </p>
                <FormGroup label="Sort Transactions" hint="Use dates once you add them to view strict chronology.">
                  <select value={sortMode} onChange={e => setSortMode(e.target.value as 'recorded' | 'date-asc' | 'date-desc')}>
                    <option value="recorded">Recorded order</option>
                    <option value="date-asc">Date ascending</option>
                    <option value="date-desc">Date descending</option>
                  </select>
                </FormGroup>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-light)' }}>Date</th>
                    <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-light)' }}>Party</th>
                    <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-light)' }}>Category</th>
                    <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-light)' }}>Transaction</th>
                    <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-light)' }}>Amount</th>
                    <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-light)' }}>Running Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {ledgerRows.map(transaction => (
                    <tr key={transaction.id} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 8px' }}>
                        <input
                          type="date"
                          value={transaction.date}
                          onChange={e => setShareTransactionDate(transaction.id, e.target.value)}
                          style={{ width: '150px' }}
                        />
                      </td>
                      <td style={{ padding: '12px 8px', color: transaction.party === 'Tim' ? 'var(--primary)' : 'var(--secondary)' }}>{transaction.party}</td>
                      <td style={{ padding: '12px 8px', textTransform: 'capitalize' }}>{transaction.category}</td>
                      <td style={{ padding: '12px 8px' }}>{transaction.label}</td>
                      <td style={{ textAlign: 'right', padding: '12px 8px' }}>
                        <InputWrap prefix="$">
                          <input
                            type="number"
                            value={transaction.amount}
                            onChange={e => setShareTransactionAmount(transaction.id, +e.target.value)}
                            style={{ width: '120px' }}
                          />
                        </InputWrap>
                      </td>
                      <td style={{ padding: '12px 8px' }}>{transaction.runningBalance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Results>

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
                    {transactionSummary.map(row => (
                      <tr key={row.label} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '12px 8px' }}>{row.label}</td>
                        <td style={{ textAlign: 'right', padding: '12px 8px' }}>{fmt(row.tim)}</td>
                        <td style={{ textAlign: 'right', padding: '12px 8px' }}>{fmt(row.lani)}</td>
                        <td style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-light)' }}>{fmt(row.tim + row.lani)}</td>
                      </tr>
                    ))}
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
              <strong>Joint Financing Note:</strong> This calculator is focused on pre-construction contributions only. 
              The imbalance represents pre-construction contributions. You can settle this by:<br />
              • Paying before or at closing<br />
              • Contributing more to closing costs<br />
              • Adjusting ownership percentages accordingly<br />
              • Tracking as a loan between partners
            </Alert>

            <Card style={{ marginTop: '20px', padding: '20px' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '15px' }}>Transaction-Driven Balance</h3>
              <p style={{ marginBottom: '15px', fontSize: '.9rem', color: 'var(--text-light)' }}>
                Edit the line-item transactions above. All totals and who-owes-who calculations update directly from that ledger.
              </p>
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

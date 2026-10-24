import { useState } from 'react';
import { calculateEmi, fmtINR } from '@/lib/format';

export function EmiCalculator() {
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(15);
  const { emi, total, interest, principalPercent } = calculateEmi(amount, rate, tenure);

  return (
    <section id="calculator" className="emi-section">
      <div className="emi-inner">
        <div className="emi-heading">
          <div className="section-eyebrow">TRANSPARENT PLANNING TOOL</div>
          <h2>Interactive Loan EMI Calculator</h2>
          <p>
            Calculate your monthly repayment estimate instantly. Adjust loan amount, interest rate,
            and tenure below.
          </p>
        </div>
        <div className="emi-panel">
          <div className="emi-controls">
            <label className="emi-control">
              <span className="emi-control-heading">
                <strong>Loan Amount</strong>
                <b>{fmtINR(amount)}</b>
              </span>
              <input
                aria-label="Loan amount"
                type="range"
                min={100000}
                max={10000000}
                step={100000}
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
              />
              <span className="emi-range-labels"><span>₹1 Lakh</span><span>₹50 Lakhs</span><span>₹1 Crore</span></span>
            </label>
            <label className="emi-control">
              <span className="emi-control-heading">
                <strong>Interest Rate (p.a.)</strong>
                <b>{rate}%</b>
              </span>
              <input
                aria-label="Interest rate"
                type="range"
                min={7}
                max={16}
                step={0.25}
                value={rate}
                onChange={(event) => setRate(Number(event.target.value))}
              />
              <span className="emi-range-labels"><span>7.0%</span><span>11.5%</span><span>16.0%</span></span>
            </label>
            <label className="emi-control">
              <span className="emi-control-heading">
                <strong>Loan Tenure</strong>
                <b>{tenure} {tenure === 1 ? 'Year' : 'Years'}</b>
              </span>
              <input
                aria-label="Loan tenure"
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenure}
                onChange={(event) => setTenure(Number(event.target.value))}
              />
              <span className="emi-range-labels"><span>1 Year</span><span>15 Years</span><span>30 Years</span></span>
            </label>
            <p className="emi-note">
              <span aria-hidden="true">ⓘ</span>
              This calculator provides standard Equated Monthly Installment estimates using
              amortization logic. Actual bank offers may vary based on credit assessment and
              processing charges.
            </p>
          </div>
          <aside className="emi-results">
            <span className="emi-results-title">YOUR ESTIMATED REPAYMENT</span>
            <div className="emi-monthly">
              <span>Monthly EMI</span>
              <strong>{fmtINR(emi)}</strong>
            </div>
            <dl className="emi-breakdown">
              <div><dt>Principal Amount:</dt><dd>{fmtINR(amount)}</dd></div>
              <div><dt>Total Interest Payable:</dt><dd>{fmtINR(interest)}</dd></div>
              <div className="emi-total"><dt>Total Repayment Amount:</dt><dd>{fmtINR(total)}</dd></div>
            </dl>
            <div className="emi-ratio">
              <span>Principal vs Interest Ratio</span>
              <div className="emi-ratio-bar" aria-label={`${principalPercent}% principal, ${100 - principalPercent}% interest`}>
                <span style={{ width: `${principalPercent}%` }} />
              </div>
              <div className="emi-legend">
                <span><i />Principal</span><span><i />Interest</span>
              </div>
            </div>
            <a href="#apply" className="emi-apply">Get Pre-Approved for this EMI →</a>
          </aside>
        </div>
      </div>
    </section>
  );
}

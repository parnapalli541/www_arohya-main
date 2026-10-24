import { whyItems } from '@/data/whyItems';

export function WhyUs() {
  return (
    <section id="why" className="why-section">
      <div className="why-layout">
        <div className="why-copy">
          <div className="section-eyebrow">LOCAL TRUST &amp; INTEGRITY</div>
          <h2>Why Borrowers in Tumkur Choose Arohya</h2>
          <p>
            When borrowing money, you deserve someone on your side. We operate as a transparent
            direct selling agents (DSAs) with authorized bank empanelment, removing all middlemen
            deception.
          </p>
          <ul className="why-promises">
            <li>
              <strong>Empanelled with Top Regulated Lenders</strong>
              <span>We partner strictly with RBI-authorized scheduled commercial banks and reputed NBFCs.</span>
            </li>
            <li>
              <strong>Transparent Facilitator Role</strong>
              <span>You never sign blank forms. All official sanction letters and interest commitments come directly from the lender&apos;s letterhead.</span>
            </li>
          </ul>
        </div>
        <div className="why-cards">
          {whyItems.map((item, index) => (
            <article className="why-card" key={item.title}>
              <span className="why-icon" aria-hidden="true">
                {['↝', '▦', '⌁', '♙'][index]}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="partner-banks">
        <div className="partner-heading">
          <span>EMPANELLED DIRECT SELLING AGENT (DSA) FOR OFFICIAL LOAN PROGRAMS</span>
          <h2>Facilitating Loans Through Leading Indian Institutions</h2>
        </div>
        <div className="partner-list">
          <div className="partner-bank"><span className="partner-mark mark-sbi">◉</span><span><strong>State Bank of India</strong><small>Nationalized Partner</small></span></div>
          <div className="partner-bank"><span className="partner-mark mark-canara">△</span><span><strong>Canara Bank</strong><small>Karnataka Lead Bank</small></span></div>
          <div className="partner-bank"><span className="partner-mark mark-karnataka">◉</span><span><strong>Karnataka Bank</strong><small>Regional Specialist</small></span></div>
          <div className="partner-bank"><span className="partner-mark mark-bob">B</span><span><strong>Bank of Baroda</strong><small>Retail &amp; MSME Loans</small></span></div>
          <div className="partner-bank"><span className="partner-mark mark-hdfc">▦</span><span><strong>HDFC Bank</strong><small>Private Sector Bank</small></span></div>
        </div>
        <p className="partner-note">
          *Note: Arohya Capital is an authorized DSA/Referral Partner. Loan approval, interest
          rates, and loan disbursal are at the sole discretion of the respective banks/NBFCs in
          compliance with RBI directives.
        </p>
      </div>
    </section>
  );
}

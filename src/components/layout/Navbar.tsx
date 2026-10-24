import { NAV_LINKS } from '@/constants/site';

export function Navbar() {
  return (
    <>
      <div className="announcement-bar">
        <div className="announcement-inner">
          <span>●</span> Authorised Loan Facilitator &amp; DSA: Arohya Capital partners with 25+
          RBI-regulated Banks &amp; NBFCs. We are not a direct lender.
          <span className="announcement-branch">
            Support in Kannada | Tumkur Office: B.H. Road, Ashok Nagar
          </span>
        </div>
      </div>
      <nav className="site-navbar">
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label="Arohya Capital home">
            <span className="brand-name">Arohya Capital</span>
            <span className="brand-tagline">Your Tumkur Loan Advisory Partner</span>
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <span className="language-pill">ಕನ್ನಡ / EN</span>
            <a href="tel:+918162200000" className="nav-phone">
              ☎ +91 816 220 0000
            </a>
            <a href="#apply" className="nav-apply">
              Apply Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

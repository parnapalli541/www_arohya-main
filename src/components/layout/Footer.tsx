import { GOLD, NAVY } from '@/constants/theme';

const FOOTER_LINK_STYLE = { color: 'rgba(255,255,255,0.6)' };

export function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: NAVY, color: 'rgba(255,255,255,0.6)', padding: '64px 32px 40px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 48,
            paddingBottom: 44,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: `linear-gradient(135deg, ${GOLD}, #dc5125)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: NAVY,
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                A
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: 17,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  color: '#fff',
                }}
              >
                AROHYA CAPITAL
              </span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0, maxWidth: 300 }}>
              Your Tumkur loan advisory partner. Compare offers from 25+ partner banks and NBFCs
              with local guidance through documentation and disbursal.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
            <span
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                marginBottom: 4,
              }}
            >
              SERVICES
            </span>
            <a href="#services" className="footer-link" style={FOOTER_LINK_STYLE}>
              Loan Services
            </a>
            <a href="#services" className="footer-link" style={FOOTER_LINK_STYLE}>
              Business Finance
            </a>
            <a href="#services" className="footer-link" style={FOOTER_LINK_STYLE}>
              Agriculture Finance
            </a>
            <a href="#services" className="footer-link" style={FOOTER_LINK_STYLE}>
              Insurance
            </a>
            <a href="#services" className="footer-link" style={FOOTER_LINK_STYLE}>
              Investments
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
            <span
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                marginBottom: 4,
              }}
            >
              COMPANY
            </span>
            <a href="#top" className="footer-link" style={FOOTER_LINK_STYLE}>
              About Us
            </a>
            <a href="#calculator" className="footer-link" style={FOOTER_LINK_STYLE}>
              Calculators
            </a>
            <a href="#faq" className="footer-link" style={FOOTER_LINK_STYLE}>
              FAQ
            </a>
            <a href="#apply" className="footer-link" style={FOOTER_LINK_STYLE}>
              Careers
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
            <span
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                marginBottom: 4,
              }}
            >
              CONTACT
            </span>
            <a href="tel:+918162200000" className="footer-link" style={FOOTER_LINK_STYLE}>
              +91 816 220 0000
            </a>
            <a
              href="https://wa.me/918162200000"
              className="footer-link"
              style={FOOTER_LINK_STYLE}
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:contact@arohyacapital.in"
              className="footer-link"
              style={FOOTER_LINK_STYLE}
            >
              contact@arohyacapital.in
            </a>
            <span>B.H. Road, Ashok Nagar, Tumkur</span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            paddingTop: 26,
            fontSize: 12,
            flexWrap: 'wrap',
          }}
        >
          <span>© 2026 AROHYA CAPITAL. All rights reserved.</span>
          <span style={{ maxWidth: 560, textAlign: 'right', lineHeight: 1.6 }}>
            AROHYA CAPITAL is a financial services consultancy. Loan approval, interest rates, and
            investment returns are subject to lender and market conditions — no approvals or returns
            are guaranteed.
          </span>
        </div>
      </div>
    </footer>
  );
}

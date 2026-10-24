import { whyItems } from '@/data/whyItems';
import { GOLD, NAVY } from '@/constants/theme';

export function WhyUs() {
  return (
    <section
      id="why"
      style={{
        background: '#EEF3FC',
        padding: '96px 32px',
        color: NAVY,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          className="why-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: 64,
            alignItems: 'start',
          }}
        >
          <div>
            <div
              style={{
                color: GOLD,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2.5,
                marginBottom: 14,
              }}
            >
              WHY AROHYA CAPITAL
            </div>
            <h2
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: 38,
                fontWeight: 600,
                margin: '0 0 18px',
              }}
            >
              Built on transparency. Chosen for trust.
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: '#5d6e82',
                margin: '0 0 30px',
              }}
            >
              We work with multiple banking partners to match you with the right product — not the
              easiest one to sell. Every recommendation is explained, every charge disclosed.
            </p>
            <a
              href="#contact"
              className="why-cta"
              style={{
                display: 'inline-block',
                border: `1px solid ${GOLD}`,
                color: GOLD,
                fontWeight: 600,
                fontSize: 14,
                padding: '13px 26px',
                borderRadius: 999,
              }}
            >
              Book a free consultation
            </a>
          </div>
          <div className="why-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {whyItems.map((w) => (
              <div
                key={w.title}
                className="why-card"
                style={{
                  background: '#fff',
                  border: '1px solid #e1e8f2',
                  borderRadius: 16,
                  padding: 22,
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: NAVY,
                    marginBottom: 7,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: GOLD,
                      flexShrink: 0,
                    }}
                  />
                  {w.title}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: '#64748b' }}>
                  {w.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

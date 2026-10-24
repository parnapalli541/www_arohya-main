import { journey } from '@/data/journey';
import { GOLD, NAVY } from '@/constants/theme';

export function Journey() {
  return (
    <section
      id="journey"
      className="loan-journey"
      style={{
        background: '#F0F4FF',
        padding: '72px 32px 88px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 40px' }}>
          <div
            style={{
              color: GOLD,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2.5,
              marginBottom: 14,
            }}
          >
            CLEAR &amp; TRANSPARENT JOURNEY
          </div>
          <h2
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: 38,
              fontWeight: 600,
              margin: '0 0 16px',
              color: NAVY,
            }}
          >
            How Arohya Capital Simplifies Your Loan
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748b' }}>
            No endless queues. No confusing banking jargon. We bridge the gap between you and the
            right lending institution.
          </p>
        </div>
        <div
          className="journey-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
        >
          {journey.map((j) => (
            <div
              key={j.num}
              className="journey-card loan-journey-card"
              style={{
                background: 'rgba(255,255,255,0.55)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.8)',
                borderRadius: 12,
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 14,
                boxShadow: '0 6px 24px rgba(15,23,42,0.04)',
              }}
            >
              <span
                style={{
                  display: 'grid',
                  width: 38,
                  height: 38,
                  placeItems: 'center',
                  borderRadius: 8,
                  background: j.num === '04' ? GOLD : NAVY,
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {j.num}
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{j.title}</span>
                <span style={{ fontSize: 13, lineHeight: 1.55, color: '#64748b' }}>{j.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

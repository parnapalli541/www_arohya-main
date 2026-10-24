import { journey } from '@/data/journey';

export function Journey() {
  return (
    <section id="journey" className="loan-journey">
      <div className="journey-inner">
        <div className="journey-heading">
          <div className="section-eyebrow">CLEAR &amp; TRANSPARENT JOURNEY</div>
          <h2>How Arohya Capital Simplifies Your Loan</h2>
          <p>
            No endless queues. No confusing banking jargon. We bridge the gap between you and the
            right lending institution.
          </p>
        </div>
        <div className="journey-grid">
          {journey.map((step) => (
            <article className="journey-card" key={step.num}>
              <div className="journey-card-top">
                <span className={`journey-number${step.num === '04' ? ' is-final' : ''}`}>
                  {step.num}
                </span>
                <span className="journey-step-icon" aria-hidden="true">
                  {['♧', '⌁', '⚙', '✓'][Number(step.num) - 1]}
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <span className="journey-step-label">
                Step {Number(step.num)}: {step.num === '01'
                  ? '5 Min Initial Intake'
                  : step.num === '02'
                    ? 'Best Rate Matching'
                    : step.num === '03'
                      ? 'Verification & Filing'
                      : 'Direct Bank Credit'}
              </span>
            </article>
          ))}
        </div>
        <div className="visit-strip">
          <span className="visit-icon" aria-hidden="true">♧</span>
          <p>
            <strong>Need personal guidance in your taluk?</strong> Our mobile field coordinators
            visit Gubbi, Sira, Tiptur, Kunigal, and surrounding areas.
          </p>
          <a href="#contact">Request Home / Office Visit</a>
        </div>
      </div>
    </section>
  );
}

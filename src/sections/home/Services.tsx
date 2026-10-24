import { services } from '@/data/services';

export function Services() {
  return (
    <section id="services" className="loan-services">
      <div className="loan-services-inner">
        <div className="loan-services-heading">
          <div>
            <div className="eyebrow">
              <span aria-hidden="true">▧</span> COMPREHENSIVE FINANCIAL FACILITATION
            </div>
            <h2>Loan Solutions Tailored for Tumkur</h2>
            <p>
              Compare rates and processing terms across our 28+ lending partners. We assist with
              documentation and bank liaison.
            </p>
          </div>
          <span className="rate-disclaimer">
            * Interest rates subject to bank policy &amp; applicant credit score
          </span>
        </div>

        <div className="loan-product-grid">
          {services.map((loan) => (
            <article
              key={loan.title}
              className={`loan-product-card${loan.featured ? ' loan-product-featured' : ''}`}
            >
              {loan.featured && <span className="featured-ribbon">WOMEN EMPOWERMENT</span>}
              <div className="loan-card-topline">
                <span className="loan-icon" aria-hidden="true">
                  {loan.icon}
                </span>
                <span className="loan-badge">{loan.badge}</span>
              </div>
              <h3>{loan.title}</h3>
              <span className="loan-subtitle">{loan.subtitle}</span>
              <p>{loan.description}</p>
              <div className="loan-rate">
                <span>{loan.rateLabel}</span>
                <strong>{loan.rate}</strong>
              </div>
              <a href="#apply" className="loan-card-action">
                {loan.action} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

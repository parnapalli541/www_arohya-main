import { useState, type FormEvent } from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import type { Stat } from '@/types';

function useHeroStats(): Stat[] {
  const progress = useCountUp();
  const count = (n: number) => Math.round(n * progress).toLocaleString('en-IN');

  return [
    { value: count(14500) + '+', label: 'Local Borrowers Advised' },
    { value: count(28) + '+', label: 'Partner Banks & NBFCs' },
    { value: '₹' + Math.round(420 * progress) + '+ Cr', label: 'Disbursed via Partners' },
    { value: Math.round(12 * progress) + '+ Years', label: 'Serving Tumkur District' },
  ];
}

export function Hero() {
  const stats = useHeroStats();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <header id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span aria-hidden="true">🏆</span> Tumkur&apos;s Most Trusted Loan Facilitation
              Partner · 25+ Banks &amp; NBFCs
            </div>
            <h1>
              The right loan, from the right bank — <span>without the running around.</span>
            </h1>
            <p>
              We compare verified loan offers from top partner banks, manage your paperwork
              end-to-end, and support you directly until loan disbursal. Dedicated local advisors
              right here in Tumkur, speaking your language.
            </p>
            <div className="hero-actions">
              <a href="#apply" className="button-primary">
                Check Eligibility (Free) <span aria-hidden="true">→</span>
              </a>
              <a href="https://wa.me/918162200000" className="button-whatsapp">
                <span aria-hidden="true">▣</span> Chat on WhatsApp
              </a>
            </div>
            <div className="hero-benefits">
              <span>✓ Zero advance fees</span>
              <span>✓ 100% Paperwork guidance</span>
              <span>✓ Support in Kannada &amp; English</span>
            </div>
            <div className="hero-local-note">
              <span aria-hidden="true">♧</span>
              <span>
                <strong>ನಿಮ್ಮದೇ ಊರಿನ ಸಾಲ ಸಲಹೆಗಾರರು</strong>
                <br />
                Tumkur&apos;s trusted local loan advisors. Honest comparison, documentation support,
                and help through disbursal.
              </span>
            </div>
          </div>

          <form id="apply" className="hero-form" onSubmit={handleSubmit}>
            <div className="hero-form-heading">
              <div>
                <span>INSTANT SERVICE</span>
                <h2>Request Free Consultation</h2>
              </div>
              <span className="free-badge">100% Free</span>
            </div>
            <label>
              Select Loan Category
              <select name="service" defaultValue="Education Loan (India & Overseas)" required>
                <option>Education Loan (India &amp; Overseas)</option>
                <option>Home &amp; Plot Loan</option>
                <option>Vehicle Loan</option>
                <option>Personal Loan</option>
                <option>SHG (Stree Shakti) Loan</option>
                <option>Business &amp; MSME Loan</option>
              </select>
            </label>
            <label>
              Required Amount
              <span className="amount-field">
                <span>₹</span>
                <input
                  name="amount"
                  type="text"
                  inputMode="numeric"
                  placeholder="15,00,000"
                  defaultValue="15,00,000"
                  required
                />
              </span>
            </label>
            <label>
              Full Name
              <input name="name" placeholder="e.g. Ramesh Kumar" required />
            </label>
            <label>
              Mobile Number (WhatsApp Preferred)
              <span className="phone-field">
                <span>+91</span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  placeholder="98450 XXXXX"
                  required
                />
              </span>
            </label>
            <label>
              Your Taluk / Location
              <select name="location" defaultValue="Tumkur City (ತುಮಕೂರು ನಗರ)" required>
                <option>Tumkur City (ತುಮಕೂರು ನಗರ)</option>
                <option>Kunigal</option>
                <option>Gubbi</option>
                <option>Tiptur</option>
                <option>Other Tumkur District</option>
              </select>
            </label>
            <button className="button-primary hero-submit" type="submit">
              {submitted ? 'Request received — thank you!' : 'Get Free Loan Quotes  ⓘ'}
            </button>
            <small>
              By submitting, you authorize Arohya Capital to contact you. We respect privacy. No
              spam.
            </small>
          </form>
        </div>
      </div>
      <div className="hero-stats">
        {stats.map((s) => (
          <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
}

import { useState } from 'react';
import { faqs } from '@/data/faqs';

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <div className="faq-heading">
          <div className="section-eyebrow">CLEAR ANSWERS</div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our role, fees, and the loan application workflow.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article className="faq-card" key={faq.q}>
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    {isOpen ? '⌃' : '⌄'}
                  </span>
                </button>
                <div className={`faq-answer${isOpen ? ' is-open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

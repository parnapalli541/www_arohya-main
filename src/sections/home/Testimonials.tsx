import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-inner">
        <div className="testimonials-heading">
          <div className="section-eyebrow">VOICES FROM TUMKUR DISTRICT</div>
          <h2>Real Stories, Real Disbursals</h2>
          <p>
            How we&apos;ve helped families, students, and small enterprises across Gubbi, Tiptur, and
            Tumkur town achieve their dreams.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <div className="testimonial-byline">
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
                <span className="testimonial-tag">{testimonial.initials}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

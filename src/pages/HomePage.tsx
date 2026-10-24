import { EmiCalculator, Faq, Hero, Journey, Services, Testimonials, WhyUs } from '@/sections/home';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Journey />
      <WhyUs />
      <EmiCalculator />
      <Testimonials />
      <Faq />
    </>
  );
}

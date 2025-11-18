import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
import { BentoFeatures } from "../components/BentoFeatures";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { CTAFinal } from "../components/CTAFinal";


export function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <BentoFeatures />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTAFinal />
    </>
  );
}

export default LandingPage;

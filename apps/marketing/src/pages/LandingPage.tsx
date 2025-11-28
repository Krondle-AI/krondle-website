import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
import { BentoFeatures } from "../components/BentoFeatures";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import { CTAFinal } from "../components/CTAFinal";


export function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <BentoFeatures />
      <HowItWorks />
      <Testimonials />
      <CTAFinal />
    </>
  );
}

export default LandingPage;

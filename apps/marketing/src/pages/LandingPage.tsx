import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
import { Testimonials } from "../components/Testimonials";
import { CTAFinal } from "../components/CTAFinal";
import { FeaturesFlow } from "../components/FeaturesFlow";


export function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <FeaturesFlow />
      <Testimonials />
      <CTAFinal />
    </>
  );
}

export default LandingPage;

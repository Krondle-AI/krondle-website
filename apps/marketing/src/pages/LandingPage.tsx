import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
import { Testimonials } from "../components/Testimonials";
import { CTAFinal } from "../components/CTAFinal";
import { FeaturesFlow } from "../components/FeaturesFlow";
import { SectionDivider } from "../components/Sectiondivider";


export function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof variant="gradient" />
      <SectionDivider variant="gradient" />
      <FeaturesFlow />
      <SectionDivider variant="gradient" />
      <Testimonials />
      <CTAFinal />
    </>
  );
}

export default LandingPage;

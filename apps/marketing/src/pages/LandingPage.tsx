import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Pricing } from "../components/Pricing";
import { HowItWorks } from "../components/HowItWorks";
import { Footer } from "../components/Footer";


export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  );
}

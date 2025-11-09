// apps/marketing/src/App.tsx
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { BentoFeatures } from "./components/BentoFeatures";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { CTAFinal } from "./components/CTAFinal";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <BentoFeatures />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTAFinal />
        <Footer />
      </main>
    </div>
  );
}

export default App;
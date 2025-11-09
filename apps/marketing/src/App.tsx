import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
//import { Demo } from "./components/Demo";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
//import { FAQ } from "./components/FAQ";
//import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SocialProof />
      <Features />
      {/* <Demo /> */}
      <HowItWorks />
      <Testimonials />
      <Pricing />
      {/* <FAQ /> */}
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}

export default App;
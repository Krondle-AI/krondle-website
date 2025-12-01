import { HowItWorksHero } from "../components/how-it-works/HowItWorksHero"
import { HowItWorksSteps } from "../components/how-it-works/HowItWorksSteps"
import { HowItWorksDemo } from "../components/how-it-works/HowItWorksDemo"
import { HowItWorksFeatures } from "../components/how-it-works/HowItWorksFeatures"

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <HowItWorksHero />
      <HowItWorksSteps />
      <HowItWorksDemo />
      <HowItWorksFeatures />
    </div>
  )
}

export default HowItWorksPage
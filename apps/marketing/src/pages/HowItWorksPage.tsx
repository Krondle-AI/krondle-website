import { HowItWorksHero } from "../components/how-it-works/HowItWorksHero"
import { HowItWorksSteps } from "../components/how-it-works/HowItWorksSteps"
import { HowItWorksDemo } from "../components/how-it-works/HowItWorksDemo"

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <HowItWorksHero />
      <HowItWorksSteps />
      <HowItWorksDemo />
    </div>
  )
}

export default HowItWorksPage
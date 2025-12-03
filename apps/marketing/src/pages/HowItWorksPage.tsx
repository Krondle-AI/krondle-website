import { HowItWorksHero } from "../components/how-it-works/HowItWorksHero"
import { HowItWorksSteps } from "../components/how-it-works/HowItWorksSteps"
import { HowItWorksDemo } from "../components/how-it-works/HowItWorksDemo"
import { SectionDivider } from "../components/Sectiondivider";


export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <HowItWorksHero />
      <SectionDivider variant="gradient" />
      <HowItWorksSteps />
      <SectionDivider variant="gradient" />
      <HowItWorksDemo />
    </div>
  )
}
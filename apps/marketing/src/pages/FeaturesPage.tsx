import { FeaturesHero } from "../components/features/FeaturesHero"
import { FeaturesBento } from "../components/features/FeaturesBento"
import { AutomationDetail } from "../components/features/AutomationDetail"
import { AnalyticsDetail } from "../components/features/AnalyticsDetail"
import { SecuritySection } from "../components/features/SecuritySection"
import { SectionDivider } from "../components/Sectiondivider";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <FeaturesHero />
      <SectionDivider variant="gradient" />
      <FeaturesBento />
      <SectionDivider variant="gradient" />
      <AutomationDetail />
      <AnalyticsDetail />
      <SectionDivider variant="gradient" />
      <SecuritySection />
    </div>
  )
}

export default FeaturesPage
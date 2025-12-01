import { FeaturesHero } from "../components/features/FeaturesHero"
import { FeaturesBento } from "../components/features/FeaturesBento"
import { AutomationDetail } from "../components/features/AutomationDetail"
import { AnalyticsDetail } from "../components/features/AnalyticsDetail"
import { SecuritySection } from "../components/features/SecuritySection"

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <FeaturesHero />
      <FeaturesBento />
      <AutomationDetail />
      <AnalyticsDetail />
      <SecuritySection />
    </div>
  )
}

export default FeaturesPage
import { FeaturesHero } from "../components/features/Featureshero"
import { FeaturesBento } from "../components/features/Featuresbento"
import { AutomationDetail } from "../components/features/Automationdetail"
import { AnalyticsDetail } from "../components/features/Analyticsdetail"
import { SecuritySection } from "../components/features/Securitysection"
import { FeaturesCTA } from "../components/features/FeaturesCTA"

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <FeaturesHero />
      <FeaturesBento />
      <AutomationDetail />
      <AnalyticsDetail />
      <SecuritySection />
      <FeaturesCTA />
    </div>
  )
}

export default FeaturesPage
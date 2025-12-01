import { useState } from "react"
import { PricingHero } from "../components/pricing/PricingHero"
import { PricingCards } from "../components/pricing/PricingCards"
import { PricingComparison } from "../components/pricing/PricingComparison"

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <PricingHero billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
      <PricingCards billingCycle={billingCycle} />
      <PricingComparison />
    </div>
  )
}

export default PricingPage
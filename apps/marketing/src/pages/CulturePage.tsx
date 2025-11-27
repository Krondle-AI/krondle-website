// apps/marketing/src/pages/CulturePage.tsx

import { CultureHero } from "../components/culture/CultureHero"
import { CultureMission } from "../components/culture/CultureMission"
import { CultureValues } from "../components/culture/CultureValues"
import { CultureTeam } from "../components/culture/CultureTeam"
import { CultureCTA } from "../components/culture/CultureCTA"

export default function CulturePage() {
  return (
    <div className="min-h-screen">
      <CultureHero />
      <CultureMission />
      <CultureValues />
      <CultureTeam />
      <CultureCTA />
    </div>
  )
}
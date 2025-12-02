// apps/marketing/src/pages/CulturePage.tsx

import { CultureHero } from "../components/culture/CultureHero";
import { CultureMission } from "../components/culture/CultureMission";
import { CultureValues } from "../components/culture/CultureValues";
import { CultureTeam } from "../components/culture/CultureTeam";
import { SectionDivider } from "../components/Sectiondivider";

export default function CulturePage() {
  return (
    <div className="min-h-screen">
      <CultureHero />
      <SectionDivider variant="gradient" />
      <CultureMission variant="gradient"/>
      <SectionDivider variant="gradient" />
      <CultureValues variant="gradient"/>
      <SectionDivider variant="gradient" />
      <CultureTeam />
    </div>
  )
}
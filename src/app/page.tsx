import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { CanvaDesignsSection } from "@/components/sections/CanvaDesignsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
      <LeadershipSection />
      <WritingSection />
      <InterestsSection />
      <CanvaDesignsSection />
      <ContactSection />
    </>
  );
}

"use client";
import AboutSection from "@/components/AboutSection/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ContactsSection from "@/components/ContactsSection";
import { StartSection } from "@/components/StartSection";

export default function Home() {

  return (
    <main className="flex flex-col items-center">
      <StartSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactsSection />
    </main>
  );
}

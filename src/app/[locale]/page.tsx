"use client";
import ContactsSection from "@/components/ContactsSection";
import { StartSection } from "@/components/StartSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";

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

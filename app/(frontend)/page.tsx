import type { Metadata } from "next";
import LandingSection from "./sections/Landing";
import ContactSection from "./sections/Contact";
import ProjectsSection from "./sections/Projects";

export const metadata: Metadata = {
  title: {
    default: "Finn Evermann | Portfolio",
    template: "%s | Portfolio",
  },
};

export default function Page() {
  return (
    <>
      <LandingSection />
      {/* @ts-expect-error Server Component */}
      <ProjectsSection />
      {/* @ts-expect-error Server Component */}
      <ContactSection />
    </>
  );
}

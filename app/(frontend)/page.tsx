import type { Metadata } from "next";
import LandingSection from "./sections/Landing";
import ContactSection from "./sections/Contact";
import ProjectsSection from "./sections/Projects";
import { fetchGeneralConfig } from "../../util/sanity/fetchData";

export const metadata: Metadata = {
  title: {
    default: "Finn Evermann | Portfolio",
    template: "%s | Portfolio",
  },
};

export default async function () {
  const { contact_email, hero_image, hero_text, more_info_link } = await fetchGeneralConfig();
  return (
    <>
      <LandingSection heroText={hero_text} heroImage={hero_image} moreInfoLink={more_info_link} />
      {/* @ts-expect-error Server Component */}
      <ProjectsSection />
      {/* @ts-expect-error Server Component */}
      <ContactSection contactEmail={contact_email} />
    </>
  );
}

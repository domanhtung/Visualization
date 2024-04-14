import Image from "next/image";
import HeroBanner from "./home/hero-banner";
import ContactUsHome from "./home/contact-us";
import StoryHome from "./home/story";
import ProjectData from "./home/project-data";
import ServiceHome from "./home/service";
import ClientComments from "./home/client-comments";
import FeatureHome from "./home/feature";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ContactUsHome />
      <StoryHome />
      <ProjectData />
      <ServiceHome />
      <ClientComments />
      <FeatureHome />
    </main>
  );
}

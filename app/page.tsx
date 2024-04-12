import Image from "next/image";
import HeroBanner from "./home/hero-banner";
import ContactUsHome from "./home/contact-us";
import StoryHome from "./home/story";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ContactUsHome />
      <StoryHome />
    </main>
  );
}

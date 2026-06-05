import { Background } from "@/components/sections/Background";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { AISystems } from "@/components/sections/AISystems";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Metrics } from "@/components/sections/Metrics";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <AISystems />
        <TechStack />
        <Experience />
        <Metrics />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

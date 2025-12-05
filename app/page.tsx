import Image from "next/image";
import Hero from "./components/hero";
import Features from "./features/page";
import About from "./components/about";
import CTA from "./components/cta";
import Stats from "./components/stats";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* About Section */}
      <section>
        <About id="about" />
      </section>

      {/* features Section */}
      <section>
        <Features />
      </section>

      {/* Stats */}
      <section>
        <Stats />
      </section>

      {/* Coummnity CTA */}
      <section>
        <CTA id="community" />
      </section>
    </div>
  );
}

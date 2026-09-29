import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { HeroTools}  from "@/components/sections/HeroTools";
import  ToolsBento  from "@/components/sections/ToolsBento";
import { Integrations } from "@/components/sections/Integrations";
import { AllTools } from "@/components/sections/AllTools";
import { Behavior } from "@/components/sections/Behavior";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";
import Themes from "@/components/sections/Themes";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroTools />
        <ToolsBento />
        <Integrations />
        <Themes />
        <AllTools />
        <Behavior />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

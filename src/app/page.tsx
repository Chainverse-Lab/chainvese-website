import CTA from "@/components/CTA";
import DeliverySec from "@/components/DeliverySec";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import MilestoneSec from "@/components/MilestoneSec";
import MissionSec from "@/components/MissionSec";
import OurServiceSec from "@/components/OurServiceSec";
import ServicesSec from "@/components/ServicesSec";
import TechSlider from "@/components/TechSlider";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <MissionSec />
      <LogoCloud />
      <OurServiceSec />
      <DeliverySec />
      <MilestoneSec />
      <ServicesSec/>
      <Testimonials />
      <CTA />
    </main>
  );
}

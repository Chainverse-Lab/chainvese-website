import ServicesHero from "@/components/ServicesPages/ServicesHero";
import WhyUs from "@/components/ServicesPages/WhyUs";
import TechSlider from "@/components/TechSlider";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Crafting Your Unique Tech Solutions!"
        para="Tailor your solutions to perfection with Chainverse Labs' customizable offerings. Our team collaborates closely with you to understand your unique requirements and delivers bespoke blockchain solutions. From feature-rich applications to intricate smart contracts, our customizable services empower you to shape your digital future according to your vision and goals."
        imgSrc="/hero-web.png"
      />
      {/* <WhyUs />
      <TechSlider /> */}
    </main>
  );
};

export default page;

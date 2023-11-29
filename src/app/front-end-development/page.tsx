import ServicesHero from "@/components/ServicesPages/ServicesHero";
import WhyUs from "@/components/ServicesPages/WhyUs";
import TechSlider from "@/components/TechSlider";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero />
      <WhyUs />
      <TechSlider/>
    </main>
  );
};

export default page;

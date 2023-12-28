import ServicesHero from "@/components/ServicesPages/ServicesHero";
import WhyUs from "@/components/ServicesPages/WhyUs";
import TechSlider from "@/components/TechSlider";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Designing Your Digital Experience, Pixel by Pixel!"
        para="Minimize time to market with Chainverse Labs' ReadyMade MVP solutions. Our pre-built Minimum Viable Products are designed to accelerate your product launch, allowing you to quickly validate ideas and gather valuable user feedback. Empower your business with a head start in the competitive landscape, thanks to our customizable and ready-to-deploy solutions."
        imgSrc="/hero-web.png"
      />
      {/* <WhyUs />
      <TechSlider /> */}
    </main>
  );
};

export default page;

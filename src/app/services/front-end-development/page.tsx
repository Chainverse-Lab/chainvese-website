import ServicesHero from "@/components/ServicesPages/ServicesHero";
import { WhyUsWeb } from "@/components/ServicesPages/WhyUs";
import TechSlider from "@/components/TechSlider";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Designing Your Digital Experience, Pixel by Pixel!"
        para="Your digital presence deserves to be more than just stunning – it
              should be captivating, immersive, and unforgettable. At
              ChainVerse, we specialize in weaving digital magic through our
              bespoke Frontend Web Development Services."
              imgSrc="/herosImgs/front-end.png"
      />
      <WhyUsWeb />
      <TechSlider />
    </main>
  );
};

export default page;

import ServicesHero from "@/components/ServicesPages/ServicesHero";
import WhyUs from "@/components/ServicesPages/WhyUs";
import TechSlider from "@/components/TechSlider";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Transforming Ideas into Digital Marvels – That’s"
        para="Your digital presence deserves to be more than just stunning – it
            should be captivating, immersive, and unforgettable. At
            ChainVerse, we specialize in weaving digital magic through our
            bespoke Frontend Web Development Services."
        imgSrc="/hero-web.png"
      />
      <WhyUs />
      <TechSlider />
    </main>
  );
};

export default page;

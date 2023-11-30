import React from "react";
import { Button } from "../ui/button";

const ServicesHero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-12 sm:gap-20 lg:grid-cols-2">
        <div className="max-w-[620px] lg:max-w-[844px]">
          <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
            Transforming Ideas into Digital Marvels – That’s{" "}
            <span className="hero_heading text-black px-1">Our Expertise!</span>
          </h1>
          <div className="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
            <p className="text-sm text-[#636262]">
              Your digital presence deserves to be more than just stunning – it
              should be captivating, immersive, and unforgettable. At
              ChainVerse, we specialize in weaving digital magic through our
              bespoke Frontend Web Development Services.
            </p>
          </div>

          <div className="flex gap-6">
            <Button variant="outline">Get in Touch</Button>
            <Button>Get in Touch</Button>
          </div>
        </div>
        <div className="relative left-4 h-full max-h-[500px] w-[85%] lg:left-0 lg:w-full">
          <img
            src="/hero-web.png"
            alt=""
            className="relative h-full w-full max-w-[800px]  rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

import { WebDevTechSlideData } from "@/constants/config-data";
import Image from "next/image";
import React from "react";

const TechSlider = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-8">
      <h1 className="text-3xl gradient text-center">
        Front End Web Technologies we use
      </h1>
      <div className="slider w-full max-w-6xl">
        <div className="containerSlide">
          {WebDevTechSlideData.map((logo, index) => (
            <div
              className="sliderImg flex flex-col items-center text-center"
              key={index}
            >
              <Image
                className="imageSlide"
                src={logo.Img}
                alt={logo.name}
                width={60}
                height={60}
              />
              <span className="dark:text-white text-xs font-normal">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSlider;

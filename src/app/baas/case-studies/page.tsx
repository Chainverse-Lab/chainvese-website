import ServicesHero from "@/components/ServicesPages/ServicesHero";
import TechSlider from "@/components/TechSlider";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Unveiling Blockchain Success"
        para="Discover real-world success stories with Chainverse Labs. Our case studies showcase how businesses across industries have leveraged our blockchain solutions to overcome challenges and achieve unprecedented growth. Explore these stories to understand how we turn ideas into impactful realities, empowering businesses with the transformative potential of blockchain."
        imgSrc="/hero-web.png"
      />
      {/* <WhyUs />
      <TechSlider /> */}
    </main>
  );
};

export default page;

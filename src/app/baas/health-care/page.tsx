import ServicesHero from "@/components/ServicesPages/ServicesHero";
import TechSlider from "@/components/TechSlider";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Secure Healthcare Solutions!"
        para="In the healthcare industry, precision and security are paramount. Chainverse Labs offers blockchain solutions that enhance data integrity, streamline processes, and ensure patient confidentiality. Join us in revolutionizing healthcare by embracing decentralized technologies that bring transparency and efficiency to the forefront of medical operations."
        imgSrc="/hero-web.png"
      />
      {/* <WhyUs />
      <TechSlider /> */}
    </main>
  );
};

export default page;

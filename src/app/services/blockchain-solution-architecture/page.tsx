import ServicesHero from "@/components/ServicesPages/ServicesHero";
import WhyUs from "@/components/ServicesPages/WhyUs";
import TechSlider from "@/components/TechSlider";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Shaping Tomorrow's Secure Solutions."
        para="At Chainverse Labs, we understand that a solid foundation is crucial for successful blockchain solutions. Our experts specialize in designing robust and scalable blockchain architectures. Whether you're exploring public or private blockchains, our tailored solutions ensure optimal performance, security, and efficiency. Trust us to architect the future of your business with blockchain technology."
        imgSrc="/hero-web.png"
      />
      <WhyUs />
      <TechSlider />
    </main>
  );
};

export default page;

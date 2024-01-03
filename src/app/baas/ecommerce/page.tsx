import ServicesHero from "@/components/ServicesPages/ServicesHero";
import TechSlider from "@/components/TechSlider";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Secure E-commerce Solutions!"
        para="In the fast-paced world of e-commerce, staying ahead is key. Chainverse Labs provides blockchain solutions that enhance the security of online transactions, optimize supply chain management, and ensure transparency in product provenance. Elevate your e-commerce game with our innovative blockchain services that pave the way for a new era of secure and efficient online business."
        imgSrc="/hero-web.png"
      />
      {/* <WhyUs />
      <TechSlider /> */}
    </main>
  );
};

export default page;

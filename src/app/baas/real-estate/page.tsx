import ServicesHero from "@/components/ServicesPages/ServicesHero";
import TechSlider from "@/components/TechSlider";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Transforming Real Estate"
        para="Unlock the potential of blockchain in real estate with Chainverse Labs. From transparent property transactions to smart contracts automating lease agreements, our solutions redefine the real estate landscape. Explore how our blockchain services bring trust, speed, and security to property transactions, making real estate processes more reliable and efficient."
        imgSrc="/herosImgs/real-estate.png"
      />
      {/* <WhyUs />
      <TechSlider /> */}
    </main>
  );
};

export default page;

import ServicesHero from "@/components/ServicesPages/ServicesHero";
import { WhyUsBdAmb } from "@/components/ServicesPages/WhyUs";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Transforming Blockchain Projects with AWS Cloud Services and AMB"
        para="Welcome to Chainverse, where the synergy of AWS cloud services and Amazon Managed Blockchain (AMB) propels your blockchain projects to new heights. Explore our comprehensive solutions tailored for public, private, and consortium blockchains, leveraging the power and reliability of AWS infrastructure."
        imgSrc="/herosImgs/amb.png"
      />

      <WhyUsBdAmb />
      {/*<TechSlider /> */}
    </main>
  );
};

export default page;

import FeatureCard from "@/components/BDevFeaturedCard";
import ServicesHero from "@/components/ServicesPages/ServicesHero";
import { WhyUsBdPrivate } from "@/components/ServicesPages/WhyUs";
import { PrivateBcCardsData } from "@/constants/config-data";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Elevate Your Enterprise with Secure Private Blockchain Solutions"
        para="Experience the next level of efficiency and security with Chainverse  private blockchain solutions. Tailored for enterprises, our private blockchain offers unparalleled control and customization for your business processes."
        imgSrc="/hero-web.png"
      />
      <section className="">
        <h1 className="lg:text-5xl md:text-5xl text-3xl  font-extrabold gradient">
          Key Features
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 my-12">
          {PrivateBcCardsData.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
      <WhyUsBdPrivate />
      {/*<TechSlider /> */}
    </main>
  );
};

export default page;

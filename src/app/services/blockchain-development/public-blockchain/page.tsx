import FeatureCard from "@/components/BDevFeaturedCard";
import ServicesHero from "@/components/ServicesPages/ServicesHero";
import { WhyUsBdPublic } from "@/components/ServicesPages/WhyUs";
import { PublicCardsData } from "@/constants/config-data";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Unleash the Power of Public Blockchain"
        para="At Chainverse, we believe in the transformative potential of public blockchains. Join a global network of participants where transparency, decentralization, and inclusivity reign supreme."
        imgSrc="/herosImgs/pubBc.png"
      />
      <section className="">
        <h1 className="lg:text-5xl md:text-5xl text-3xl  font-extrabold gradient">
          Key Features
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 my-12">
          {PublicCardsData.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
      <WhyUsBdPublic />
      {/*<TechSlider /> */}
    </main>
  );
};

export default page;

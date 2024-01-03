import FeatureCard from "@/components/BDevFeaturedCard";
import ServicesHero from "@/components/ServicesPages/ServicesHero";
import { WhyUsBdPublic } from "@/components/ServicesPages/WhyUs";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <ServicesHero
        heading="Unleash the Power of Public Blockchain"
        para="At Chainverse, we believe in the transformative potential of public blockchains. Join a global network of participants where transparency, decentralization, and inclusivity reign supreme."
        imgSrc="/hero-web.png"
      />
      <section className="">
        <h1 className="lg:text-5xl md:text-5xl text-3xl  font-extrabold gradient">
          Key Features
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 my-12">
          {cardsData.map((card, index) => (
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

const cardsData = [
  {
    title: "Decentralization",
    description:
      "Experience the power of a decentralized network where no single entity controls the system. Public blockchain brings true democracy to transactions.",
  },
  {
    title: "Transparency",
    description:
      "Every transaction is visible to all participants, fostering trust and eliminating the risk of fraud. Public blockchain is the epitome of transparency in the digital age.",
  },
  {
    title: "Accessibility",
    description:
      "Open the doors to innovation. Our public blockchain is accessible to individuals, developers, and businesses, providing a platform for the development of decentralized applications (DApps).",
  },
  {
    title: "Security",
    description:
      "Through consensus mechanisms, our public blockchain ensures the highest level of security, making it resistant to tampering and fraud.",
  },
];

import FeatureCard from "@/components/BDevFeaturedCard";
import ServicesHero from "@/components/ServicesPages/ServicesHero";
import { WhyUsBdPrivate } from "@/components/ServicesPages/WhyUs";

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
          {cardsData.map((card, index) => (
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

const cardsData = [
  {
    title: "Permissioned Access",
    description:
      "Control who participates in your private blockchain. Enjoy enhanced security and privacy with restricted access.",
  },
  {
    title: "Scalability",
    description:
      "Our private blockchain scales seamlessly with the growth of your enterprise, ensuring it remains a robust solution for your evolving needs.",
  },
  {
    title: "Efficiency",
    description:
      "Streamline your workflows with smart contracts and automated processes. Reduce operational costs and minimize the risk of errors.",
  },
  {
    title: "Customization",
    description:
      "Adapt the blockchain to your business logic with customizable features. Our private blockchain aligns seamlessly with your organization's unique requirements.",
  },
];

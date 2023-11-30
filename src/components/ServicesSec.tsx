import React from "react";
import { Card, CardContent, CardDescription } from "./ui/card";
import Image from "next/image";

const ServicesSec = () => {
  const cardsData = [
    {
      title: "WORKSHOPS",
      imageSrc: "/icons/workshop.png",
      description:
        "Collaborate with our Web3 specialists to brainstorm and develop your product ideas.",
    },
    {
      title: "UI/UX",
      imageSrc: "/icons/ui.png",
      description:
        "Constructing beautiful interfaces and intuitive experience for your users.",
    },
    {
      title: "CONSULTING",
      imageSrc: "/icons/consulting.png",
      description:
        "Engage our experts for advice on decentralised technology,Web3 products and blockchain.",
    },
    {
      title: "ARCHITECTURE",
      imageSrc: "/icons/arch.png",
      description:
        "Designing optimal and innovative system structures to underpin your product",
    },
    {
      title: "DEVELOPMENT",
      imageSrc: "/icons/dev.png",
      description:
        "Constructing beautiful interfaces and intuitive experience for your users",
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-20 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center font-bold gradient">
          ACROSS ANY STAGE
        </h1>
        <p className="lg:w-1/2 text-center text-muted-foreground">
          We don&apos;t just code, we&apos;re a one-stop-shop for product
          development! From consulting on direction, to running workshops,
          designing interfaces, and architecting solutions - we&apos;ve got you
          covereds.
        </p>
        <div className="my-12 w-full gap-4 flex flex-wrap justify-center items-center max-w-7xl">
          {cardsData.map((card, index) => (
            <Card key={index} className="lg:w-1/4 lg:h-full h-[155px] p-2">
              <CardContent className="pt-2 flex justify-center items-center gap-4">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
                <CardDescription className="flex flex-col text-xs">
                  <span className="text-lg md:text-xl lg:text-xl font-bold text-black dark:text-white">
                    {card.title}
                  </span>
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;

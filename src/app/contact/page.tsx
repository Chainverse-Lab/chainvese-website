import ContactForm from "@/components/contactPage/ContactForm";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { ContactCardsData } from "@/constants/config-data";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="py-10 px-6 lg:px-12 flex justify-center items-center">
      <section className="grid lg:grid-cols-2 gap-10">
        <ContactForm />
        {/* <div className="">
          <div className="space-y-5">
            {ContactCardsData.map((card, index) => (
              <Card key={index} className="lg:w-[60%]">
                <CardContent className="pt-2 flex items-center gap-4">
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
        </div> */}
      </section>
    </main>
  );
};

export default page;


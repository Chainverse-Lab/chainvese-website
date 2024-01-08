import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  para: string;
  imgSrc: string;
};

const ServicesHero = ({ heading, para, imgSrc }: Props) => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 gap-12 sm:gap-20 lg:grid-cols-2">
        <div className="max-w-[620px] lg:max-w-[844px]">
          <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
            {heading}
            <br />
            <span className="hero_heading text-black px-1">Our Expertise!</span>
          </h1>
          <div className="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
            <p className="text-base md:text-xl ">{para}</p>
          </div>

          <Link href="/contact" className="flex gap-6">
            <Button variant="outline">Get in Touch</Button>
          </Link>
        </div>
        <div className="relative left-4 h-full max-h-[500px] w-[85%] lg:left-0 lg:w-full">
          <Image
            src={imgSrc}
            alt="Hero"
            className="relative h-full w-full max-w-[600px] rounded-2xl"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

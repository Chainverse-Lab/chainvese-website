import { clientsLogos } from "@/constants/config-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoCloud = () => {
  return (
    <section>
      <div className="relative flex flex-col items-center overflow-hidden px-4 py-20 md:py-40 ">
        <div className="container relative z-[1] m-auto px-6 md:px-12">
          <div className="m-auto text-center md:w-8/12 lg:w-6/12">
            <h2 className="text-2xl font-bold  md:text-4xl gradient">
              Our Clients We Worked for to contribute to the development of
              Web3.0
            </h2>
          </div>
          <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
            <div className="flex flex-wrap justify-center gap-6">
              {clientsLogos.map((logo, index) => (
                <Link
                  href={""}
                  key={index}
                  className="group rounded-xl border bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="contrast-0 transition group-hover:contrast-100 w-36 h-10"
                    width={1000}
                    height={1000}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;

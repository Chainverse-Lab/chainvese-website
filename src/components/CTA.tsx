import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="px-6 lg:px-12 pb-12 flex justify-center">
      <div className="max-w-7xl px-6 bg-gradient-to-r from-blue-700 via-purple-600 to-orange-600 p-8 text-white flex md:flex-row flex-col items-center justify-center md:justify-around md:p-16 rounded-xl">
        <div className="md:mr-10 md:mb-10 mb-0 text-center md:text-start">
          <h2 className="mb-8 max-w-lg text-3xl font-bold sm:text-4xl">
            READY TO BUILD SOMETHING AMAZING?
          </h2>
        </div>
        <div className="whitespace-nowrap">
          <Button className="bg-white text-black hover:bg-black hover:text-white">
            Say Hi 👋
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

"use client";
import React from "react";
import { EarthCanvas } from "./canvas";
import { motion } from "framer-motion";
import { slideIn, textBlurIn } from "@/utils/motion";

const Hero = () => {
  return (
    <section className="flex justify-center items-center">
      <div
        className={`mt-12 grid grid-col-1 lg:grid-cols-2 lg:gap-8 overflow-hidden lg:px-8`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] max-w-[620px] lg:max-w-[844px] "
        >
          <div className="lg:px-10 lg:pt-20 lg:w-full flex flex-col justify-center">
            {/* <h3 className="text-lg lg:text-2xl font-bold uppercase text-center lg:text-start">
              Pakistan&apos;s{" "}
            </h3> */}
            <h1 className="mb-4 text-4xl uppercase font-extrabold tracking-wide text-center lg:text-start leading-none md:text-5xl xl:text-9xl dark:text-white">
              Web 3.0
            </h1>
            <motion.h1
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              variants={textBlurIn}
              className="mb-4 text-3xl uppercase font-extrabold tracking-widest text-center lg:text-start leading-none md:text-5xl  xl:text-7xl text-black hero_heading"
            >
              Development.
            </motion.h1>

            {/* <p className="text-lg lg:text-2xl flex lg:justify-start justify-center  font-bold dark:text-white text-center text-black">
              Agency
            </p> */}
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex justify-center  lg:h-[650px] md:h-[450px] h-[350px] "
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

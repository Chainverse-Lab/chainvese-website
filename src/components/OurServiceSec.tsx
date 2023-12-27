"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/utils/motion";

const OurServiceSec = () => {
  return (
    <motion.section
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="px-6 lg:px-12"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex justify-end"
      >
        <Card className="lg:w-1/2">
          <CardHeader>
            <CardTitle className="lg:text-right gradient">
              Our Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="flex flex-col lg:text-right gap-4">
              <span className="text-3xl font-bold text-black dark:text-white">
                End-to-end Web3 product design, development & deployment
              </span>
              Across any industry vertical, our specialised project squads can
              scope requirements, architect systems, design the UI/UX, build and
              ship your product.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default OurServiceSec;

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

const MissionSec = () => {
  return (
    <motion.section
      className="px-6 lg:px-12"
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex justify-start"
      >
        <Card className="lg:w-1/2">
          <CardHeader>
            <CardTitle className="gradient">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="flex flex-col gap-4">
              <span className="text-3xl font-bold text-black dark:text-white">
                Shaping the NEW WORLD through blockchain & Web3 innovation
              </span>
              We believe in the world-changing promise of decentralised
              technologies and partner with project teams from across the globe
              to accelerate adoption.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default MissionSec;

"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const webDevelopmentServices = [
  {
    id: 1,
    num: "01",
    title: "Responsive Web Design",
    color: "bg-blue-700",
    shadow: "shadow-blue-700/10",
  },
  {
    id: 2,
    num: "02",
    title: "Custom User Interface Development",
    color: "bg-purple-600",
    shadow: "shadow-purple-600/10",
  },
  {
    id: 3,
    num: "03",
    title: "Frontend Framework Implementation",
    color: "bg-orange-600",
    shadow: "shadow-orange-600/10",
  },
  {
    id: 4,
    num: "04",
    title: "Optimized Performance & Speed",
    color: "bg-pink-600",
    shadow: "shadow-pink-600/10",
  },
  {
    id: 5,
    num: "05",
    title: "Progressive Web App (PWA) Development",
    color: "bg-indigo-600",
    shadow: "shadow-indigo-600/10",
  },
];

const WhyUs = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="lg:text-5xl md:text-5xl text-3xl text-center font-extrabold gradient">
          Why choose us for Front-End web development services?
        </h1>
        <p className="py-4">
          Custom web development solutions specially crafted for your industry
          help your business with:
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {webDevelopmentServices.map((data) => (
            <BounceCard
              key={data.id}
              className={`rounded-full border p-2 shadow-xl ${data.shadow} hover:`}
            >
              <div className="flex items-center gap-4 px-2">
                <div
                  className={`w-[50px] h-[50px] p-6 rounded-full ${data.color} flex justify-center items-center text-white`}
                >
                  <p className="lg:text-xl font-bold">{data.num}</p>
                </div>
                <p className="text-xs lg:text-lg font-semibold">{data.title}</p>
              </div>
            </BounceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

const BounceCard = ({
  className,
  children,
}: {
  className: string;

  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

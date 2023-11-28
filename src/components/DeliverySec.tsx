import React from "react";
import { BsFillSquareFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const data = [
  {
    title: "FULL PROJECT SQUAD",
    description:
      "Elevate your product delivery to the next level with a dedicated, multi-skilled team at your fingertips.",
    list: ["Project Manager", "Designer", "Developer", "Tester"],
    dotColor: "text-blue-700",
    bgColor: "bg-blue-700",
  },
  {
    title: "CRYPTO NATIVE TEAM",
    description:
      "Your squad is made up of talented individuals who are also power users of Web3 products & protocols, experienced across the entire Web3 stack.",
    list: ["Project Manager", "Designer", "Developer", "Tester"],
    dotColor: "text-purple-600",
    bgColor: "bg-purple-600",
  },
  {
    title: "DELIVERED YOUR WAY",
    description:
      "Unleash the power of a dedicated team at your disposal. Our goal is to empower you to hit your goals.",
    list: ["Project Manager", "Designer", "Developer", "Tester"],
    dotColor: "text-orange-600",
    bgColor: "bg-orange-600",
  },
];

const DeliverySec = () => {
  return (
    <section className="py-10 px-6 lg:px-12">
      <div className="mt-12 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold gradient">What We Deliver</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-12">
          {data.map((item, index) => (
            <Card
              key={index}
              className="lg:w-[300px] md:w-[300px] w-[280px] relative"
            >
              <span
                className={`absolute top-0 right-0 w-6 h-6 text-xs font-bold ${item.bgColor} text-white flex items-center justify-center rounded-full`}
              >
                <AiOutlineCheck />
              </span>
              <CardHeader>
                <CardTitle className="tracking-widest leading-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="h-[90px]">
                  {item.description}
                </CardDescription>
                <div className="border-b py-2"></div>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="space-y-2 mt-4">
                  {item.list.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-2 items-center">
                      <span className={`text-xs ${item.dotColor}`}>
                        <BsFillSquareFill />
                      </span>{" "}
                      {role}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="my-8 flex px-6 flex-col space-y-6">
          <div className="border-2 border-b"></div>
          <p className="text-center">
            Your dedicated crypto-native team is thrilled to build products they
            can&apos;t wait to use.
          </p>
          <div className="border-2 border-b"></div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySec;

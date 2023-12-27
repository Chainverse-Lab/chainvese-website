import React from "react";
import { BsFillSquareFill } from "react-icons/bs";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const data = [
  {
    title: "POC",
    description:
      "Demonstrate the feasibility or potential value of your idea or approach to validate it before committing significant resources to its development.",
    list: [
      "Suitable for early-stage and self-funded teams",
      "Ultra low cost entry to validate product concept",
      "Use as a tool to secure venture funding, or demonstrate product value to stakeholders",
    ],
    dotColor: "text-blue-700",
    titleColor: "text-blue-700",
    borderColor: "border-blue-700/10",
    btnColor: "bg-blue-700",
    shadowColor: "shadow-blue-500/10",
    additionalInfo: "Proof Of Concept",
    deliveryTime: "2-6 weeks",
  },
  {
    title: "MVP",
    description:
      "A cost-effective way to validate market demand and gather feedback on your product or service, it's a great way to showcase your value proposition to target customers and improve chances of success",
    list: [
      "Suitable for teams with seed funding, ready to launch their first live product",
      "Low cost strategy for quickly bringing a product to market",
      "Establish a foundation for future feature iterations",
    ],
    dotColor: "text-purple-600",
    titleColor: "text-purple-600",
    borderColor: "border-purple-600/10",
    btnColor: "bg-purple-600",
    shadowColor: "shadow-purple-500/10",
    additionalInfo: "Minimum Viable Product",
    deliveryTime: "4-8 weeks",
  },
  {
    title: "PRODUCTION",
    description:
      "The production version is the final, fully tested and functional version of the product that is released for live use at scale. It's undergone extensive testing and is supported by the developers for bugs and updates.",
    list: [
      "Suitable for teams with sufficient funding, ready to scale up",
      "Deploy robust, industry-leading software",
      "Required for existing production systems rolling out additional features",
    ],
    dotColor: "text-orange-600",
    titleColor: "text-orange-600",
    borderColor: "border-orange-600/10",
    btnColor: "bg-orange-600",
    shadowColor: "shadow-orange-500/10",
    additionalInfo: "LIVE/RELEASE VERSION",
    deliveryTime: "8-12 weeks",
  },
];

const MilestoneSec = () => {
  return (
    <section className="py-10 px-6 lg:px-12">
      <div className="mt-12 flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center font-bold gradient">
          DELIVERING EACH MILESTONE
        </h1>
        <p className="lg:w-1/2 text-center text-muted-foreground">
          No matter your budget, timeline, or needs, we&apos;ll craft a custom
          development package that fits seamlessly into your Web3 project
          journey and propels you towards success.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-12">
          {data.map((item, index) => (
            <Card
              key={index}
              className={`lg:w-[300px] md:w-[300px] w-[280px] border-2 border-gray-800 shadow-xl ${item.borderColor} ${item.shadowColor}`}
            >
              <CardHeader>
                <CardTitle
                  className={`${item.titleColor} tracking-widest leading-2`}
                >
                  {item.title}
                  <p className="text-sm text-muted-foreground">
                    {item.additionalInfo}
                  </p>
                </CardTitle>
                <div className="border-b py-2"></div>
                <CardDescription className="h-[90px] text-xs">
                  {item.description}
                </CardDescription>
                <div className="border-b py-2"></div>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="space-y-6 mt-4">
                  {item.list.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4  text-xs">
                      <span className={` mt-1 text-xs ${item.dotColor}`}>
                        <BsFillSquareFill />
                      </span>{" "}
                      {role}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-xs">
                  <p>Typical delivery time</p>
                  <p className={`font-bold tracking-widest ${item.titleColor}`}>
                    {item.deliveryTime}
                  </p>
                </div>
                <Link href="/contact" className="mt-6 flex justify-center">
                  <Button
                    className={`font-normal text-white text-xs ${item.btnColor} hover:${item.btnColor} hover:bg-opacity-70`}
                  >
                    Enquire For {item.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestoneSec;

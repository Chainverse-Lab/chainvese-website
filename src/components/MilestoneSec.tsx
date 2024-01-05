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
import { MileStoneData } from "@/constants/config-data";

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
          {MileStoneData.map((item, index) => (
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

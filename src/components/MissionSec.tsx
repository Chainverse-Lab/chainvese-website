import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const MissionSec = () => {
  return (
    <section className="px-6 lg:px-12">
      <div className="flex justify-start">
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
      </div>
    </section>
  );
};

export default MissionSec;

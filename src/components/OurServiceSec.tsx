import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const OurServiceSec = () => {
  return (
    <section className="px-6 lg:px-12">
      <div className="flex justify-end">
        <Card className="lg:w-1/2">
          <CardHeader>
            <CardTitle className="lg:text-right gradient">Our Services</CardTitle>
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
      </div>
    </section>
  );
};

export default OurServiceSec;

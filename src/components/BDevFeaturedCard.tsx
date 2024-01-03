import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card className="lg:w-[300px] md:w-[300px] w-[280px] relative">
      <CardHeader>
        <CardTitle className="tracking-widest leading-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-left">{description}</CardContent>
    </Card>
  );
};

export default FeatureCard;

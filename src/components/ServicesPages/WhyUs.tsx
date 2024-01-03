"use client";
import React from "react";
import { BounceCard } from "../animated/BonceCard";
import {
  bcDevAMB,
  bcDevPrivate,
  bcDevPublic,
  bcSolServices,
  webDevelopmentServices,
} from "@/constants/config-data";

export const WhyUsWeb = () => {
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

export const WhyUsBc = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="lg:text-5xl md:text-5xl text-3xl text-center font-extrabold gradient">
          Why choose us for Blockchain Solution Architecture?
        </h1>
        <p className="py-4">
          Blockchain Solution Architecture specially crafted for your industry
          help your business with:
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {bcSolServices.map((data) => (
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

export const WhyUsBdPublic = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="lg:text-5xl md:text-5xl text-3xl text-center font-extrabold gradient">
          Why choose us for Public Blockchain Development?
        </h1>
        <p className="py-4">
          Blockchain Development specially crafted for your industry help your
          business with:
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {bcDevPublic.map((data) => (
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
export const WhyUsBdPrivate = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="lg:text-5xl md:text-5xl text-3xl text-center font-extrabold gradient">
          Why choose us for Private Blockchain Development?
        </h1>
        <p className="py-4">
          Private Blockchain Development specially crafted for your industry
          help your business with:
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {bcDevPrivate.map((data) => (
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

export const WhyUsBdAmb = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="lg:text-5xl md:text-5xl text-3xl text-center font-extrabold gradient">
          Why choose us for Amazon Managed Blockchain Development?
        </h1>
        <p className="py-4">
          Amazon Managed Blockchain Development specially crafted for your
          industry help your business with:
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {bcDevAMB.map((data) => (
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

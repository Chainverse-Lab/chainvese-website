"use client";
import Slider from "react-slick";
import "@/styles/slick.css";
import "@/styles/slick-theme.css";
import React, { Component } from "react";
import { postData } from "@/constants/config-data";

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <div className="px-6 lg:px-12 lg:py-32" id="testimonial">
        <h1 className="text-2xl font-bold gradient text-center">
          WHAT OUR CLIENTS SAY
        </h1>
        <div className="mx-auto max-w-7xl lg:px-8">
          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div
                  className={`m-4 p-5 my-20 relative ${
                    i % 2 ? "middleDiv" : "testimonial-shadow"
                  }`}
                >
                  <h4 className="text-base font-normal text-darkgray my-4">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "#D7D5D5" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-sm font-normal text-lightgray pb-2">
                        {items.profession}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

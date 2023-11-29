import Image from "next/image";
import React from "react";

const data = [
  { name: "JavaScript", Img: "/TechIcons/Js.svg" },
  { name: "TypeScript", Img: "/TechIcons/Ts.svg" },
  { name: "ReactJS", Img: "/TechIcons/React.svg" },
  { name: "NextJS", Img: "/TechIcons/Next.svg" },
  { name: "HTML5", Img: "/TechIcons/Html.svg" },
  { name: "CSS3", Img: "/TechIcons/Css.svg" },
  { name: "Figma", Img: "/TechIcons/Figma.svg" },
  { name: "TailwindCss", Img: "/TechIcons/Tailwindcss.svg" },
  { name: "MaterialUI", Img: "/TechIcons/mui.svg" },
  { name: "Bootstrap5", Img: "/TechIcons/Bootstrap.svg" },
  { name: "SASS", Img: "/TechIcons/sass.svg" },
  { name: "ThreeJS", Img: "/TechIcons/threejs.svg" },
  { name: "Shopify", Img: "/TechIcons/shopify.svg" },
];

const TechSlider = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4">
      Our Tech Stack
      <div className="slider w-full max-w-6xl">
        <div className="containerSlide">
          {data.map((logo, index) => (
            <div
              className="sliderImg flex flex-col items-center text-center"
              key={index}
            >
              <Image
                className="imageSlide"
                src={logo.Img}
                alt={logo.name}
                width={60}
                height={60}
              />
              <span className="dark:text-white text-xs font-normal">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSlider;

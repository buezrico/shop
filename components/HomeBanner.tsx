"use client";

import React from "react";
import bag from "@/public/bag_for_banner.png";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const HomeBanner = () => {
  return (
    <div className="relative flex items-center justify-between h-[65vh] md:h-screen py-10">
      <div className="container mx-auto w-full h-full px-8 ">
        {/* <p className="">Redefine Your Style</p> */}
        <div className="w-full md:w-4/6 lg:w-3/5 flex flex-col justify-center gap-4 h-full z-20">
          <p className="text-5xl lg:text-7xl font-bold z-20">
            <span className="block">Discover</span>{" "}
            <div className="text-rose-700">
              <Typewriter
                words={[
                  "Luxury Bags.",
                  "Elegant Jewelries.",
                  "Unmatched Style.",
                ]}
                loop={0}
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </div>
          </p>
          <p className="font-semibold lg:text-lg z-20">
            Discover premium collections that define style, quality, and class —
            designed to complement every occasion.
          </p>
          <Slide direction="left" className="z-20">
            <button className="bg-black border-2 border-black text-white text-sm md:text-lg font-medium px-8 md:px-16 py-4 hover:bg-white hover:text-black w-fit mt-4">
              Explore Collections
            </button>
          </Slide>
        </div>
        <div className="absolute bottom-0 right-0 w-48 md:w-72 lg:w-96 z-10">
          <Image src={bag} alt="bag" className="w-full h-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

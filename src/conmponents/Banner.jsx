/* eslint-disable no-unused-vars */
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  return (
    <div className="banner relative">
      <img
        className="w-full object-cover h-64 md:h-screen"
        src="https://i.postimg.cc/0NvD2rMb/banner12333.jpg"
        alt="Banner"
      />
      <div className="banner-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="banner-content bg-transparent border-white absolute inset-0 flex flex-col justify-center items-start px-6 md:px-11">
        <h1 className="text-xl md:text-4xl tracking-wider   font-bold mb-4 text-zinc-400">
          Unleash Your Imagination. <br /> Explore the Epic World of Action
          Figures.
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-zinc-600">
          Find Your Favorite Heroes and Villains. Create Your Own Heroic
          Storyline.
        </p>
      </div>
    </div>
  );
};

export default Banner;

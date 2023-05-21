/* eslint-disable no-unused-vars */
import React from "react";

import "../conmponents/styles/root.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  return (
    <div className="banner relative max-h-screen z-0 relative">
      <div className="absolute right-1/2 top-1/2 hover:right-0 bg-slate-300 animate-bounce animate-pulse opacity-50 hover:opacity-100 px-8 py-4">
        <h3 className="text-4xl font-mono text-black">
          Discover some premium action figure toy here. <br /> All relevant toys
          is Up for you!!!
        </h3>
        <p className="text-base font-sans ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quia,
          praesentium veritatis eveniet blanditiis hic.
        </p>
      </div>
      <img
        className="w-full object-cover h-64 md:h-screen"
        src="https://i.postimg.cc/0NvD2rMb/banner12333.jpg"
        alt="Banner"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        data-aos="fade-up"
        className="absolute inset-0  flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg">Discover a world of possibilities.</p>
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 mt-8 rounded">
          Learn More
        </button>
      </div>
      {/* <div className="absolute left-5 -bottom-6">
        <img className="w-44 h-60" src={spiderman} alt="" />
      </div> */}
    </div>
  );
};

export default Banner;

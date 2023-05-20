/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../public/banner12333.jpg";
import "../conmponents/styles/root.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  return (
    <div className="banner relative max-h-screen z-0 ">
      <img
        className="w-full object-cover h-64 md:h-screen"
        src={banner}
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

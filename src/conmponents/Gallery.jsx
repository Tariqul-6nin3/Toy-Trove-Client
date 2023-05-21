/* eslint-disable no-unused-vars */

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
    });
  }, []);

  return (
    <div className="my-container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Toys Gallery</h2>
      <div className="flex flex-wrap justify-center">
        <div>
          <div
            data-aos="flip-up"
            className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src="https://i.postimg.cc/k5hJYpmq/gallery1.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="flip-up"
            className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src="https://i.postimg.cc/9fS2Ywdf/gallery2.jpg"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="flip-up"
          className="w-60 h-96 mx-2 my-4 mt-auto  bottom-0 rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
          <img
            className="object-cover rounded-xl w-full h-full"
            src="https://i.postimg.cc/VkkcyW46/gallery7.jpg"
            alt=""
          />
        </div>
        <div>
          <div
            data-aos="flip-up"
            className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src="https://i.postimg.cc/ZnS1w8CJ/gallery4.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="flip-up"
            className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src="https://i.postimg.cc/Qdyw2GH4/gallery5.jpg"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="flip-up"
          className="w-60 h-96 mx-2 my-4 mt-auto relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
          <img
            className="object-cover rounded-xl w-full h-full"
            src="https://i.postimg.cc/50cGtB58/gallery6.jpg"
            alt=""
          />
        </div>
        <div>
          <div
            data-aos="flip-up"
            className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src="https://i.postimg.cc/3xVfLXcz/gallery8.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="flip-up"
            className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src="https://i.postimg.cc/Qtr4DXsb/galllery9.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

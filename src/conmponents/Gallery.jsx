/* eslint-disable no-unused-vars */
import gallery1 from "../../public/gallery1.jpg";
import gallery2 from "../../Public/gallery2.jpg";
import gallery3 from "../../public/gallery7.jpg";
import gallery4 from "../../public/gallery4.jpg";
import gallery5 from "../../public/gallery5.jpg";
import gallery6 from "../../public/gallery6.jpg";
import gallery8 from "../../public/gallery8.jpg";
import gallery9 from "../../public/gallery9.jpg";

const Gallery = () => {
  return (
    <div className="my-container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Toys Gallery</h2>
      <div className="flex flex-wrap justify-center">
        <div>
          <div className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src={gallery1}
              alt=""
            />
          </div>
          <div className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src={gallery2}
              alt=""
            />
          </div>
        </div>
        <div className="w-60 h-96 mx-2 my-4 mt-auto  bottom-0 rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
          <img
            className="object-cover rounded-xl w-full h-full"
            src={gallery3}
            alt=""
          />
        </div>
        <div>
          <div className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src={gallery4}
              alt=""
            />
          </div>
          <div className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src={gallery5}
              alt=""
            />
          </div>
        </div>
        <div className="w-60 h-96 mx-2 my-4 mt-auto relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
          <img
            className="object-cover rounded-xl w-full h-full"
            src={gallery6}
            alt=""
          />
        </div>
        <div>
          <div className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src={gallery8}
              alt=""
            />
          </div>
          <div className="w-44 h-60 mx-2 my-4 relative rounded-xl overflow-hidden hover:scale-110 duration-200 transition-transform">
            <img
              className="object-cover rounded-xl w-full h-full"
              src={gallery9}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

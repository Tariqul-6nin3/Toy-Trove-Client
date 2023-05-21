import { FaVideo } from "react-icons/fa";

const Displaytoy = () => {
  return (
    <div className="lesson-info rounded-xl  my-container md:grid grid-cols-1 md:grid-cols-2 bg-white gap-4">
      <div className="px-4">
        <h2 className="md:text-5xl text-4xl text-left font-bold ">
          Premium action figure toys for kids Marvel,Starwar and Spiderman.
        </h2>
        <p className="text-2xl mt-6 md:mt-12 pe-8 ">
          Lets join us to get a appealing toys to enjoy your toy cravings.Every
          one here to catch primium toys.
        </p>
        <div className="flex flex-col-reverse md:flex-row mt-7 md:mt-12 justify-center md:gap-20">
          <button
            style={{
              background:
                "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
            }}
            className="btn-outline md:mx-2  text-white px-8 animate-bounce py-4 my-3  rounded-lg">
            Join Lessons
          </button>
          <button className="btn btn-outline mt-3 animate-bounce">
            <FaVideo className="text-2xl mr-4 "></FaVideo> Watch Our Videos
          </button>
        </div>
      </div>

      <div className="mt-7 md:mt-0">
        <img
          className="w-full h-full"
          src="https://i.postimg.cc/CLjvwWwR/mulyadi-j-TWTBh-VQ27w-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Displaytoy;

import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Subcategory from "./Subcategory";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ToyTrove | home</title>
      </Helmet>
      <div className="bg-[#e5e7eb]">
        <Banner />
        <Gallery />
        <Subcategory />
      </div>
    </>
  );
};

export default Home;

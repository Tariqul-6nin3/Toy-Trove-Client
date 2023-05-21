import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Subcategory from "./Subcategory";
import Displaytoy from "./Displaytoy";
import Category from "./Category";

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
        <Displaytoy />
        <Category />
      </div>
    </>
  );
};

export default Home;

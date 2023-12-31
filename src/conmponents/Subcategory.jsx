import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Marvel from "./Marvel";
import Avenger from "./Avenger";
import Starwar from "./Starwar";
const Subcategory = () => {
  return (
    <div className="my-container">
      <h1 className="text-4xl text-black text-center mb-10 font-serif font-extrabold">
        Toys Category
      </h1>
      <Tabs className="mx-auto w-full space-x-2 md:space-x-6 ">
        <div className="">
          <hr className="border-2 mb-3 font-bold text-black" />
          <TabList className="flex justify-center font-bold text-lg md:text-xl gap-2 md:gap-4">
            <Tab>Marvel</Tab>
            <Tab>Avenger</Tab>
            <Tab>StarWar</Tab>
          </TabList>
          <hr className="border-2 mt-4 font-bold text-black" />
        </div>

        <TabPanel>
          <Marvel />
        </TabPanel>
        <TabPanel>
          <Avenger />
        </TabPanel>
        <TabPanel>
          <Starwar />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Subcategory;

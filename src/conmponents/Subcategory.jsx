import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Subcategory = () => {
  return (
    <div className="my-container">
      <h1 className="text-4xl text-black text-center mb-10 font-serif font-extrabold">
        Toys Category
      </h1>
      <Tabs className="mx-auto w-full space-x-6 ">
        <div className="">
          <hr className="border-2 mb-3 font-bold text-black" />
          <TabList className="flex justify-center font-bold text-xl gap-4">
            <Tab>Marvel</Tab>
            <Tab>Avengers</Tab>
            <Tab>Star War</Tab>
          </TabList>
          <hr className="border-2 mt-4 font-bold text-black" />
        </div>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Subcategory;

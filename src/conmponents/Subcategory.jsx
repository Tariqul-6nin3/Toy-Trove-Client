import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Subcategory = () => {
  return (
    <div className="my-container">
      <Tabs className="mx-auto">
        <TabList>
          <Tab>Marvel</Tab>
          <Tab>Avengers</Tab>
          <Tab>Star War</Tab>
        </TabList>

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

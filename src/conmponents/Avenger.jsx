/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { myContext } from "../providers/Context";
import AvengerInfo from "./AvengerInfo";

const Avenger = () => {
  const [avenger, setAvenger] = useState();
  console.log(avenger);
  const { user } = useContext(myContext);
  useEffect(() => {
    const url = `https://toys-trove-server.vercel.app/marvel?subcategory=Avenger`;
    fetch(url)
      .then(res => res.json())
      .then(data => setAvenger(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {avenger?.map(singleAvenger => (
        <AvengerInfo
          key={singleAvenger._id}
          singleAvenger={singleAvenger}></AvengerInfo>
      ))}
    </div>
  );
};

export default Avenger;

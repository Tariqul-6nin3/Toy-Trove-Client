/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { myContext } from "../providers/Context";
import MarvelInfo from "./MarvelInfo";

const Marvel = () => {
  const [marvel, setMarvel] = useState();
  console.log(marvel);
  const { user } = useContext(myContext);
  useEffect(() => {
    const url = `http://localhost:5000/marvel?subcategory=Marvel`;
    fetch(url)
      .then(res => res.json())
      .then(data => setMarvel(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      {marvel?.map(singleMarvel => (
        <MarvelInfo
          key={singleMarvel._id}
          singleMarvel={singleMarvel}></MarvelInfo>
      ))}
    </div>
  );
};

export default Marvel;

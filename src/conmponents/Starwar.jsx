/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { myContext } from "../providers/Context";
import StarwarInfo from "./StarwarInfo";

const Starwar = () => {
  const [starwar, setStarwar] = useState();
  console.log(starwar);
  const { user } = useContext(myContext);
  useEffect(() => {
    const url = `http://localhost:5000/marvel?subcategory=StarWar`;
    fetch(url)
      .then(res => res.json())
      .then(data => setStarwar(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {starwar?.map(singleStarwar => (
        <StarwarInfo
          key={singleStarwar._id}
          singleStarwar={singleStarwar}></StarwarInfo>
      ))}
    </div>
  );
};

export default Starwar;

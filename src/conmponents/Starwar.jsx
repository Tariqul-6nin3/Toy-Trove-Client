/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { myContext } from "../providers/Context";

const Starwar = () => {
  const [starwar, setStarwar] = useState();
  console.log(starwar);
  const { user } = useContext(myContext);
  useEffect(() => {
    const url = `http://localhost:5000/marvel?subcategory=Starwar`;
    fetch(url)
      .then(res => res.json())
      .then(data => setStarwar(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font bold">{starwar?.length}</h1>
    </div>
  );
};

export default Starwar;

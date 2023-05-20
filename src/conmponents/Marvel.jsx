/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { myContext } from "../providers/Context";

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
    <div>
      <h1 className="text-4xl font bold">{marvel?.length}</h1>
    </div>
  );
};

export default Marvel;

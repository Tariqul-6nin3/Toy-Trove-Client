/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { myContext } from "../providers/Context";

const Avenger = () => {
  const [avenger, setAvenger] = useState();
  console.log(avenger);
  const { user } = useContext(myContext);
  useEffect(() => {
    const url = `http://localhost:5000/marvel?subcategory=Avenger`;
    fetch(url)
      .then(res => res.json())
      .then(data => setAvenger(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font bold">{avenger?.length}</h1>
    </div>
  );
};

export default Avenger;

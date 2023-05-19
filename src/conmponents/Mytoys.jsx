/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { myContext } from "../providers/Context";

const Mytoys = () => {
  const { user } = useContext(myContext);
  const [toys, setToys] = useState();
  useEffect(() => {
    const url = `http://localhost:5000/mytoys?email=${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setToys(data));
  }, []);
  return (
    <div>
      <h2>here is my toys {toys?.length}</h2>
    </div>
  );
};

export default Mytoys;

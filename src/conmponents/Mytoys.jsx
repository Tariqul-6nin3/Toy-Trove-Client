/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { myContext } from "../providers/Context";
import MytoyList from "./MytoyList";

const Mytoys = () => {
  const { user } = useContext(myContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/mytoys?email=${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setToys(data));
  }, []);
  return (
    <div className="my-container ">
      <h2 className="text-3xl font-bold text-black text-center">
        Here is my toys
      </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <span></span>
            </th>
            <th>Name</th>
            <th>Seller</th>
            <th>Sub-Category</th>
            <th>Available Qty</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
      </table>

      {toys.map(toy => (
        <MytoyList key={toy._id} toy={toy}></MytoyList>
      ))}
    </div>
  );
};

export default Mytoys;

/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { myContext } from "../providers/Context";
import MytoyList from "./MytoyList";
import { Vortex } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const Mytoys = () => {
  const { user, loading, setLoading } = useContext(myContext);
  const [toys, setToys] = useState([]);
  const [sortingOrder, setSortingOrder] = useState(""); // New state for sorting order

  useEffect(() => {
    if (!loading && user) {
      const url = `http://localhost:5000/mytoys?email=${user.email}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setToys(data);
          console.log(data);
        });
    }
  }, [loading, user]);

  useEffect(() => {
    fetch("http://localhost:5000/mysortedtoys")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }, []);

  const handleSortClick = order => {
    setSortingOrder(order);

    const sortedToys = toys.slice().sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      }
      return 0;
    });

    setToys(sortedToys);
  };

  if (!toys || toys.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>ToyTrove | mytoys</title>
      </Helmet>

      <div className="my-container ">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn m-1">
            Price
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button onClick={() => handleSortClick("asc")}>
                Low to high
              </button>
            </li>
            <li>
              <button onClick={() => handleSortClick("desc")}>
                High to low
              </button>
            </li>
          </ul>
        </div>
        <h2 className="text-3xl font-bold text-black text-center">
          Here are my toys
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
          <MytoyList key={toy._id} setToys={setToys} toys={toys} toy={toy} />
        ))}
      </div>
    </>
  );
};

export default Mytoys;

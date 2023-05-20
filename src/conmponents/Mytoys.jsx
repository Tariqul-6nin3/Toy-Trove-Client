/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { myContext } from "../providers/Context";
import MytoyList from "./MytoyList";
import { Vortex } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const Mytoys = () => {
  const { user, loading, setLoading } = useContext(myContext);
  const [toys, setToys] = useState([]);

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

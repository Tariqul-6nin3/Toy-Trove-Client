/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ToyList from "./ToyList";
import { Vortex } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const AllToys = () => {
  // const toysData = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);
  const [alltoys, setAlltoys] = useState();

  useEffect(() => {
    if (alltoys) {
      setIsLoading(false);
    }
  }, [alltoys]);
  useEffect(() => {
    const url = "http://localhost:5000/alltoys";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setAlltoys(data);
      });
  }, []);
  if (isLoading) {
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
        <title>ToyTrove | alltoys</title>
      </Helmet>
      <div className="my-container">
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
        {alltoys.map(toy => (
          <ToyList key={toy._id} toy={toy} />
        ))}
      </div>
    </>
  );
};

export default AllToys;

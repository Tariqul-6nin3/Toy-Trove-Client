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

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    fetch(`https://toys-trove-server.vercel.app/searchedtoys?name=${search}`)
      .then(res => res.json())
      .then(data => {
        setAlltoys(data);
      });
  };
  useEffect(() => {
    if (alltoys) {
      setIsLoading(false);
    }
  }, [alltoys]);
  useEffect(() => {
    const url = "https://toys-trove-server.vercel.app/alltoys";
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
      <form
        onSubmit={handleSubmit}
        className=" flex justify-center items-center ">
        <input
          type="text"
          name="search"
          placeholder="Search your toys"
          className="input mt-10 input-bordered input-info w-full max-w-xs"
        />
        <button
          style={{
            background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
          }}
          className="btn btn-outline md:mx-2 mt-9 text-white px-4">
          Search
        </button>
      </form>
      <div className="my-container space-y-3 overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <span></span>
              </th>
              <th>Toys name</th>
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

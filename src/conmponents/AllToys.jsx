/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import ToyList from "./ToyList";

const AllToys = () => {
  const toys = useLoaderData();

  return (
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
      {toys.map(toy => (
        <ToyList key={toy._id} toy={toy}></ToyList>
      ))}
    </div>
  );
};

export default AllToys;

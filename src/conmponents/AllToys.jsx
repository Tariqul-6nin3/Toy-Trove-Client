import { useLoaderData } from "react-router-dom";
import ToyList from "./ToyList";
// import ToyList from "./ToyList";

const AllToys = () => {
  const toysData = useLoaderData();

  console.log(toysData);

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
      {toysData.map(toy => (
        <ToyList key={toy._id} toy={toy} />
      ))}
    </div>
  );
};

export default AllToys;

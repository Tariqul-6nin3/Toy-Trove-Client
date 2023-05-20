// import { Rating } from "@smastrom/react-rating";

import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const ToyList = ({ toy }) => {
  // console.log(toy);
  const {
    _id,
    seller,
    name,
    photo,
    email,
    description,
    price,
    quantity,
    subcategory,
    rating,
  } = toy;
  console.log(_id);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <tbody>
          <tr>
            <th>
              <label>
                <button className="rounded-full bg-slate-900 text-white px-2 py-1">
                  X
                </button>
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{name}</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>{seller}</td>
            <td>{subcategory}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <th>
              <Link to={`/singletoy/${_id}`}>
                <button className="px-3 py-2 bg-slate-950 text-white rounded-xl">
                  View Details
                </button>
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToyList;

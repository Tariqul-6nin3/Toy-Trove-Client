/* eslint-disable no-unused-vars */

import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const singleToy = useLoaderData();
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
  } = singleToy;
  console.log(description);
  return (
    <div className="my-container w-8/12 mx-auto">
      <div className="card card-side grid grid-cols-2 bg-base-100 shadow-xl">
        <figure className="">
          <img className="" src={photo} alt="Action figure" />
        </figure>

        <div className="card-body">
          <h2 className="text-2xl font-bold">Name: {name}</h2>
          <p className=" text-lg">{description}</p>
          <p className="text-lg font-semibold">Category:{subcategory}</p>
          <p className="text-lg font-semibold">Pirce: ${price}</p>
          <p className="text-lg font-semibold">Avaiable Qty: {quantity} Ea</p>
          <p className="text-lg font-semibold">Email:{email}</p>

          <h3 className="text-lg font-semibold">Product Author: {seller}</h3>
          <div className="card-actions justify-start">
            <Rating readOnly style={{ maxWidth: 120 }} value={rating}></Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;

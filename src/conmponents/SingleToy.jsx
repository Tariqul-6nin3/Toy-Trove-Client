/* eslint-disable no-unused-vars */

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
    <div className="my-container">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Action figure" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{subcategory}</p>
          <p>${price}</p>
          <p>Avaiable Qty: {quantity}</p>
          <p>Email:{email}</p>

          <h3>Product Author: {seller}</h3>
          <div className="card-actions justify-end">
            <p>Ratings:{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;

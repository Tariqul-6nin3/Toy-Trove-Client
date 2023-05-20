/* eslint-disable no-unused-vars */

import { Rating } from "@smastrom/react-rating";

const AvengerInfo = ({ singleAvenger }) => {
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
  } = singleAvenger;
  console.log(photo);
  return (
    <div className="card menu-item card-compact pt-2 pb-7 w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-96 px-2 py-4 w-full object-cover  rounded-md"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="px-4 py-2">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <h2 className="card-title text-2xl font-bold">{seller}</h2>
          <p className="mt-3 text-base">{description}</p>
          <h4 className="text-lg mt-2 font-semibold">
            Experience:
            <span className="text-stone-950"> {email}</span>
          </h4>
          <p className="mt-2">{price} $</p>
          <p className="mt-2">{quantity} $</p>

          <div className="card-actions mt-3 flex flex-col md:flex-row justify-between items-center">
            <div className="mt-1">
              <Rating
                readOnly
                style={{ maxWidth: 120 }}
                value={rating}></Rating>
            </div>
            <button className="btn-secondary">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvengerInfo;

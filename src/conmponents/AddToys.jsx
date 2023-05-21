/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { myContext } from "../providers/Context";
import animationdata2 from "../../src/assets/update.json";
import Lottie from "react-lottie";

const AddToys = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationdata2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { user } = useContext(myContext);
  console.log(user);
  const handelAddToy = event => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newToy = {
      photo,
      name,
      seller,
      email,
      subcategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(newToy);

    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      });
  };
  const toastifying = () => {
    toast("Toy Up For Sell Successfully!!!");
  };

  return (
    <>
      <Helmet>
        <title>ToyTrove | addtoys</title>
      </Helmet>
      <div
        style={{
          background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
        }}
        className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 py-10">
        <div className="max-w-lg flex items-center animate-pulse mx-auto">
          <Lottie options={defaultOptions} height={850} width={550} />
        </div>
        <div className="col-span-2">
          <h2 className="text-4xl font-bold mb-8 text-center text-white font-serif">
            Add A Toy
          </h2>
          <form
            onSubmit={handelAddToy}
            className=" grid grid-cols-1 md:grid-cols-2 max-w-3xl gap-5 mx-auto p-12 bg-[#e5e7eb] rounded-2xl shadow-2xl">
            <div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="pictureUrl">
                  Picture URL of the Toy
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="pictureUrl"
                  name="photo"
                  type="text"
                  placeholder="Enter Picture URL"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter Toy Name"
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="sellerName">
                  Seller Name
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="sellerName"
                  type="text"
                  defaultValue={user.displayName}
                  name="seller"
                  placeholder="Enter Seller Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="sellerEmail">
                  Seller Email
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="sellerEmail"
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  placeholder="Enter Seller Email"
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="subCategory">
                  Sub-category
                </label>
                <select
                  className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subCategory"
                  name="subcategory"
                  required>
                  <option value="Marvel">Marvel</option>
                  <option value="Avenger">Avenger</option>
                  <option value="StarWar">Star War</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="price">
                  Price
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="rating">
                  Rating
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="rating"
                  type="number"
                  name="rating"
                  placeholder="Enter Rating"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="quantity">
                  Available Quantity
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="quantity"
                  type="number"
                  name="quantity"
                  placeholder="Enter Available Quantity"
                  required
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="mb-6 w-9/12 mx-auto">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="description">
                  Detail Description
                </label>
                <textarea
                  className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  name="description"
                  placeholder="Enter Detail Description"
                  required></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  style={{
                    background:
                      "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                  }}
                  onClick={toastifying}
                  className="bg-purple-700  hover:bg-purple-800 text-white font-bold py-2 px-4 w-1/3 rounded-full focus:outline-none focus:shadow-outline"
                  type="submit">
                  Add Toy
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={true}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddToys;

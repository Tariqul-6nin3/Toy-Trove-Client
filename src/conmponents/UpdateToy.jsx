import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

/* eslint-disable no-unused-vars */
const UpdateToy = ({ _id }) => {
  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const newToy = { price, quantity, description };

    fetch(`https://toys-trove-server.vercel.app/mytoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Your toy has been Updated.", "success");
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>ToyTrove | mytoys</title>
      </Helmet>
      <div>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box bg-[#e5e7eb]  w-11/12 max-w-4xl">
            <form onSubmit={handleUpdate} className="w-8/12  mx-auto">
              <h2 className="text-3xl mt-6 text-black font-bold text-center">
                Update your toy Info
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-bold mb-2">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="w-full border-b-2 border-gray-300 focus:border-blue-500  appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight shadow-2xl focus:outline-none focus:shadow-outline"
                  placeholder="Enter price"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 font-bold mb-2">
                  Available Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="w-full border-b-2 border-gray-300 focus:border-blue-500  appearance-none border rounded py-2 px-3 text-gray-700 leading-tight shadow-2xl focus:outline-none focus:shadow-outline"
                  placeholder="Enter quantity"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2">
                  Detail Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className=" border-b-2 border-gray-300 focus:border-blue-500  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight shadow-2xl focus:outline-none focus:shadow-outline"
                  rows="4"
                  placeholder="Enter description"></textarea>
              </div>
              <div className="text-center">
                <button
                  style={{
                    background:
                      "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                  }}
                  type="submit"
                  className="bg-blue-500 w-1/2  hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                  Update
                </button>
              </div>
            </form>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Back?
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateToy;

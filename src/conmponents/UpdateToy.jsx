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

    fetch(`http://localhost:5000/mytoys/${_id}`, {
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
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form onSubmit={handleUpdate} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="price" className="block font-medium mb-1">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                  placeholder="Enter price"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="quantity" className="block font-medium mb-1">
                  Available Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                  placeholder="Enter quantity"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block font-medium mb-1">
                  Detail Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                  rows="4"
                  placeholder="Enter description"></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Update
                </button>
              </div>
            </form>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateToy;

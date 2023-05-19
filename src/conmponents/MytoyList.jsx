import Swal from "sweetalert2";

/* eslint-disable no-unused-vars */
const MytoyList = ({ toy }) => {
  console.log(toy);
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
  const handleDelelte = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        console.log("deleted");
        fetch(`http://localhost:5000/alltoys/${_id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <table className="table w-full">
        <tbody>
          <tr>
            <th>
              <label>
                <button
                  onClick={() => handleDelelte(_id)}
                  className="rounded-full bg-slate-900 text-white px-2 py-1">
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
              <button className="px-3 py-2 bg-slate-950 rounded-xl">
                view Details
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MytoyList;

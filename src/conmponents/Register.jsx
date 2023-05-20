/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../providers/Context";
import animationdata2 from "../../src/assets/tariqul.json";
import Lottie from "react-lottie";
import { Helmet } from "react-helmet";

const Register = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationdata2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();
  const [error, setError] = useState();
  const { createUser } = useContext(myContext);
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(email, password);
    // validattion email

    if (password != confirm) {
      setError("Your password doesn't match. Please check again");
    } else if (password.length < 6) {
      setError("Password Could not be less than 6 character");
    } else if (!email) {
      setError("Please update your email");
    }
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);

        form.reset();
        setError("");
        navigate("/login");
      })
      .catch(error => setError(error.message));
  };

  return (
    <>
      <Helmet>
        <title>ToyTrove | register</title>
      </Helmet>
      <div
        style={{
          background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
        }}
        className="grid gap-0 grid-cols-2 py-16 ">
        <div className="max-w-lg flex items-center animate-pulse mx-auto">
          <Lottie options={defaultOptions} height={650} width={500} />
        </div>
        <div className="w-10/12 mx-auto">
          <div className="max-w-xl w-11/12 md:w-full md:max-w-2xl  md:space-y-6 py-10 mx-auto ">
            <form
              onSubmit={handleRegister}
              className=" w-11/12 flex-shrink-0 mx-auto rounded-xl bg-[#e5e7eb] shadow-2xl  px-3 md:px-4">
              <div className=" text-center"></div>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-gray-700 font-bold mb-1">Name</span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    placeholder="name"
                    className="border-b-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-gray-700 font-bold mb-1">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="border-b-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-gray-700 font-bold mb-1">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="border-b-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-gray-700 font-bold mb-1">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="confirm"
                    placeholder="Confirm password"
                    className="border-b-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-1"
                    htmlFor="photo">
                    Profile Photo URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="photo"
                    type="text"
                    name="photo"
                    placeholder="Enter the URL for your profile photo"
                  />
                </div>
                <p className="text-red-700 text-xl font-semibold">{error}</p>
                <div className="form-control w-full md:w-1/2 mx-auto mt-3">
                  <button
                    style={{
                      background:
                        "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                    }}
                    className="btn text-white ">
                    Sign Up
                  </button>
                </div>
                <p className="text-gray-700 text-xl mt-2 font-semibold">
                  Already have an account?
                  <Link
                    className="text-red-500 ml-2 text-lg font-semibold"
                    to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

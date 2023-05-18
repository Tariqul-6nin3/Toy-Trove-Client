/* eslint-disable no-unused-vars */
import animationData from "../assets/green-login.json";
import Lottie from "react-lottie";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { myContext } from "../providers/Context";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const { loggedInUser } = useContext(myContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loggedInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        form.reset();
        // navigate(from, { replace: true });
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
      }}
      className="flex items-center h-screen bg-gray-100">
      <div className="w-full max-w-5xl mx-auto flex md:flex-row flex-col justify-between items-center">
        <div className="w-full md:w-1/2">
          <div className="max-w-lg mx-auto">
            <Lottie options={defaultOptions} height={400} width={350} />
          </div>
        </div>
        <form
          onSubmit={handleLogin}
          className="bg-white px-8 py-6 rounded-t-2xl md:ml-8 md:px-12 md:py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Login</h2>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              className="border-b-2 border-gray-300 focus:border-blue-500  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight shadow-2xl focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="border-b-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Login
            </button>
          </div>
          <hr className="border-2 text-black text-center mb-6" />
          <div className="flex md:flex-row flex-col justify-center">
            {/* Social login buttons */}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 text-base">
              New to here? Please{" "}
              <Link
                className="text-red-500 ml-2 text-lg font-semibold"
                to="/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/toylogo.png";
import { useContext, useState } from "react";
import { myContext } from "../providers/Context";
import { Tooltip } from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { logOutUser, user } = useContext(myContext);
  const [open, setOpen] = useState(true);

  const handlelogOut = () => {
    logOutUser()
      .then(() => {
        console.log("signOut successfully");
        toast("LogOut successfully!!!");
      })
      .catch(error => {});
  };

  return (
    <div className="navbar md:px-8 py-6  flex justify-evenly bg-zinc-50">
      <div className="flex-none  md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-10 h-10  text-black stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex-1 ju">
        <img className="w-10 h-10" src={logo} alt="" />
        <h3 className="text-3xl font-serif font-bold ">ToyTrove</h3>
      </div>
      <div className="flex justify-center">
        <div
          className={`px-14 text-2xl font-semibold md:text-xl z-20 list-none md:flex md:space-x-6 ${
            open
              ? "absolute -top-40 md:top-6 right-0"
              : "absolute top-24 bg-slate-50 w-full text-center  flex gap-3 left-0 h-96 pt-3 pb-4 items-center  flex-col "
          }`}>
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alltoys"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              All Toys
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              aria-label="Blogs"
              title="Blogs"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Blogs
            </NavLink>
          </li>

          {user ? (
            <div className="md:flex  space-y-4 md:space-y-0 md:gap-4">
              <li>
                <NavLink
                  to="/mytoys"
                  aria-label="Blogs"
                  title="Blogs"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addtoys"
                  aria-label="Blogs"
                  title="Blogs"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  Add a Toys
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  onClick={handlelogOut}
                  to="/login"
                  aria-label="login"
                  title="login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  LogOut
                </NavLink>
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
              </li>
              <div className="mb-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div
                    className="w-24 rounded-full mb-16"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName}
                    data-tooltip-place="left">
                    <Tooltip id="my-tooltip"></Tooltip>
                    <img src={user.photoURL} alt={user.photoURL} />
                  </div>
                </label>
              </div>
            </div>
          ) : (
            <li className="">
              <NavLink
                to="/login"
                aria-label="login"
                title="login"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                LogIn
              </NavLink>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/toylogo.png";
import { useContext, useState } from "react";
import { myContext } from "../providers/Context";
import { Tooltip } from "react-tooltip";
const Header = () => {
  const { logOutUser, user } = useContext(myContext);
  const [open, setOpen] = useState(true);

  const handlelogOut = () => {
    logOutUser()
      .then(() => {})
      .catch(error => {});
    console.log("signOut successfully");
  };
  return (
    <div className="navbar flex justify-around bg-stone-500 text-white">
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
      <div className="flex-1 gap-3">
        <img className="w-12 h-12" src={logo} alt="" />
        <h3 className="text-3xl font-serif font-bold ">ToyTrove</h3>
      </div>
      <div className="flex-none   gap-2">
        <div
          className={`md:mr-20 text-2xl font-semibold md:text-xl list-none md:flex md:space-x-12 ${
            open
              ? "absolute -top-40 md:top-6 right-0"
              : "absolute top-16 bg-orange-100 w-full text-center  flex gap-3 left-0 h-48 pt-3 pb-4 items-center  flex-col "
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
              to="/"
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
            <div>
              <li>
                <NavLink
                  onClick={handlelogOut}
                  to="/login"
                  aria-label="login"
                  title="login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  SignOut
                </NavLink>
              </li>
              <div className="mb-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div
                    className="w-10 rounded-full mb-4"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName}
                    data-tooltip-place="left">
                    <Tooltip id="my-tooltip"></Tooltip>
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
              </div>
            </div>
          ) : (
            <li>
              <NavLink
                to="/login"
                aria-label="login"
                title="login"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Login
              </NavLink>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

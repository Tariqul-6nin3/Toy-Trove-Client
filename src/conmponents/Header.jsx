/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
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
    <div className="navbar justify-between bg-base-100 container mx-auto">
      <div className="flex-1 ju">
        <img
          className="w-10 h-10 animate-bounce animate-pulse"
          src={logo}
          alt=""
        />
        <Link to="/">
          <h3 className="text-3xl font-serif font-bold ">ToyTrove</h3>
        </Link>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end hidden lg:block">
          <ul tabIndex={0} className="flex gap-5 items-center font-bold ">
            <Link>
              {" "}
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Home
              </li>
            </Link>
            <Link to="/blogs">
              {" "}
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Blogs
              </li>
            </Link>
            <Link to="/alltoys">
              {" "}
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                All Toys
              </li>
            </Link>
            {user ? (
              <>
                <Link to="/mytoys">
                  {" "}
                  <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                    My Toys
                  </li>
                </Link>
                <Link to="/addtoys">
                  <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                    Add Toys
                  </li>
                </Link>
              </>
            ) : (
              ""
            )}
            <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
              {user ? (
                <button
                  className="btn btn-primary w-full"
                  onClick={handlelogOut}>
                  LogOut
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary w-full">Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-end sm:ml-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div
              className="w-12 rounded-full"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user ? user.displayName : "Add User"}>
              <Tooltip className="z-30" id="my-tooltip"></Tooltip>
              <img
                src={
                  user
                    ? user.photoURL
                    : "https://cdn-icons-png.flaticon.com/512/16/16363.png?w=740&t=st=1684413586~exp=1684414186~hmac=099d827d099e8fcd0fd10f202d63209149e7afa823db4512bc04a76d8b9e8761"
                }
                alt=""
              />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="menu lg:hidden dropdown-content divide-y mt-3 px-6 py-2 shadow bg-base-100 rounded-box w-72 md:w-72 text-lg">
            <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            </li>
            <Link>
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Home
              </li>
            </Link>
            <Link to="/blog">
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Blogs
              </li>
            </Link>
            <Link to="/allToys">
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                All Toys
              </li>
            </Link>
            {user ? (
              <>
                <Link to="/myToys">
                  {" "}
                  <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                    My Toys
                  </li>
                </Link>
                <Link to="/addToys">
                  <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                    Add Toys
                  </li>
                </Link>
              </>
            ) : (
              ""
            )}
            <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
              {user ? (
                <button
                  className="btn btn-primary w-full"
                  onClick={handlelogOut}>
                  LogOut
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary w-full">Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

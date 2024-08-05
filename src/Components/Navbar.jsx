import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import imgg8 from "../assets/WhatsApp Image 2024-08-01 at 22.00.16_75995844.jpg"

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto bg-black ">
      <Link to="/">
        <img src={imgg8} height={32} width={160} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-richblack-100 ">
          <li className=" text-xl p-2 font-bold hover:shadow-md rounded-lg hover:shadow-green-300">
            <Link to="/">Home</Link>
          </li>
          <li className=" text-xl p-2 font-bold hover:shadow-md rounded-lg hover:shadow-green-300">
            <Link to="/about">About</Link>
          </li>
          <li className=" text-xl p-2 font-bold hover:shadow-md rounded-lg hover:shadow-green-300">
            <Link to="/Hub">Food Hub</Link>
          </li>
          <li className=" text-xl p-2 font-bold hover:shadow-md rounded-lg hover:shadow-green-300">
            <Link to="/Vol">Volunteer</Link>
          </li>
        </ul>
      </nav>

     

      <div className="flex items-center gap-x-4 text-richblack-100">
        {!isLoggedIn && (
          <Link to="/login" className=" hover:shadow-md rounded-lg hover:shadow-green-300">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup" className=" hover:shadow-md rounded-lg hover:shadow-green-300">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logout Sucessfully");
              }}
              className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
   
    </div>
  );
};

export default Navbar;

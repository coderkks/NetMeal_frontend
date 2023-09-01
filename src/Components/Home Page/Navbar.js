import React from "react";
import NM from "../Images/NM_logo.png";
import '../CSS/otherStyle.css'
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";
import axios from "axios";
import Dropdown from "../Utilities/Dropdown";

export default function Navbar() {
  const { user, logout } = useAuth();
  console.log("IN navbar, user : ", user);
  const handleCollapse = (e) => {
    const navPages = document.getElementById("navPages");
    if (e.target.textContent === "\u{02630}") {
      e.target.textContent = "\u{02715}";
      navPages.classList.remove("hidden");
      navPages.classList.add("flex");
    } else {
      e.target.textContent = "\u{02630}";
      navPages.classList.remove("flex");
      navPages.classList.add("hidden");
    }
  };

  const logoutUser = async () => {
    console.log("trying to log out");
    await axios.get("/user/logout");
    logout();
  };

  return (
    <div className="sticky top-0 z-50 xl:px-32 flex justify-center bg-slate-800 text-white ">
      <nav className="self-center w-full max-w-full  ">
        <div className="flex md:flex-row flex-col  justify-between items-center md:items-start">
          <div className="flex w-full md:w-auto justify-center items-center">
            <Link id="brandName" className="flex flex-row items-center" to="/">
              <img src={NM} alt="" className="w-9 h-9 ml-2 rounded-full" />
              <h1 className=" py-4 text-2xl font-sans font-bold px-2">
                NetMeal
              </h1>
            </Link>
            <div className="mx-5 px-1 border border-gray-600 absolute right-0 md:hidden">
              <button onClick={handleCollapse} className=" text-2xl">
                &#9776;
              </button>
            </div>
          </div>
          <ul
            id="navPages"
            className=" justify-center my-4  items-center hidden md:flex text-sm md:text-[18px] font-bold  md:px-10"
          >
            <li className="md:hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="md:hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
              <NavLink to="/plans">Plans</NavLink>
            </li>
            <li className="md:hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
              <NavLink to="/about">About</NavLink>
            </li>
            {user ? (
              <li>
                <Dropdown title={user.name.split(' ')[0]}>
                  <li className="hover:text-green-400 cursor-pointer">
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  {(user.role === "admin") && 
                  <li className="hover:text-green-400 cursor-pointer">Admin</li>}
                  
                  <li>
                    <button className="hover:text-green-400  cursor-pointer flex flex-row" onClick={logoutUser}>
                      <span className="pr-[8px]">Logout</span>
                      <span className="flex items-center md:items-start">
                        <span className="md:pt-[2px]">&#10140;</span>
                        <span className="font-semibold">{`]`}</span>
                      </span>
                      {/* <span className="gg-log-in mt-1 h-[14px] md:h-[18px]"></span> */}
                    </button>
                  </li>
                </Dropdown>
              </li>
            ) : (
              <li className="md:hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

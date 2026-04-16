import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl "><span className="font-bold text-[#1f2937]">Keen</span><span className="text-[#244d3f]">Keeper</span></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal  gap-3">
            <li>
              <button className="btn btn-xs text-[#64748b] sm:btn-sm md:btn-md lg:btn-md xl:btn-md"><IoHome /> Home</button>
            </li>
            <li>
              <button className="btn btn-xs text-[#64748b] sm:btn-sm md:btn-md lg:btn-md xl:btn-md"><MdAccessTimeFilled /> Timeline</button>
            </li>
            <li>
               <button className="btn btn-xs text-[#64748b] sm:btn-sm md:btn-md lg:btn-md xl:btn-md"><ImStatsDots /> Stats</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

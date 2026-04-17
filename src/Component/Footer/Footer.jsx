import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-center bg-green-800 text-white ">
      <p className="pt-9 pb-4">
        <span className="text-4xl font-bold ">Keen</span>
        <span className="text-4xl">Keeper</span>
      </p>

      <p className="mb-7 ">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <div>
        <p className="text-2xl font-medium">Social Links</p>
        <div className="flex justify-center  gap-4 mt-3 mb-7">
          <a href="#" className="bg-white text-[#101727] rounded-full p-2">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="bg-white text-[#101727] rounded-full p-2">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="bg-white text-[#101727] rounded-full p-2">
            <BsTwitterX size={20} />
          </a>
        </div>
      </div>

      <div className="container flex justify-around pb-7 border-t border-dashed pt-5" >
        <p>&copy; 2026 KeenKeeper. All rights Reserved.</p>

        <ul className="flex justify-between  lg:gap-8">
          <li>Privacy Policy</li>
          <li>Terms of Services</li>
          <li>Cookies</li>
        </ul>


      </div>
    </div>
  );
};

export default Footer;

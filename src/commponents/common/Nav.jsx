import React, { useEffect, useState } from "react";

const Nav = (props) => {
  return (
    <div className="px-4">
      <nav className="max-w-[1141px] w-full mx-auto flex justify-between items-center py-[24px]">
        <div className="log text-white text-[16px] font-semibold">
          <img src="/images\png\starworks.png" alt="" />
        </div>
        <ul className="hidden md:flex gap-[32px] text-[#cfcfcf] text-[16px] font-normal">
          <li>
            <a className="nav-link " href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link " href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav-link " href="#">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link " href="#">
              Works
            </a>
          </li>
          <li>
            <a className="nav-link " href="#">
              FAQ
            </a>
          </li>
        </ul>
        <button className="hidden md:flex py-[12px] px-[24px] text-white custom-bg-1 shadow-1 rounded-[6px] font-semibold text-[16px] ">
          Get In Touch
        </button>
        <div className="space-y-2 blsck md:hidden " onClick={props.click}>
          <span
            className={`block w-8 h-0.5 bg-gray-600 transition duration-500 ${
              props.open ? "rotate-[38deg] origin-left" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-gray-600 transition duration-500 ${
              props.open ? " w-0 h-0" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-600 transition duration-500  ${
              props.open ? "-rotate-[38deg] origin-left w-8" : ""
            }`}
          ></span>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

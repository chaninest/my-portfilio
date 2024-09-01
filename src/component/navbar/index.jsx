import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-[#041c9d] text-[#fff] text-2xl py-3 fixed z-10 w-full">
      <div className="flex justify-end items-end px-4 md:px-12">
        <a className="btn btn-ghost text-3xl font-semibold">Portfolio</a>
        <div className="flex justify-between">
          <ul className="menu menu-horizontal flex space-x- items-end text-end text-[#fff] font-semibold">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li className="ml-auto">
              <details className="dropdown">
                <summary><a href="#projects">Project</a></summary>
                <ul className="bg-[#041c9d] text-[#fff] rounded-t-none p-2">
                  <li><a >Project1</a></li>
                  <li><a >Project2</a></li>
                  <li><a >Project3</a></li>
                </ul>
              </details>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
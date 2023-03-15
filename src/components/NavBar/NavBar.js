import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex">
         <Link href="/"> <img
            className="h-9 w-40"
            src="https://www.planndesign.com/pndlogo.png"
            alt="logo"
          /></Link>
        </div>
        <div>
          <ul className="flex gap-8 ml-12">
            <li className="font-bold text-lg">Drawing Store</li>
            <li className="font-bold text-lg">Design Ideas</li>
            <li className="font-bold text-lg">Buying Guide</li>
            <li className="font-bold text-lg">Videos</li>
            <li className="font-bold text-lg">Portfolio</li>
            <li></li>
          </ul>
        </div>
        <div className="flex ml-12">
            <p className="font-bold text-lg">LogIn</p>
            <input type="text" placeholder="Search" className="input  input-bordered w-full ml-5" />
        </div>
       
      </div>
    </nav>
  );
};

export default NavBar;

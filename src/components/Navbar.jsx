import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className=" flex flex-col justify-start items-center gap-3 bg-gray-800
      
     min-w-full 
          text-white"
    >
      <div className="flex flex-row bg-gray-900 max-w-full w-full justify-around p-3 text-xl">
        <Link to="/">Home</Link>
        <Link to={"/paste"}>Paste</Link>
      </div>
    </div>
  );
};

export default Navbar;

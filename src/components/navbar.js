import React from "react";
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
   
      <nav className="menu  bg-gray-400 py-1 backdrop-filter 
                backdrop-blur-md  bg-opacity-5  text-white flex  justify-between fixed top-0 w-full shadow-md shadow-slate-900 ">
        
        <Link className="nav-link" to="/"><img src="./Bhati.png" alt="" className="w-12 h-12 ml-2" /></Link>

        <ul className=" space-x-4 flex justify-end items-center mx-1 ">
          
          
          <Link className="nav-link" to="./about"><button className=" font-mono cursor-pointer  rounded-lg shadow-md hover:shadow-blue-900 px-1">About</button></Link> 
          <Link className="nav-link" to="./blogs"><button className=" font-mono cursor-pointer  rounded-lg shadow-md hover:shadow-blue-900 px-1">Blogs</button></Link>
           
          <Link className="nav-link" to="./contact"><button className=" font-mono cursor-pointer rounded-lg shadow-md hover:shadow-blue-900 px-1">Contact</button></Link>
        </ul>
      </nav>
      
    </>
  );
}

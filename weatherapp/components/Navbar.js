import React from "react";
import Link  from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="bg-blue-400 text-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              classNameName="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-3 text-xl cursor-pointer">WeatherNow</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
            <Link href={"/about"} className="mr-5 hover:text-gray-900">About</Link>
            <Link href={"/weather"} className="mr-5 hover:text-gray-900">Weather</Link>
            <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact Us</Link>
          </nav>
          <div className="flex space-x-2">
            {/* <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
              Login
            </button>
            <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
              Signup
            </button> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

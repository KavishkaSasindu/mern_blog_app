import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full lg:h-[300px] flex justify-center items-center mt-16 bg-[#22223b]">
        <div className="w-[90%] h-[300px]  flex justify-center items-center">
          <ul className="flex flex-col space-y-2 lg:space-y-0 lg:space-x-8 lg:flex-row justify-center items-center">
            <li className="px-2 py-1 lg:px-3 lg:py-2 bg-cyan-900 text-white rounded-lg flex justify-center items-center hover:bg-cyan-600 hover:ease-in hover:duration-300">
              <Link to={"postDetail/categories/agriculture"}>Agriculture</Link>
            </li>
            <li className="px-2 py-1 lg:px-3 lg:py-2 bg-cyan-900 text-white rounded-lg flex justify-center items-center hover:bg-cyan-600 hover:ease-in hover:duration-300">
              <Link to={"postDetail/categories/business"}>Business</Link>
            </li>
            <li className="px-2 py-1 lg:px-3 lg:py-2 bg-cyan-900 text-white rounded-lg flex justify-center items-center hover:bg-cyan-600 hover:ease-in hover:duration-300">
              <Link to={"postDetail/categories/education"}>Education</Link>
            </li>
            <li className="px-2 py-1 lg:px-3 lg:py-2 bg-cyan-900 text-white rounded-lg flex justify-center items-center hover:bg-cyan-600 hover:ease-in hover:duration-300">
              <Link to={"postDetail/categories/art"}>Art</Link>
            </li>
            <li className="px-2 py-1 lg:px-3 lg:py-2 bg-cyan-900 text-white rounded-lg flex justify-center items-center hover:bg-cyan-600 hover:ease-in hover:duration-300">
              <Link to={"postDetail/categories/investments"}>Investments</Link>
            </li>
            <li className="px-2 py-1 lg:px-3 lg:py-2 bg-cyan-900 text-white rounded-lg flex justify-center items-center hover:bg-cyan-600 hover:ease-in hover:duration-300">
              <Link to={"postDetail/categories/unCategorize"}>
                UnCategorize
              </Link>
            </li>
            <li className="px-2 py-1 lg:px-3 lg:py-2 bg-cyan-900 text-white rounded-lg flex justify-center items-center hover:bg-cyan-600 hover:ease-in hover:duration-300">
              <Link to={"postDetail/categories/weather"}>Weather</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

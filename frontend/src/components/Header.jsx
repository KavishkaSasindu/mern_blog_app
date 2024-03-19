import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-[100%] h-[70px]  flex justify-center shadow-lg shadow-slate-300/50 items-center bg-white/20 fixed backdrop-blur-lg top-0">
        <div className="w-[90%] h-[50px]  flex justify-between items-center  z-1">
          <div className="text-xl">
            <Link to={"/"}>Blogger</Link>
          </div>
          <div className="hidden md:flex">
            <ul className="flex space-x-14">
              <Link to={"userProfile"}>Profile</Link>
              <Link to={"author"}>Authors</Link>
              <Link to={"createPost"}>Create post</Link>
              <Link to={"logOut"}>Logout</Link>
            </ul>
          </div>
          <div className="md:hidden">
            {/* <AiOutlineClose /> */}
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

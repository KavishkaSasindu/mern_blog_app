import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-[100%] h-[80px] border flex justify-center items-center">
        <div className="w-[90%] h-full border border-red-950 flex justify-between items-center">
          <div>Logo</div>
          <div className="hidden md:flex">
            <ul className="flex space-x-14">
              <Link to={"userProfile"}>Profile</Link>
              <Link to={"author"}>Authors</Link>
              <Link to={"createPost"}>Create post</Link>
              <Link to={"logOut"}>Logout</Link>
            </ul>
          </div>
          <div className="md:hidden">
            <AiOutlineClose />
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

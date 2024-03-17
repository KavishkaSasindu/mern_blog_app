import React from "react";
import PostItems from "../components/PostItems";
import Sunset from "../assets/pexels-brittany-87812.jpg";

const Home = () => {
  return (
    <div className="w-[100%] h-screen border mt-5 mb-5 flex justify-center items-center">
      <div className="w-[90%] h-full border grid  grid-cols-4 ">
        <PostItems />
        <PostItems />
        <PostItems />
        <PostItems />
        <PostItems />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import PostItems from "../components/PostItems";
import Sunset from "../assets/pexels-brittany-87812.jpg";

const Home = () => {
  return (
    <div className="w-[100%] h-screen  mt-20  mb-20 flex justify-center items-center scrollbar-hide">
      <div className="w-[90%] h-screen  flex justify-center items-center">
        <div className="w-full h-screen overflow-y-scroll scrollbar-hide md:h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
          {/* {getData.posts.map((user)=>{
      return (postItem eke div eka danna)
    })} */}
          <PostItems />
          <PostItems />
          <PostItems />
          <PostItems />
          <PostItems />
          <PostItems />
          <PostItems />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Sunset from "../assets/pexels-brittany-87812.jpg";
import { Link } from "react-router-dom";

const PostItems = () => {
  return (
    <div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
        <img src={Sunset} alt="sunset-mountains" className="rounded-lg" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center items-center space-x-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <div className="flex justify-center items-center space-x-2">
              <div>
                <img
                  src={Sunset}
                  alt="author"
                  className="rounded-full h-[30px] w-[30px]"
                />
              </div>
              <div>
                <h1>Author name</h1>
              </div>
            </div>
          </span>
          <Link to={"postDetail/categories/:category"}>
            {" "}
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {/* {}//add category */} category name
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItems;

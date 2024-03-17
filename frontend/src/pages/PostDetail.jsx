import React from "react";
import Sunset from "../assets/pexels-brittany-87812.jpg";

const PostDetail = () => {
  return (
    <>
      <div className="w-full h-screen border flex mt-20 mb-20 justify-center items-center">
        <div className="w-[90%] h-full border flex justify-center">
          <div className="w-full">
            <div className="w-full overflow-y-scroll h-screen scrollbar-hide ">
              {/* header section */}
              <div className="w-full flex justify-between items-center">
                {" "}
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
                <div className="flex justify-center items-center space-x-8">
                  <button className="px-3 py-2 rounded-lg shadow-md text-white bg-[#A0153E]">
                    Edit
                  </button>
                  <button className="px-3 py-2 rounded-lg shadow-md text-white bg-[#5D0E41]">
                    Delete
                  </button>
                </div>
              </div>
              <div>
                <h1 className="text-center text-2xl mt-10 mb-10 ">
                  Title goes here
                </h1>
              </div>
              {/* image section */}
              <div className="h-[200px">
                <img
                  src={Sunset}
                  alt="sunset"
                  className="w-full  bg-center bg-cover bg-no-repeat "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;

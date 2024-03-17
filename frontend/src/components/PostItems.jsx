import React from "react";
import Sunset from "../assets/pexels-brittany-87812.jpg";
import { Link } from "react-router-dom";

const PostItems = () => {
  return (
    <div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
        <img src={Sunset} alt="sunset-mountains" className="rounded-lg" />
        <div className="px-6 py-4">
          <Link to={"postDetail/post"} className="font-bold text-xl mb-2">
            The Coldest Sunset
          </Link>
          <p className="text-gray-700 text-base overflow-hidden  overflow-ellipsis  whitespace-nowrap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Sint dicta odio esse sunt molestiae.
            Voluptate repudiandae corrupti non sed fugiat dolore possimus
            commodi itaque corporis minima quam temporibus assumenda ullam
            dolores nemo odit et quidem perferendis, magni nesciunt nobis porro
            deleniti? Reprehenderit expedita in officia dignissimos laudantium
            consequuntur incidunt, adipisci nisi ducimus necessitatibus iure
            earum deserunt! Dolorem libero deserunt laboriosam assumenda culpa
            sint voluptatibus magni necessitatibus fugiat, nam ad, repudiandae
            consequatur mollitia? Voluptatem quo quisquam esse cupiditate aut
            quod dolor, molestiae eligendi mollitia labore? Fuga necessitatibus
            quibusdam excepturi porro explicabo molestiae sed adipisci
            voluptatem. Magni nam corrupti officiis nulla reiciendis.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between items-center space-x-2">
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
          <Link to={"postDetail/categories/art"}>
            {" "}
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {/* {}//add category */} art
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItems;

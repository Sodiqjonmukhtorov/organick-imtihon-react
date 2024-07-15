import React from "react";
import backgroundImage from "..//NotFound/img/Background Pattern.png";
import backgroundImage1 from "..//NotFound/img/Pattern.png";
import backgroundImage2 from "..//NotFound/img/Aerrow.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="relative flex items-center place-content-center mx-auto ">
        <div className=" relative flex">
          <img
            className="h-[898px] z-0 w-full   "
            src={backgroundImage}
            alt=""
          />
          <span className=" w-full absolute ">
            <img
              className="z-0 w-full h-full  "
              src={backgroundImage1}
              alt=""
            />
          </span>
        </div>
        <div className="absolute flex w-full max-w-[65%] justify-end ">
          <div className=" block  text-center ">
            <h1 className=" w-full  max-w-auto h-[50%] text-[#8FA8A8] font-Roboto font-bold text-[312px]  ">
              404
            </h1>
            <h3 className=" max-w-auto  text-center  mx-auto w-full text-blue-700 font-Roboto text-7xl  font-bold ">
              Page not found
            </h3>
            <p className="Open-Sans text-md text-blue-80 font-semibold">
              The page you are looking for doesn't exist or has been moved
            </p>
            <Link
              to="/"
              className="flex w-[275px] h-[79px] rounded-[16px] pl-[49px] mt-[36px] text-white-50 bg-blue-700 font-Roboto font-bold text-2xl px-5 py-6  ml-[20px] transition-all duration-75 hover:bg-[#274C5Bf0]"
            >
              BOSH MENU
              <img
                className=" self-center pl-[10px] "
                src={backgroundImage2}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

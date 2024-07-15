import React from "react";
import Vektor from "./images/Vector.png";
import { style } from "../../utils/style";
import Button from "../Button/Button";

const BlogCard = ({ blogs, id }) => {
  return (
    <div
      key={id}
      className="flex justify-center align-center items-end mx-auto "
    >
      <div className="w-full max-w-[677px] ">
        <div className="relative text-center">
          <div className="absolute w-full max-w-[82px] h-[82px] bg-[#FFFFFF] rounded-full mt-[43px] ml-[32px]">
            <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold md787:text-2xl align-center   py-[5px]">
              25 <br /> Nov
            </h2>
          </div>
        </div>
        <div className="realtive w-full max-w-[677px] h-[524px]">
          <img src={blogs.img} className="w-full rounded-[30px]" alt="" />
        </div>
      </div>
      <div className="absolute">
        <div className="w-full max-w-[612px] h-[283px] bg-[#F9F8F8] hover:bg-[#FFFFFF] hover:shadow-lg shadow-5-strong transition duration-700 ease-in-out rounded-[30px] px-[57px] py-[54px] translate-y-[50px] ">
          <div className="w-full block ">
            <div className="w-full flex gap-[6px]">
              <div className="">
                <img src={Vektor} alt="" />
              </div>
              <p className={`${style.SubTitle}`}> {blogs.firstName}</p>
            </div>
            <h2 className=" text-2.5xl font-Roboto text-blue-700 font-extrabold">
              {blogs.title}
            </h2>
            <p className={`${style.SubTitle} `}>{blogs.text}</p>
            <Button
              isLink={blogs.id}
              text="Read More"
              isIcon={true}
              type="w-full max-w-[245px] text-blue-700 border-hidden py-[15px] px-0 md787:px-0 sm450:px-0 !justify-start"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

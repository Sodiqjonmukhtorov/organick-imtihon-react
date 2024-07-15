import React from "react";
import { style } from "../../utils/style";
import { NavLink } from "react-router-dom";
const PorfolioCard = ({ projects, id }) => {
  return (
    <div
      key={id}
      className="block justify-center align-center items-center mx-auto"
    >
      <div className="block w-full max-w-[677px] relative ">
        <div className="flex w-full">
          <img src={projects.img} className="w-full rounded-[30px]" alt="" />
        </div>
        <NavLink to={projects.id} className={style.NavLink}>
        <div className="bg-blue-700 flex items-center place-content-center  justify-center">
          <button className="absolute top-0 w-full max-w-[400px] hover:backdrop-blur-xl bg-white/1 font-bold mt-[40px] pt-[170px] py-[170px] px-[200px] rounded-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <svg
              width="10"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 12L6.5 6.5L1 1"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        </NavLink>
      </div>
      <div className="block">
        <div className=" w-full py-[21px] ">
          <div className="w-full block ">
            <h2 className=" text-2.5xl font-Roboto text-blue-700 font-extrabold">
              {projects.title}
            </h2>
            <h3
              className={`${style.SectionSubtitle} text-[22px] font-normal text-green-300`}
            >
              {projects.category}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorfolioCard;

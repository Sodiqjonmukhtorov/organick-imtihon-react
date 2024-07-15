import React from "react";

const Banner = ({ img, title }) => {
  return (
    <div className="h-[450px] max-w-[1920px] mx-auto max-h-[450px] flex justify-center items-center relative">
      <div className="w-full h-full absolute top-0 left-0">
        <img
          className="w-full h-full object-"
          src={img}
          alt="UZR BUNDAY IMG MAVJUD EMAS"
        />
      </div>
      <div className="z-[1] font-Roboto font-extrabold text-7xl leading-[82.03px] text-blue-700 mb-[27px] md787:text-[52px] md787:leading-[62px] sm450:text-[42px] sm450:leading-[52px]">
        {title}
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import Banner from "./../../Components/Banner/Banner";
import BackgroundBanner from "./images/banner.png";
import { style } from "../../utils/style";
import Button from "./../../Components/Button/Button";
import Icon1 from "./images/Icon1.png";
import SectionPhotos from "./images/Photo.png";
import SectionPhotos2 from "./images/Photo2.jpg";

const Service = () => {
  return (
    <div>
      <Banner img={BackgroundBanner} title="Services" />
      <section className="w-full max-w-[1920px] mx-auto py-[202px] bg-white-50 flex justify-center items-center">
        <div className="w-full max-w-[1400px] mx-auto">
          <h2
            className={`${style.SectionSubtitle} text-green-300 text-center mb-[24px]`}
          >
            What we Grow
          </h2>
          <h1 className={`${style.Title} text-center`}>
            Better Agriculture for Better Future
          </h1>
          <div className="flex items-center gap-[35px] mt-[45px]">
            <div className="max-h-[627px] grid gap-[39px] text-end">
              <div className="max-w-[396px]">
                <div className="w-full flex justify-end items-center">
                  <img className="w-[52px] h-[55px]" src={Icon1} alt="" />
                </div>
                <h1 className="text-2.5xl text-blue-700 font-Roboto my-[5px] font-medium">
                  Dairy Products
                </h1>
                <p className={style.SubTitle}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div>
                <div className="w-full flex justify-end items-center">
                  <img className="w-[52px] h-[55px]" src={Icon1} alt="" />
                </div>
                <h1 className="text-2.5xl text-blue-700 font-Roboto my-[5px]">
                  Dairy Products
                </h1>
                <p className={style.SubTitle}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div>
                <div className="w-full flex justify-end items-center">
                  <img className="w-[52px] h-[55px]" src={Icon1} alt="" />
                </div>
                <h1 className="text-2.5xl text-blue-700 font-Roboto my-[5px]">
                  Dairy Products
                </h1>
                <p className={style.SubTitle}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
            </div>
            <div className="w-full h-full max-w-[743px] max-h-[990px] bg-white-50">
              <img
                className="w-full h-full object-cover mix-blend-multiply"
                src={SectionPhotos}
                alt=""
              />
            </div>
            <div className="max-h-[627px] grid gap-[39px]">
              <div>
                <div className="w-full flex justify-start items-center">
                  <img className="w-[52px] h-[55px]" src={Icon1} alt="" />
                </div>
                <h1 className="text-2.5xl text-blue-700 font-Roboto my-[5px]">
                  Dairy Products
                </h1>
                <p className={style.SubTitle}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div>
                <div className="w-full flex justify-start items-center">
                  <img className="w-[52px] h-[55px]" src={Icon1} alt="" />
                </div>
                <h1 className="text-2.5xl text-blue-700 font-Roboto my-[5px]">
                  Dairy Products
                </h1>
                <p className={style.SubTitle}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div>
                <div className="w-full flex justify-start items-center">
                  <img className="w-[52px] h-[55px]" src={Icon1} alt="" />
                </div>
                <h1 className="text-2.5xl text-blue-700 font-Roboto my-[5px]">
                  Dairy Products
                </h1>
                <p className={style.SubTitle}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
            </div>
          </div>
          <Button
            text="Explore More"
            isIcon={true}
            type="hover:bg-blue-700 hover:text-[white] mx-auto mt-[55px]"
          />
        </div>
      </section>
      <section className="w-full max-w-[1920px] mx-auto relative flex justify-center items-center h-[100vh] mdMin1920:h-[1073px]">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={SectionPhotos2}
            alt=""
          />
        </div>
        <div className="relative z-[2] w-full max-w-[671px]">
          <h2
            className={`${style.SectionSubtitle} text-green-300 text-center mb-[24px]`}
          >
            Organic Only
          </h2>
          <h1 className={`${style.Title} text-center`}>
            Everyday Fresh & Clean
          </h1>
          <p className={`${style.SubTitle} text-center mt-[24px]`}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
          </p>
          <div className="mt-[50px] w-[107px] h-[107px] flex justify-center items-center mx-auto bg-green-300 rounded-full cursor-pointer shadow-1xl">
            <svg
              width="22"
              height="25"
              viewBox="0 0 22 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 9.90201C22.5 11.0567 22.5 13.9435 20.5 15.0982L4.75 24.1914C2.75 25.3461 0.25 23.9028 0.25 21.5934L0.250001 3.40682C0.250001 1.09741 2.75 -0.345957 4.75 0.808744L20.5 9.90201Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;

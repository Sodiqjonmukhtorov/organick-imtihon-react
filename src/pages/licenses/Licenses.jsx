import React from "react";
import Banner from "./../../Components/Banner/Banner";
import banner from "./img/banner.png";
const Licenses = () => {
  return (
    <div>
      <div className="w-full max-w-[1920px] bg-white-50 mx-auto">
        <Banner img={banner} title="Licenses" />
      </div>
      <section className="w-full max-w-[1920px] mx-auto py-[209px] flex justify-center items-center">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-wrap w-full gap-[139px]">
            <h2 className="text-blue-700 font-extrabold font-Roboto text-3.5xl leading-[29.3px]">
              Icon & Graphics
            </h2>
            <div className="block">
              <p className="w-full text-md font-Open-Sans text-blue-80  font-normal leading-[29.77px] max-w-[635px]">
                Icons and Graphics are manually designed by the VictorFlow
                Templates team. You may download these and edit them to fit your
                website without asking for permission or providing credit.
              </p>
              <p className="w-full text-md font-Open-Sans text-blue-80 mt-[44px] font-normal leading-[29.77px] max-w-[635px]">
                Upon purchasing Software UI Kit Template our team grants you a
                nonexclusive, worldwide copyright license to download, copy,
                modify, and use the icons.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-[139px] mt-[100px]">
            <h2 className="text-blue-700 font-extrabold font-Roboto text-3.5xl leading-[29.3px]">
              Photography
            </h2>
            <div className="block">
              <p className="w-full text-md font-Open-Sans text-blue-80 font-normal leading-[29.77px] max-w-[635px]">
                All images used in the Organick Webflow Template are licensed
                for free personal and commercial use. If you'd like to use any
                specific image, you can check the licenses and download the
                images for free on Unsplash, Pexels‍. And Freepik.
              </p>
              <div className="block mt-[45px]">
                <h2 className="text-blue-700 font-extrabold font-Roboto text-3xl leading-[29.3px]">
                  Unsplash
                </h2>
                <p className="w-full text-md font-Open-Sans text-blue-700 mt-[44px] font-normal leading-[29.77px] max-w-[635px]">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17, Image 18, Image 19,
                  Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,
                </p>
              </div>
              <div className="block mt-[45px]">
                <h2 className="text-blue-700 font-extrabold font-Roboto text-3xl leading-[29.3px]">
                  Pixcel
                </h2>
                <p className="w-full text-md font-Open-Sans text-blue-700 mt-[44px] font-normal leading-[29.77px] max-w-[635px]">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17,
                </p>
              </div>
            </div>
            <div className="flex flex-wrap w-full gap-[270px]">
              <h2 className="text-blue-700 font-extrabold font-Roboto text-3.5xl leading-[29.3px]">
                Font
              </h2>
              <div className="block">
                <p className="w-full text-md font-Open-Sans text-blue-80  font-normal leading-[29.77px] max-w-[635px]">
                  Organick template uses free licensed Google Fonts. Please
                  check Roboto, Yellowtail and Open Sans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Licenses;

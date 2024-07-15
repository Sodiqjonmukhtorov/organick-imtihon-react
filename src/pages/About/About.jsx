import React from "react";
import Banner from "../../Components/Banner/Banner";
import { style } from "../../utils/style";
import AboutBanner from "./images/Banner.png";
import AboutImage from "./images/AboutImage.png";
import AboutIcon from "./images/AboutIcon.png";
import AboutIcon1 from "./images/AboutIcon1.png";
import Button from "../../Components/Button/Button";
import icon from "./images/Icon.png";
import img from "./images/img.jpg";
import purchase from "./images/purchase.png";
import fresh from "./images/Fresh.png";
import support from "./images/support.png";
import security from "./images/Security.png";
import teamperson from "./images/teamperson.png";
import teamperson1 from "./images/teamperson1.png";
import teamperson2 from "./images/teamperson2.png";
import instagram from "./images/Insta.png";
import facebook from "./images/Fb.png";
import twiter from "./images/Twiter.png";

import spicy from "./images/spicy.png";
import spicy1 from "./images/spicy1.png";
import spicy3 from "./images/spicy3.png";


const About = () => {
  return (
    <div>
      <section>
        <Banner title="About Us" img={AboutBanner} />
      </section>
      <section className=" max-w-[1920px] mx-auto py-[186px] pr-[100px] flex justify-center  ">
        <div className="w-full max-w-[1021px] ">
          <img
            src={AboutImage}
            alt=""
            className="w-full h-full object-cover px-[3rem] "
          />
        </div>
        <div className="w-full max-w-[847px] ">
          <h5 className={`${style.SectionSubtitle} text-[#7EB693]`}>
            About Us
          </h5>
          <h1 className={`${style.Title} `}>
            We do Creative <br /> Things for Success
          </h1>
          <p className={`${style.SubTitle} mt-[14px] mr-[12px] max-w-[690px]`}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
            <br /> <br />
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex gap-[30px] my-[46px]">
            <div className="flex gap-[19px]">
              <div className="w-[60px] h-[60px]">
                <img src={AboutIcon} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                  Modern Agriculture <br /> Equipment
                </h2>
              </div>
            </div>
            <div className="flex gap-[19px]">
              <div className="w-[60px] h-[60px]">
                <img src={AboutIcon1} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                  No growth <br /> hormones are used
                </h2>
              </div>
            </div>
          </div>
          <Button
            text="Explore More"
            isIcon={true}
            type="bg-blue-700 text-[#fff] border-bue-700 hover:text-blue-700 mt-[58px] pl-[28px]"
          />
        </div>
      </section>

      {/* why Choose section  */}

      <div className="bg-white-50 py-[150px] lg1435:px-[80px] lg1200:px-[20px] ">
        <section className="w-full flex justify-center ">
          <div className="flex  max-w-[1440px] my-[91px] gap-[51px] lg1060:block">
            <div className=" mx-auto max-w-[1400px] lg1435:max-w-[1500px] lg1300:max-w-[1500px] ">
              <h5 className={`${style.SectionSubtitle} text-[#7EB693]`}>
                Why Choose us?
              </h5>
              <h1 className={`${style.Title} `}>
                We do not buy from the <br className="lg1435:hidden" />
                open market & traders.
              </h1>
              <p
                className={`${style.SubTitle} mt-[25px]  max-w-[690px] lg1435:mt-[15px]`}
              >
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased <br className="hidden" /> to been the
                industry's standard the 1500s, when an unknown
              </p>

              <div className="w-full max-w-[360px] h-[88px] flex pl-[27px] items-center py-[29px] bg-[#ECECEC] rounded-[49px] mt-[19px] lg1435:mt-[15px] lg1435:pl-[20px] lg1435:pr-[83px] lg1435:py-[23px] md677:min-w-[400px] md677:h-[40px] md677:w-full md677:pl-[30px] md677:pr-[73px] md677:py-[30px]">
                <img
                  src={icon}
                  className="w-full max-w-[19px] object-contain mr-[7px]"
                  alt=""
                />
                <p className={`${style.NavLink}`}>100% Natural Product</p>
              </div>
              <p
                className={`${style.SubTitle} mt-[25px]  max-w-[690px] pl-[60px] lg1435:mt-[15px]`}
              >
                Simply dummy text of the printing and typesetting{" "}
                <br className="lg1435:hidden" />
                industry Lorem Ipsum
              </p>
              <div className="w-full max-w-[360px] h-[88px] flex pl-[27px] items-center py-[29px] bg-[#ECECEC] rounded-[49px] mt-[19px] lg1435:mt-[15px] lg1435:pl-[20px] lg1435:pr-[83px] lg1435:py-[23px] md677:min-w-[400px] md677:h-[40px] md677:w-full md677:pl-[30px] md677:pr-[73px] md677:py-[30px]">
                <img
                  src={icon}
                  className="w-full max-w-[19px] object-contain mr-[7px]"
                  alt=""
                />
                <p className={`${style.NavLink}`}>Increases resistance</p>
              </div>
              <p
                className={`${style.SubTitle} mt-[25px]  max-w-[690px] pl-[60px] lg1435:mt-[15px]`}
              >
                Filling, and temptingly healthy, our Biona Organic{" "}
                <br className="lg1435:hidden" />
                Granola with Wild Berries is just the thing
              </p>
            </div>
            <div className="mx-auto max-w-[678px] ">
              <img
                src={img}
                className="w-full max-w-[678px] rounded-[30px] mt-[53px] object-cover lg1435:mt-[40px] lg1435:min-w-[600px] lg1300:min-w-[500px] lg1300:mt-[70px] lg1200:min-w-[490px] lg1200:mt-[100px] md550:min-w-[200px]"
                alt=""
              />
            </div>
          </div>
        </section>
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="w-full mx-auto max-w-[1440px] flex flex-wrap justify-center text-center gap-[30px]">
            <div className="w-full max-w-[257px] max-h-[335px] rounded-[30px]  align-center bg-[#FFFFFF] rounded-[30px]">
              <div className="w-full flex justify-center  ">
                <img
                  src={purchase}
                  className="w-full max-w-[95px] mt-[50px] object-cover"
                  alt=""
                />
              </div>
              <div className="w-full justify-center  ">
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                  Return Policy
                </h2>
                <div className="w-full  flex justify-center">
                  <p
                    className={`${style.SubTitle} mt-[12px] max-w-[184px] text-center`}
                  >
                    Simply dummy text of the printintypesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[257px] h-[335px] rounded-[30px]  align-center bg-[#FFFFFF] ">
              <div className="w-full flex justify-center  ">
                <img
                  src={fresh}
                  className="w-full max-w-[95px] mt-[50px] object-cover "
                  alt=""
                />
              </div>
              <div className="w-full justify-center ">
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold ">
                  100% Fresh
                </h2>
                <div className="w-full  flex justify-center">
                  <p
                    className={`${style.SubTitle} mt-[12px] max-w-[184px] text-center`}
                  >
                    Simply dummy text of the printintypesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[257px] h-[335px] rounded-[30px]  align-center bg-[#FFFFFF]">
              <div className="w-full flex justify-center  ">
                <img
                  src={support}
                  className="w-full max-w-[95px] mt-[50px] object-cover"
                  alt=""
                />
              </div>
              <div className="w-full justify-center ">
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                  Support 24/7
                </h2>
                <div className="w-full  flex justify-center">
                  <p
                    className={`${style.SubTitle} mt-[12px] max-w-[184px] text-center`}
                  >
                    Simply dummy text of the printintypesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[257px] h-[335px] rounded-[30px]  align-center bg-[#FFFFFF]">
              <div className="w-full flex justify-center  ">
                <img
                  src={security}
                  className="w-full max-w-[95px] mt-[50px] object-cover"
                  alt=""
                />
              </div>
              <div className="w-full justify-center ">
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                  Secured Payment
                </h2>
                <div className="w-full  flex justify-center">
                  <p
                    className={`${style.SubTitle} mt-[12px] max-w-[184px] text-center`}
                  >
                    Simply dummy text of the printintypesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="w-full flex justify-center mx-auto max-w-[1420px] ">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="w-full flex justify-center text-center ">
            <div className="mt-[117px] ">
              <h5 className={`${style.SectionSubtitle} text-[#7EB693]`}>
                Team
              </h5>
              <div className=" text-center ">
                <h1 className={`${style.Title} `}>Our Organic Experts</h1>
                <p className={`${style.SubTitle} mt-[16px] max-w-[852px] `}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap max-w-[1420px] justify-center gap-[27px] mt-[42px]">
            <div className="w-full max-w-[449px]">
              <div className="w-full">
                <img
                  src={teamperson}
                  className="w-full rounded-t-[30px] object-cover"
                  alt=""
                />
              </div>
              <div className="w-full flex items-end justify-end max-w-[449px] h-[130px] bg-[#F9F8F8] hover:bg-[#FFFFFF] hover:shadow-lg shadow-5-strong transition duration-700 ease-in-out rounded-b-[30px] px-[28px] py-[20px] ">
                <div className="w-full block ">
                  <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                    Giovani Bacardo
                  </h2>
                  <h5
                    className={`${style.SectionSubtitle} text-[#7EB693] text-[22px]`}
                  >
                    Farmer
                  </h5>
                </div>
                <div className="w-full gap-[17px] flex justify-end">
                  <div className="w-full max-w-[23px]">
                    <img
                      src={facebook}
                      className="w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full max-w-[23px]">
                    <img src={twiter} className="w-full object-cover" alt="" />
                  </div>
                  <div className="w-full max-w-[23px]"></div>
                </div>
              </div>
            </div>
            <div className="w-full  max-w-[449px] ">
              <div className="w-full">
                <img
                  src={teamperson1}
                  className="w-full rounded-t-[30px] object-cover"
                  alt=""
                />
              </div>
              <div className="w-full flex items-end justify-end max-w-[449px] h-[130px] bg-[#F9F8F8] hover:bg-[#FFFFFF] hover:shadow-lg shadow-5-strong transition duration-700 ease-in-out rounded-b-[30px] px-[28px] py-[20px] ">
                <div className="w-full block ">
                  <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                    Marianne Loreno
                  </h2>
                  <h5
                    className={`${style.SectionSubtitle} text-[#7EB693] text-[22px]`}
                  >
                    Designer
                  </h5>
                </div>
                <div className="w-full gap-[17px] flex justify-end">
                  <div className="w-full max-w-[23px]">
                    <img
                      src={instagram}
                      className="w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full max-w-[23px]">
                    <img
                      src={facebook}
                      className="w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full max-w-[23px]">
                    <img src={twiter} className="w-full object-cover" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  max-w-[449px] ">
              <div className="w-full">
                <img
                  src={teamperson2}
                  className="w-full rounded-t-[30px] object-cover"
                  alt=""
                />
              </div>
              <div className="w-full flex items-end justify-end max-w-[449px] h-[130px] bg-[#F9F8F8] hover:bg-[#FFFFFF] hover:shadow-lg shadow-5-strong transition duration-700 ease-in-out rounded-b-[30px] px-[28px] py-[20px]">
                <div className="w-full block ">
                  <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                    Marianne Loreno
                  </h2>
                  <h5
                    className={`${style.SectionSubtitle} text-[#7EB693] text-[22px]`}
                  >
                    Designer
                  </h5>
                </div>
                <div className="w-full gap-[17px] flex justify-end">
                  <div className="w-full max-w-[23px]">
                    <img
                      src={instagram}
                      className="w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full max-w-[23px]">
                    <img
                      src={facebook}
                      className="w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full max-w-[23px]">
                    <img src={twiter} className="w-full object-cover" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us  */}

      <section className="w-full mx-auto max-w-[1920px] py-[188px] flex justify-center bg-blue-700 mt-[202px]">
        <div className="block">
          <div className="w-full">
            <div className="text-center">
              <h5 className={`${style.SectionSubtitle} text-[#7EB693]`}>
                Team
              </h5>
              <div className=" text-center ">
                <h1 className={`${style.Title} text-white`}>
                  Our Organic Experts
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-[21px] mt-[42px] text-center justify-center">
            <div className="">
              <div className=" max-w-[334px] rounded-[30px] ">
                <div className="w-full">
                  <img src={spicy} className="w-full rounded-[30px] " alt="" />
                </div>
                <h2 className="text-2.5xl font-Roboto text-white font-extrabold">
                  Spicy
                </h2>
              </div>
            </div>
            <div className=" flex">
              <div className="w-full max-w-[334px]  rounded-[30px]">
                <div className="w-full">
                  <img src={spicy1} className="w-full rounded-[30px] " alt="" />
                </div>
                <h2 className="text-2.5xl font-Roboto text-white font-extrabold">
                  Nuts & Feesd
                </h2>
              </div>
            </div>
            <div className="">
              <div className="w-full max-w-[334px]  rounded-[30px]">
                <div className="w-full">
                  <img src={spicy3} className="w-full rounded-[30px]" alt="" />
                </div>
                <h2 className="text-2.5xl font-Roboto text-white font-extrabold">
                  Fruits
                </h2>
              </div>
            </div>
            <div className="">
              <div className="w-full max-w-[334px]  rounded-[30px]">
                <div className="w-full">
                  <img src={spicy3} className="w-full rounded-[30px]" alt="" />
                </div>
                <h2 className="text-2.5xl font-Roboto text-white font-extrabold">
                  Vegetables
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

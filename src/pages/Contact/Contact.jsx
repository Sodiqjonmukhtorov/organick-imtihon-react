import React from "react";
import Banner from "./../../Components/Banner/Banner";
import BackgroundBanner from "./img/Background.jpg";
import { style } from "../../utils/style";
import email from "./img/email.png";
import phone from "./img/phone.png";
import location from "./img/Location.png";
import leaf from "./img/leaf.jpg";
import multifruit from "./img/multifruit.jpg";

import facebook from "./img/Fb.png";
import instagram from "./img/Insta.png";
import printres from "./img/Pintrest.png";
import twitter from "./img/Twiter.png";

const Contact = () => {
  return (
    <div>
      <Banner img={BackgroundBanner} title="Contact Us" />
      <section className="w-full max-w-[1920px] mx-auto py-[209px] flex justify-center items-center">
        <div className="w-full max-w-[1440px] mx-auto ">
          <div className="w-full flex flex-wrap justify-center items-center gap-[75px]">
            <div className="w-full max-w-[632px] ">
              <img
                src={multifruit}
                className="w-full object-cover rounded-[30px] "
                alt=""
              />
            </div>
            <div className="w-full max-w-[702px] py-[23px] ">
              <div className="w">
                <h1 className={`${style.Title} `}>
                  We'd love to talk about how we can work together.
                </h1>
                <p className={`${style.SubTitle} pt-[14px] pb-[34px] `}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
              <div className="w-full flex flex-wrap gap-[17px]">
                <div className="w-full max-w-[352px] px-[13px] py-[13px] rounded-[16px] border-slate-500 bg-[#FFFFFF] shadow-lg shadow-5-strong transition duration-700 ease-in-out">
                  <div className=" flex gap-[19px]">
                    <div className="w-full max-w-[89px]">
                      <img
                        src={email}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="py-[13px]">
                      <div className="w-full max-w-[186px] ">
                        <h3 className="font-Roboto text-2.5xl font-semibold text-blue-700 leading-[29.3px] ">
                          Massege
                        </h3>
                        <p className={`${style.SubTitle}`}>
                          support@organic.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-[352px] px-[13px] py-[13px] rounded-[16px] border-slate-500 bg-[#FFFFFF] shadow-lg shadow-5-strong transition duration-700 ease-in-out">
                  <div className=" flex gap-[19px]">
                    <div className="w-full max-w-[89px]">
                      <img
                        src={phone}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="py-[13px]">
                      <div className="w-full max-w-[186px] ">
                        <h3 className="font-Roboto text-2.5xl font-semibold text-blue-700 leading-[29.3px] ">
                          Contact Us
                        </h3>
                        <p className={`${style.SubTitle}`}>+01 123 456 789</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-[1920px] mx-auto align-center text-center">
                  <div className="follow gap-x-5 flex my-[34px]">
                    <div className="w-[56px] h-[56px] rounded-full bg-green-50 relative cursor-pointer">
                      <span className="absolute top-[50%] right-[17px] translate-y-[-50%]">
                        <img src={instagram} alt="" />
                      </span>
                    </div>
                    <div className="w-[56px] h-[56px] rounded-full bg-green-50 relative cursor-pointer">
                      <span className="absolute top-[50%] right-[17px] translate-y-[-50%]">
                        <img src={facebook} alt="" />
                      </span>
                    </div>
                    <div className="w-[56px] h-[56px] rounded-full bg-green-50 relative cursor-pointer">
                      <span className="absolute top-[50%] right-[17px] translate-y-[-50%]">
                        <img src={twitter} alt="" />
                      </span>
                    </div>
                    <div className="w-[56px] h-[56px] rounded-full bg-green-50 relative cursor-pointer">
                      <span className="absolute top-[50%] right-[17px] translate-y-[-50%]">
                        <img src={printres} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1920px] mx-auto py-[98px] flex justify-center items-center ">
        <div className="inline-flex items-center justify-end">
          <div className="w-full max-w-[1440px] max-h-[758px] rounded-[30px]  mx-auto ">
            <img
              src={leaf}
              className="relative  w-full object-cover rounded-[30px]"
              alt=""
            />
          </div>
          <div className="absolute pr-[108px] lg1400:flex lg1400:align-end lg1400:justify-end  max-h-[514px]">
            <div className="w-full max-w-[514px] h-full max-h-[514px] bg-[#FFFFFF] pl-[53px] pt-[46px] pb-[46px] pr-[53px] rounded-[30px] md677:p-10 md677:h-full">
              <h5 className={`${style.SectionSubtitle} text-[#7EB693] `}>
                Location
              </h5>
              <h1 className={`${style.Title}`}>Our Farms</h1>
              <div className="block mt-[25px] lg1400:px-[10px]">
                <p className="text-md font-Open-Sans text-blue-80 font-normal mt-[7px] leading-[29.77px] max-w-[408px]">
                  Established fact that a reader will be distracted by the
                  readable content of a page when looking a layout. The point of
                  using.
                </p>
                <div className="w-full ">
                  <div className="w-full max-w-[312px] pt-[19px] gap-[22px] flex">
                    <div className="w-full max-w-[50px] ">
                      <img
                        src={location}
                        className="w-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="w-full max-w-[265px] ">
                      <h3 className="font-Roboto text-2xl font-semibold text-blue-80 leading-[29.3px] ">
                        New York, USA:
                      </h3>
                      <p className={`${style.SubTitle}`}>
                        299 Park Avenue New York, New York 10171
                      </p>
                    </div>
                  </div>

                  <div className="w-full max-w-[312px] pt-[19px] gap-[22px] flex">
                    <div className="w-full max-w-[50px] ">
                      <img
                        src={location}
                        className="w-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="w-full max-w-[265px] ">
                      <h3 className="font-Roboto text-2xl font-semibold text-blue-80 leading-[29.3px] ">
                        London, UK:
                      </h3>
                      <p className={`${style.SubTitle}`}>
                        30 Stamford Street, London SE1 9LQ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1920px] mx-auto items-center ">
        <div className="w-full max-w-[1440px] mx-auto flex justify-center">
          <form class="w-full max-w-[1182px] flex flex-wrap justify-center gap-[36px] ">
            <div class=" w-full max-w-[569px] mb-5">
              <label
                for="email"
                class="block mb-2 text-md font-medium font-Roboto text-blue-700 "
              >
                Full Name*
              </label>
              <input
                type="name"
                id="name"
                class="h-[65px] shadow-sm bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Your email address"
                required
              />
            </div>
            <div class="w-[569px] mb-5">
              <label
                for="email"
                class="block mb-2 text-md font-medium font-Roboto text-blue-700"
              >
                Your email*
              </label>
              <input
                type="email"
                id="email"
                class="h-[65px] shadow-sm bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="example@yourmail.com"
                required
              />
            </div>
            <div class="w-[569px] mb-5">
              <label
                for="password"
                class="block mb-2 text-md font-medium font-Roboto text-blue-700 "
              >
                Company*
              </label>
              <input
                type="text"
                id="company"
                class="h-[65px] shadow-sm bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                placeholder="yourcompany name here"
              />
            </div>
            <div class="w-[569px] mb-5">
              <label
                for="subject"
                class="block mb-2 text-md font-medium font-Roboto text-blue-700"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                class="h-[65px] shadow-sm bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                placeholder="how can we help"
              />
            </div>

            <div class="w-full max-w-[1184px] mb-5 ">
              <label
                for="message"
                class="block mb-2 text-md font-medium font-Roboto text-blue-700 "
              >
                Message*
              </label>
              <textarea
                id="message"
                class="w-full max-w-[1184px] h-[247px] block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-[16px] border border-green-300 "
                placeholder="hello there,i would like to talk about how to..."
              ></textarea>

              <button
                type="submit"
                class="mt-[60px] w-full max-w-[220px] h-[80px] text-white bg-blue-700 hover:bg-[#274C5Bf2] font-medium font-Roboto rounded-[16px] text-2xl text-center  "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

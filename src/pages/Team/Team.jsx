import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import BannerImage from "./images/HeaderBanner.png";
import { style } from "../../utils/style";
import facebook from "./images/Fb.png";
import twiter from "./images/Twiter.png";
import axios from "axios";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios
      .get(`https://organick-server-h6p8.onrender.com/Tems`)
      .then(function (response) {
        // success
        setTeam(response.data);
      })
      .catch(function (err) {
        // error
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Banner img={BannerImage} title="Our Team" />
      <section className="pt-[150px] w-full max-w-[1400px] mx-auto">
        <h5 className={`${style.SectionSubtitle} text-[#7EB693] text-center`}>
          Team
        </h5>
        <h1 className={`${style.Title} text-center`}>Our Organic Experts</h1>
        <p
          className={`${style.SubTitle} mt-[16px] max-w-[852px] mx-auto text-center `}
        >
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="flex flex-wrap mt-[42px] gap-x-[27px] gap-y-[42px]">
          {team.map((item, id) => (
            <div key={id} className="w-full max-w-[448px]">
              <div className="w-full">
                <img
                  src={item.img}
                  className="w-full rounded-t-[30px] object-cover"
                  alt=""
                />
              </div>
              <div className="w-full flex items-end justify-end max-w-[448px] h-[130px] bg-[#F9F8F8] hover:bg-[#FFFFFF] hover:shadow-lg shadow-5-strong transition duration-700 ease-in-out rounded-b-[30px] px-[28px] py-[20px] ">
                <div className="w-full block ">
                  <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold">
                    {item.firstName}
                  </h2>
                  <h5
                    className={`${style.SectionSubtitle} text-[#7EB693] text-[22px]`}
                  >
                    {item.profession}
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;

import React, { useContext, useEffect, useState } from "react";
import Background from "./images/background.png";
import Background1 from "./images/Photo.jpg";
import Background2 from "./images/Photo1.jpg";
import Background3 from "./images/Photo.png";
import Icon1 from "./images/Icon.png";
import Icon2 from "./images/Icon1.png";
import SectionBackground from "./images/sectionBackground.png";
import EcoFriendly from "./images/EcoFraindly.jpg";
import organikimg from "./images/organikimg.jpg";
import organikimg1 from "./images/organikimg1.jpg";
import organikimg2 from "./images/organikimg2.jpg";
import Button from "../../Components/Button/Button";
import { style } from "../../utils/style";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../../Components/Card/Card";
import { ProductContext } from "../../contexts/Context";

const Main = () => {
  const { isDarkMode } = useContext(ProductContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://organick-server-h6p8.onrender.com/products`)
      .then(function (response) {
        // success
        setProducts(response.data);
      })
      .catch(function (err) {
        // error
        console.log(err);
      });
  }, []);

  const [offerProduct, setofferProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://organick-server-h6p8.onrender.com/offerProduct`)
      .then(function (response) {
        // ****
        setofferProduct(response.data);
      })
      .catch(function (err) {
        // error
        console.log(err);
      });
  }, []);

  const [CarouselData, setCarouselData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://organick-server-h6p8.onrender.com/CarouselData`)
      .then(function (response) {
        // *
        setCarouselData(response.data);
      })
      .catch(function (err) {
        // error
        console.log(err);
      });
  }, []);

  return (
    <div className={`${isDarkMode ? "bg-[white]" : "bg-[black]"}`}>
      <section className="w-full relative flex justify-start items-center max-w-[1920px] mx-auto h-[100vh] max-h-[898px] px-[80px] sm520:px-[15px]">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={Background}
            alt="Background"
          />
        </div>
        <div className="relative z-2 sm520:bg-[fff] sm520:backdrop-blur-[5px] sm520:px-[15px] sm520:py-[25px] sm520:rounded-[12px]">
          <h5
            className={`${style.SectionSubtitle} text-[#68A47F] sm472:text-center`}
          >
            100% Natural Food
          </h5>
          <h1 className="font-Roboto font-extrabold text-7xl leading-[82.03px] text-blue-700 mb-[27px] md677:text-[62px] md677:leading-[65px] sm472:text-[46px] sm472:leading-[52px] sm472:text-center sm320:text-[38px] sm320:leading-[42px]">
            Choose the best <br className="md677:hidden" /> healthier way
            <br className="md677:hidden" /> of life
          </h1>
          <Button
            text="Explore Now"
            isIcon={true}
            type="bg-yellow-300 text-blue-700 border-yellow-300 sm472:mx-auto"
          />
        </div>
      </section>
      <section className="relative w-full flex justify-center gap-[36px] mt-[196px] lg1400:px-[15px]">
        <div data-aos="flip-right">
          <div className="flex items-center">
            <img
              className="w-[682px] object-cover rounded-[30px] "
              src={Background1}
              alt="Background"
            />
            <div className="absolute ml-[54px] mt-[54px]">
              <h5 className="w-full font-Yellowtail text-[36px] text-[#ffff] mb-[8px]">
                Natural !!
              </h5>
              <h1 className="w-full font-Roboto font-extrabold text-4xl text-[white] mb-[27px]">
                Get Garden <br />
                Fresh Fruits
              </h1>
            </div>
          </div>
        </div>
        <div data-aos="flip-right">
          <div className="flex items-center ">
            <img
              className="w-[682px] object-cover rounded-[30px] "
              src={Background2}
              alt="Background"
            />

            <div className=" absolute  ml-[54px] mt-[54px]">
              <h5 className=" w-full font-Yellowtail text-[36px] text-[#68A47F]  mb-[8px]">
                Offer !!
              </h5>
              <h1 className="w-full font-Roboto font-extrabold text-4xl text-blue-700 mb-[27px]">
                Get 10% off <br /> on Vegetables
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1920px] mx-auto py-[186px] px-[100px] flex justify-center bg-[#F9F8F8] mt-[190px]  lg1060:mt-[150px] lg1550:block lg1550:px-[0px] ">
        <div className="w-full   ">
          <img src={Background3} alt="" className="w-full " />
        </div>
        <div className="w-full lg1550:px-[100px] ">
          <h5 className={`${style.SectionSubtitle} text-[#7EB693]  `}>
            About Us
          </h5>
          <h1 className={`${style.Title} `}>
            We Believe in Working <br /> Accredited Farmers
          </h1>
          <p className={`${style.SubTitle} mt-[14px] mr-[12px] max-w-[690px]`}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="grid gap-[30px] my-[46px]">
            <div className="flex gap-[19px]">
              <div className="w-[101px] h-[101]  ">
                <img
                  src={Icon1}
                  alt=""
                  className="w-full min-w-[101px]  md787:min-w-[71px]"
                />
              </div>
              <div>
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold md787:text-2xl ">
                  Organic Foods Only
                </h2>
                <p className="text-md font-Open-Sans text-blue-80 font-normal mt-[7px] leading-[165.4%] max-w-[444px] md787:text-[16px] ">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex gap-[19px]">
              <div className="w-[101px] h-[101]">
                <img
                  src={Icon2}
                  alt=""
                  className="w-full min-w-[101px] md787:min-w-[71px] "
                />
              </div>
              <div>
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-extrabold md787:text-2xl ">
                  Quality Standards
                </h2>
                <p className="text-md font-Open-Sans text-blue-80 font-normal mt-[7px] leading-[165.4%] max-w-[444px] md787:text-[16px] ">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <Button
            text="Shop Now"
            isIcon={true}
            type="bg-blue-700 text-[#fff] border-bue-700 hover:text-blue-700"
          />
        </div>
      </section>
      {/* product */}
      <section className="w-full max-w-[1400px] mx-auto mt-[176px]">
        <h5 className={`${style.SectionSubtitle} text-[#7EB693] text-center`}>
          Categories
        </h5>
        <h1 className={`${style.Title} text-center`}>Our Products</h1>
        <div className="justify-center my-[20px] w-full max-w-[1920px] mx-auto flex flex-wrap gap-[20px]">
          {products.map((product, id) => (
            <Card product={product} id={id} key={id} />
          ))}
        </div>
        <Button
          text="Load More"
          isIcon={true}
          type="bg-blue-700 text-[#fff] border-bue-700 hover:text-blue-700 mx-auto mt-[122px]"
        />
      </section>

      <section className="relative mt-[200px] flex py-[164px]  justify-center items-center max-w-[1920px] mx-auto lg1060:px-[30px]">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={SectionBackground}
            className="w-full h-full object-cover"
            alt="background"
          />
        </div>
        <div className="w-full max-w-[1108px] relative z-2">
          <div>
            <h5
              className={`${style.SectionSubtitle} text-green-300 text-center`}
            >
              Testimonial
            </h5>
            <h1 className={`${style.Title} text-center`}>
              What Our Customer Saying?
            </h1>
            <div className="mt-[60px] w-full max-w-[780px] mx-auto ">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={false}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {CarouselData.map((carousel) => (
                  <SwiperSlide key={carousel.id}>
                    <div className="h-[365px]">
                      <div className="w-[115px] h-[115px] rounded-full mx-auto mb-[20px]">
                        <img
                          src={carousel.img}
                          alt=""
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex w-full items-center justify-center gap-[3px]">
                        <svg
                          width="24"
                          height="21"
                          viewBox="0 0 24 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0533 0.781664C11.3609 -0.122033 12.639 -0.122035 12.9466 0.781662L14.9149 6.5641C15.0528 6.96936 15.4334 7.24187 15.8615 7.24187H22.1284C23.1083 7.24187 23.5035 8.50513 22.6983 9.06359L17.7095 12.5235C17.3426 12.7779 17.1889 13.2448 17.3327 13.6674L19.2569 19.3205C19.5678 20.2337 18.533 21.0142 17.7404 20.4644L12.5699 16.8785C12.2271 16.6408 11.7728 16.6408 11.4301 16.8785L6.25958 20.4644C5.46692 21.0142 4.43219 20.2337 4.74303 19.3205L6.66723 13.6674C6.8111 13.2448 6.65734 12.7779 6.29046 12.5235L1.30169 9.06359C0.496457 8.50513 0.891645 7.24187 1.87159 7.24187H8.13841C8.56651 7.24187 8.94713 6.96936 9.08507 6.5641L11.0533 0.781664Z"
                            fill="#FFA858"
                          />
                        </svg>
                        <svg
                          width="24"
                          height="21"
                          viewBox="0 0 24 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0533 0.781664C11.3609 -0.122033 12.639 -0.122035 12.9466 0.781662L14.9149 6.5641C15.0528 6.96936 15.4334 7.24187 15.8615 7.24187H22.1284C23.1083 7.24187 23.5035 8.50513 22.6983 9.06359L17.7095 12.5235C17.3426 12.7779 17.1889 13.2448 17.3327 13.6674L19.2569 19.3205C19.5678 20.2337 18.533 21.0142 17.7404 20.4644L12.5699 16.8785C12.2271 16.6408 11.7728 16.6408 11.4301 16.8785L6.25958 20.4644C5.46692 21.0142 4.43219 20.2337 4.74303 19.3205L6.66723 13.6674C6.8111 13.2448 6.65734 12.7779 6.29046 12.5235L1.30169 9.06359C0.496457 8.50513 0.891645 7.24187 1.87159 7.24187H8.13841C8.56651 7.24187 8.94713 6.96936 9.08507 6.5641L11.0533 0.781664Z"
                            fill="#FFA858"
                          />
                        </svg>
                        <svg
                          width="24"
                          height="21"
                          viewBox="0 0 24 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0533 0.781664C11.3609 -0.122033 12.639 -0.122035 12.9466 0.781662L14.9149 6.5641C15.0528 6.96936 15.4334 7.24187 15.8615 7.24187H22.1284C23.1083 7.24187 23.5035 8.50513 22.6983 9.06359L17.7095 12.5235C17.3426 12.7779 17.1889 13.2448 17.3327 13.6674L19.2569 19.3205C19.5678 20.2337 18.533 21.0142 17.7404 20.4644L12.5699 16.8785C12.2271 16.6408 11.7728 16.6408 11.4301 16.8785L6.25958 20.4644C5.46692 21.0142 4.43219 20.2337 4.74303 19.3205L6.66723 13.6674C6.8111 13.2448 6.65734 12.7779 6.29046 12.5235L1.30169 9.06359C0.496457 8.50513 0.891645 7.24187 1.87159 7.24187H8.13841C8.56651 7.24187 8.94713 6.96936 9.08507 6.5641L11.0533 0.781664Z"
                            fill="#FFA858"
                          />
                        </svg>
                        <svg
                          width="24"
                          height="21"
                          viewBox="0 0 24 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0533 0.781664C11.3609 -0.122033 12.639 -0.122035 12.9466 0.781662L14.9149 6.5641C15.0528 6.96936 15.4334 7.24187 15.8615 7.24187H22.1284C23.1083 7.24187 23.5035 8.50513 22.6983 9.06359L17.7095 12.5235C17.3426 12.7779 17.1889 13.2448 17.3327 13.6674L19.2569 19.3205C19.5678 20.2337 18.533 21.0142 17.7404 20.4644L12.5699 16.8785C12.2271 16.6408 11.7728 16.6408 11.4301 16.8785L6.25958 20.4644C5.46692 21.0142 4.43219 20.2337 4.74303 19.3205L6.66723 13.6674C6.8111 13.2448 6.65734 12.7779 6.29046 12.5235L1.30169 9.06359C0.496457 8.50513 0.891645 7.24187 1.87159 7.24187H8.13841C8.56651 7.24187 8.94713 6.96936 9.08507 6.5641L11.0533 0.781664Z"
                            fill="#FFA858"
                          />
                        </svg>
                        <svg
                          width="24"
                          height="21"
                          viewBox="0 0 24 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0533 0.781664C11.3609 -0.122033 12.639 -0.122035 12.9466 0.781662L14.9149 6.5641C15.0528 6.96936 15.4334 7.24187 15.8615 7.24187H22.1284C23.1083 7.24187 23.5035 8.50513 22.6983 9.06359L17.7095 12.5235C17.3426 12.7779 17.1889 13.2448 17.3327 13.6674L19.2569 19.3205C19.5678 20.2337 18.533 21.0142 17.7404 20.4644L12.5699 16.8785C12.2271 16.6408 11.7728 16.6408 11.4301 16.8785L6.25958 20.4644C5.46692 21.0142 4.43219 20.2337 4.74303 19.3205L6.66723 13.6674C6.8111 13.2448 6.65734 12.7779 6.29046 12.5235L1.30169 9.06359C0.496457 8.50513 0.891645 7.24187 1.87159 7.24187H8.13841C8.56651 7.24187 8.94713 6.96936 9.08507 6.5641L11.0533 0.781664Z"
                            fill="#FFA858"
                          />
                        </svg>
                      </div>
                      <p className={`${style.SubTitle} text-center mt-[25px]`}>
                        {carousel.text}
                      </p>
                      <h3 className="mt-[20px] font-Roboto text-2.5xl font-semibold text-blue-700 text-center leading-[29.3px] mb-[12px]">
                        {carousel.name}
                      </h3>
                      <h5 className="font-Open-Sans text-[15px] font-normal text-blue-80 leading-[24.81px] text-center">
                        {carousel.job}
                      </h5>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="w-full max-w-[1030px]  flex flex-wrap px-[20px] items-center justify-around mx-auto  gap-[20px] lg877:flex lg877:gap-[23px] 677:gap-[30px]     ">
            <div className="p-[11px] bg-[#f1f1f1] w-[211px] h-[211px] rounded-full flex flex-col items-center justify-center mt-[102px] outline outline-[6px] outline-green-300 outline-offset-8 lg1060:w-[180px] lg1060:h-[180px] lg950:w-[160px] lg950:h-[160px]">
              <h1 className={`${style.Title}`}>100%</h1>
              <p className={`${style.SubTitle} text-blue-700 font-semibold`}>
                Organic
              </p>
            </div>
            <div className="p-[11px] bg-[#f1f1f1] w-[211px] h-[211px] rounded-full flex flex-col items-center justify-center mt-[102px] outline outline-[6px] outline-green-300 outline-offset-8 lg1060:w-[180px] lg1060:h-[180px] lg950:w-[160px] lg950:h-[160px]">
              <h1 className={`${style.Title}`}>285</h1>
              <p className={`${style.SubTitle} text-blue-700 font-semibold`}>
                Active Product
              </p>
            </div>
            <div className="p-[11px] bg-[#f1f1f1] w-[211px] h-[211px] rounded-full flex flex-col items-center justify-center mt-[102px] outline outline-[6px] outline-green-300 outline-offset-8 lg1060:w-[180px] lg1060:h-[180px] lg950:w-[160px] lg950:h-[160px]">
              <h1 className={`${style.Title}`}>350+</h1>
              <p className={`${style.SubTitle} text-blue-700 font-semibold`}>
                Organic Orchads
              </p>
            </div>
            <div className="p-[11px] bg-[#f1f1f1] w-[211px] h-[211px] rounded-full flex flex-col items-center justify-center mt-[102px] outline outline-[6px] outline-green-300 outline-offset-8 lg1060:w-[180px] lg1060:h-[180px] lg950:w-[160px] lg950:h-[160px]">
              <h1 className={`${style.Title}`}>25+</h1>
              <p className={`${style.SubTitle} text-blue-700 font-semibold`}>
                Years of Farming
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* offerProduct  */}
      <section className="w-full max-w-[1920px] mx-auto mt-[176px] bg-blue-700 py-[156px] ">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="w-full flex justify-between items-end">
            <div className="block">
              <h5 className={`${style.SectionSubtitle} text-[#7EB693] `}>
                Offer
              </h5>
              <h1 className=" font-Roboto text-5xl leading-[58.59px] font-extrabold text-[#FFFFFF] ">
                We Offer Organic For You
              </h1>
            </div>
            <Button
              text="View All Poduct"
              isIcon={true}
              type="w-full max-w-[256px] text-blue-700 bg-yellow-300 hover:text-white-50 leading-[23.44px] max-h-[79px]"
            />
          </div>
          <div className="my-[39px] w-full flex flex-wrap justify-between gap-[20px]">
            {offerProduct.map((product, id) => (
              <Card product={product} id={id} key={id} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1920px] mx-auto">
        <div className="flex justify-end items-center w-full relative h-[931px] lg1400:align-center lg1400:justify-center lg1400:px-[15px]">
          <div className="absolute left-0 top-0 w-full max-w-[952px] h-full lg1400:w-full lg1400:max-w-full lg1060:w-full ">
            <img
              src={EcoFriendly}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="flex justify-end w-full max-w-[789px] lg1400:flex lg1400:align-center lg1400:justify-center relative z-2 max-h-[723px] translate-x-[-40%] lg1400:translate-x-[0]">
            <div className="bg-[#FFFFFF] pl-[89px] pt-[78px] pb-[77px] rounded-[30px] md677:p-10 md677:h-full">
              <h5 className={`${style.SectionSubtitle} text-[#7EB693] `}>
                Eco Friendly
              </h5>
              <h1 className={`${style.Title}`}>
                Econis is a Friendly <br /> Organic Store
              </h1>
              <div className="block mt-[25px] lg1400:px-[10px]">
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-medium mt-[20px]">
                  Organic Foods Only
                </h2>
                <p className="text-md font-Open-Sans text-blue-80 font-normal mt-[7px] leading-[29.77px] max-w-[635px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-medium mt-[20px]">
                  Organic Foods Only
                </h2>
                <p className="text-md font-Open-Sans text-blue-80 font-normal mt-[7px] leading-[29.77px] max-w-[635px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>{" "}
                <h2 className="text-2.5xl font-Roboto text-blue-700 font-medium mt-[20px]">
                  Organic Foods Only
                </h2>
                <p className="text-md font-Open-Sans text-blue-80 font-normal mt-[7px] leading-[29.77px] max-w-[635px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Organic Galery section */}
      <section className="w-full max-w-[1920px] mx-auto bg-[#F1F8F4] py-[187px]">
        <div className="w-full mx-auto flex flex-wrap justify-between gap-[30px] ">
          <div className=" relative flex justify-center items-center">
            <div className="relative w-full max-w-[612px]">
              <img src={organikimg} alt="" className="w-full" />
            </div>
            <div className="absolute w-full max-w-[320px] rounded-[20px] px-[83px] py-[33px] bg-[#FFFFFF]">
              <p className="text-blue-700 font-Roboto text-2.5xl leading-[29.3px]">
                Organic Juice
              </p>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[612px] ">
              <img src={organikimg1} alt="" className="w-full" />
            </div>
            <div className="absolute w-full max-w-[320px] rounded-[20px] px-[83px] py-[33px] bg-[#FFFFFF]">
              <p className="text-blue-700 font-Roboto text-2.5xl leading-[29.3px]">
                Organic Juice
              </p>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[612px] ">
              <img src={organikimg2} alt="" className="w-full" />
            </div>
            <div className="absolute w-full max-w-[320px] rounded-[20px] px-[83px] py-[33px] bg-[#FFFFFF]">
              <p className="text-blue-700 font-Roboto text-2.5xl leading-[29.3px]">
                Organic Juice
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;



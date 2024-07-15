import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import Vektor from "./images/Vector.png";
import { style } from "../../utils/style";
const Blogsingle = () => {
  const [blogs, setBlogs] = useState(null);
  const { blogId } = useParams();

  useEffect(() => {
    axios.get(`https://organick-server-h6p8.onrender.com/Blogs/${blogId}`).then((blogCard) => {
      setBlogs(blogCard.data);
    });
  }, [blogId]);

  if (!blogs) {
    return <Loader />;
  }

  return (
    <div>
      <section className="w-full max-w-[1400px] flex gap-[88px]" key={blogs.id}>
        {/* <p>Blogsingle</p>
        <h5>{blogs.firstName}</h5>
        <h1>{blogs.title}</h1> */} * hozircha kerak emas *
      </section>
      <section
        className="w-full max-w-[1920px]  relative flex justify-start items-center mx-auto h-[100vh] max-h-[898px] px-[220px] sm520:px-[15px]"
        key={blogs.id}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <img className="w-full h-full object-cover" src={blogs.img} />
        </div>

        <div className="block justify-center w-full max-h-[385px] z-10 translate-y-[100%]">
          <div className="bg-[#FFFFFF] w-full max-w-[1500px] pl-[89px] pt-[78px] pb-[77px] rounded-[30px] md677:p-10 md677:h-full shadow-lg shadow-5-strong transition duration-700 ease-in-out">
            <div className="block">
              <div className="w-full lg1400:px-[10px] gap-[45px] pb-[16px]">
                <p className="w-full text-md text-blue-700 font-medium font-Roboto">
                  Posted On: January 6, 2022
                </p>
              </div>
              <div className="w-full flex gap-[6px]">
                <div className="">
                  <img src={Vektor} alt="" />
                </div>
                <p className={`${style.SubTitle}`}> {blogs.firstName}</p>
              </div>
            </div>
            <div className="block lg1400:px-[10px]">
              <h1 className="text-7xl font-Roboto text-blue-700 font-bold">
                {blogs.title}
              </h1>
              <p className="w-full text-md font-Open-Sans text-blue-80 font-normal mt-[7px] leading-[29.77px] max-w-[726px]">
                Established fact that a reader will be distracted by the
                readable content of a page when looking a layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1920px] mx-auto pt-[209px] flex justify-center items-center">
        <div className="w-full max-w-[937px] mx-auto">
          <div className="w-full">
            <p className="w-full text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[936px] mb-[22px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <h1 className="text-blue-700 font-extrabold font-Roboto text-5xl leading-[29.3px]">
              Preferred Form of Vitamin D?
            </h1>
            <p className="w-full text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[936px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <ul className="w-full  list-disc gap-[21px] ml-[30px]">
              <li className="w-full text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[936px]">
                Publishing packages and web pageLorem Ipsum as their default
              </li>
              <li className="w-full text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[936px]">
                Publishing packages and web pageLorem Ipsum as their default
              </li>
              <li className="w-full text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[936px]">
                Publishing packages and web pageLorem Ipsum as their default
              </li>
            </ul>
          </div>

          <div className="w-full flex justify-center align-center text-center bg-[#F1EDEA] max-w-[936px] mt-[50px] rounded-[30px] px-[59px] py-[69px] ">
            <p className="w-full text-md font-Open-Sans text-blue-700 mt-[24px] font-bold leading-[29.77px] max-w-[936px]">“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”</p>
          </div>
          <div className="w-full  mt-[40px]">
            <h2 className="text-blue-700 font-extrabold font-Roboto text-3.5xl  leading-[29.3px]">
              Make perfect organic product with us
            </h2>
            <p className="w-full text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[936px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>

            <ul className="w-full list-decimal gap-[21px] ml-[30px]">
              <li className="w-full text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[936px]">
                Publishing packages and web pageLorem Ipsum as their default
              </li>
              <li className="w-full text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[936px]">
                Publishing packages and web pageLorem Ipsum as their default
              </li>
              <li className="w-full text-md font-Open-Sans text-blue-80 mt-[24px] font-normal leading-[29.77px] max-w-[936px]">
                Publishing packages and web pageLorem Ipsum as their default
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};  

export default Blogsingle;

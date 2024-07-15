import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import BlogBanner from "./images/banner.png";
import BlogCard from "../../Components/blogCard/BlogCard";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`https://organick-server-h6p8.onrender.com/Blogs`).then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <div>
      <Banner title="Recent News" img={BlogBanner} />
      <section className="w-full max-w-[1920px] mt-[120px] mx-auto flex justify-center">
        <div className="w-full max-w-[1460px] flex flex-wrap gap-[100px] ">
          {blogs.map((blog, id) => (
            <BlogCard blogs={blog} key={id} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

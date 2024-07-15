import React, { useEffect, useState } from "react";
import axios from "axios";
import PorfolioCard from "../../Components/PorfolioCard/PorfolioCard";
import Banner from "../../Components/Banner/Banner";
import PortfolioBanner from "./img/Image.png";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`https://organick-server-h6p8.onrender.com/Projects`).then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div>
      <Banner title="Portfolio Standard" img={PortfolioBanner} />
      <section className="w-full max-w-[1920px] mt-[120px] mx-auto flex justify-center ">
        <div className="w-full max-w-[1410px] flex flex-wrap ">
          {projects.map((portfolio, id) => (
            <PorfolioCard projects={portfolio} key={id} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
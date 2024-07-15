import React, { useEffect, useState } from "react";
import Banner from "./../../Components/Banner/Banner";
import ShopBanner from "./img/Image.png";
import { Link } from "react-router-dom";
import Card from "./../../Components/Card/Card";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../Components/Loader/Loader";
// ..
AOS.init();

const MainShop = () => {
  let api = `https://organick-server-h6p8.onrender.com/ShopProducts`;
  const [CardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then((card) => {
        setCardData(card.data);
      })
      .catch((error) => console.log(error.statusText));
  }, []);

  return (
    <div>
      <Banner title="Shop" img={ShopBanner} />
      <div className="justify-center my-[90px] w-full max-w-[1400px] mx-auto flex flex-wrap gap-[20px]">
        {CardData.length > 0 ? (
          CardData.map((product, id) => (
            <div data-aos="flip-right" key={id}>
              <Link to={`${id}`}>
                <Card product={product} id={id} />
              </Link>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default MainShop;

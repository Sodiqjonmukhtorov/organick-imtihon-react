import React, { useContext, useEffect, useRef, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import SingleBanner from "./img/Banner Image.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { style } from "../../utils/style";
import Button from "./../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import { ProductContext } from "../../contexts/Context";

const Item = () => {
  const { shopId } = useParams();
  const [relativeCards, setRelativeCards] = useState([]);
  const ItemCount = useRef();

  const { setCardDetails, cardDetails, AddToCard } = useContext(ProductContext);

  useEffect(() => {
    const fetchCardDetails = async () => {
      const response = await axios.get(
        `https://organick-server-h6p8.onrender.com/ShopProducts/${shopId}`
      );
      setCardDetails(response.data);
    };

    const fetchRelativeCards = async () => {
      const response = await axios.get(
        `https://organick-server-h6p8.onrender.com/ShopProducts/`
      );

      const relativeCards = response.data.filter(
        (relativeCard) => relativeCard.id !== shopId
      );
      let relatives = relativeCards.slice(0, 4);
      setRelativeCards(relatives);
    };

    fetchRelativeCards();
    fetchCardDetails();
  }, [shopId]);

  if (!cardDetails) {
    return <Loader />;
  }

  return (
    <div>
      <Banner title="Shop Single" img={SingleBanner} />
      <section
        className="flex gap-[88px] w-full max-w-[1337px] mx-auto mt-[133px] items-center"
        key={cardDetails.id}
      >
        <div className="w-full max-w-[591px] h-[563px] relative bg-white-50 rounded-[30px]">
          <img
            className="w-full h-full object-cover mix-blend-multiply"
            src={cardDetails.imageUrl}
            alt={cardDetails.title}
          />
          <div className="absolute top-[38px] left-[35px] bg-blue-700 rounded-[8px] px-[12px] py-[5px] text-white font-Open-Sans font-semibold leading-[20.43px]">
            {cardDetails.category}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-semibold font-Roboto leading-[46.88px] text-blue-700">
            {cardDetails.title}
          </h1>
          <div className="mt-[9px] flex items-center gap-[3px]">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              className="cursor-pointer"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z"
                fill="#FFA858"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              className="cursor-pointer"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z"
                fill="#FFA858"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              className="cursor-pointer"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z"
                fill="#FFA858"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              className="cursor-pointer"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z"
                fill="#FFA858"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              className="cursor-pointer"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z"
                fill="#FFA858"
              />
            </svg>
          </div>
          <div className="flex gap-[9px] mt-[13px] items-center">
            <del className="text-2xl font-Open-Sans font-semibold text-[#B8B8B8] leading-[20.43px]">
              ${cardDetails.oldPrice}.00
            </del>
            <h5 className="text-2.5xl font-bold text-blue-700 font-Open-Sans leading-[24.51px] ">
              ${cardDetails.price}.00
            </h5>
          </div>
          <p className={`${style.SubTitle} mt-[27px]`}>{cardDetails.text}</p>
          <div className="flex gap-[20px] mt-[35px]">
            <div className="flex gap-[22px] items-center">
              <h3 className="font-Roboto text-2xl leading-[23.44px] font-bold text-blue-700">
                Quantity :
              </h3>
              <input
                className="w-[134px] h-[80px] rounded-[16px] border-[2px] border-blue-700 font-Roboto text-2xl leading-[23.44px] font-bold text-blue-700 flex justify-center items-center text-center"
                type="number"
                name="count"
                defaultValue={1}
                min={1}
                max={5}
                maxLength={5}
                minLength={1}
                ref={ItemCount}
              />
            </div>
            <div>
              <Button
                isEvent={() => AddToCard(shopId, ItemCount)}
                text="Add To Cart"
                isIcon={true}
                type="bg-blue-700 text-[#fff] border-bue-700 hover:text-blue-700"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1137px] mx-auto">
        <div className="mt-[90px] flex gap-[20px] max-w-[692px] mx-auto">
          <Button
            text="Product Description"
            type="bg-blue-700 text-[#fff] border-bue-700 hover:text-blue-700 max-w-[363px] pointer-events-none !text-2.5xl !py-[23px]"
          />
          <Button
            text="Additional Info"
            type="max-w-[363px] pointer-events-none text-blue-700 bg-green-50 !text-2.5xl !py-[23px]"
          />
        </div>
        <p className={`${style.SubTitle} mt-[27px] text-center`}>
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </section>
      <section className="mt-[140px] max-w-[1440px] mx-auto">
        <h1 className={`${style.Title} text-center`}>Related Products</h1>
        <div className="flex mt-[40px] gap-[21px]">
          {relativeCards.length > 0 &&
            relativeCards.map((item) => (
              <Link to={`/shop/${item.id}`} key={item.id}>
                <Card product={item} />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Item;

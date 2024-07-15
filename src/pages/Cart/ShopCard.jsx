import React from "react";
import Banner from "../../Components/Banner/Banner";
import CardBanner from "./img/banner.png";
import shopbag from "./img/shopping-bag.png";
import Button from "../../Components/Button/Button";
import { style } from "../../utils/style";
import { useContext } from "react";
import { ProductContext } from "../../contexts/Context";
const ShopCard = () => {
  const { productData, RemoveItem, getCartTotal } = useContext(ProductContext);

  return (
    <>
      <Banner title="Shop Bag" img={CardBanner} />
      <section className="w-full max-w-[1920px] mx-auto mt-[113px] flex justify-center ">
        <div className="w-full max-w-[1400px] block mt-[40px]">
          <div className="w-full mx-auto flex mt-[27px] ">
            <h1 className={`${style.NavLogo} text-green-300`}>Savatingizda,</h1>
            <h1 className={`${style.NavLogo} pl-[10px] `}>
              {productData.length ? productData.length : "0"} ta mahsulot
              mavjud.
            </h1>
          </div>
          <div className="w-full flex flex-wrap gap-[15px]">
            <div className="w-full max-w-[900px] mt-[60px]">
              {productData.map((product, id) => (
                <div
                  key={id}
                  className="w-full flex mt-[12px] border border-green-300 rounded-[30px] "
                >
                  <div className="relative bg-white-50 rounded-[30px]">
                    <img
                      className="w-full max-w-[190px] object-cover mix-blend-multiply"
                      src={product.imageUrl}
                      alt=""
                    />
                    <div className="absolute top-[130px] left-[34px] bg-blue-700 rounded-[8px] px-[12px] py-[5px] text-white font-Open-Sans font-semibold leading-[20.43px]">
                      {product.category}
                    </div>
                  </div>
                  <div className="flex justify-center items-center ml-[2rem] ">
                    <br />
                    <div className="block">
                      <h1 className="text-4xl font-semibold font-Roboto leading-[46.88px] text-[#7EB693] ">
                        {product.title}
                      </h1>
                      <div className="mt-[15px] flex gap-[16px] items-center">
                        <div className="flex items-center gap-[3px]">
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
                        <div className="text-2xl font-Open-Sans font-semibold text-[#B8B8B8] leading-[20.43px]">
                          soni:
                        </div>
                        <div className="rounded-[5px] w-[35px] h-[35px] border-green-300 flex items-center justify-center border-2 text-2xl font-Open-Sans font-semibold text-[#565656] leading-[20.43px]">
                          {product.count}
                        </div>
                      </div>
                      <div className="flex gap-[9px] mt-[13px] items-center">
                        <del className="text-2xl font-Open-Sans font-semibold text-[#B8B8B8] leading-[20.43px]">
                          ${product.oldPrice}.00
                        </del>
                        <h5 className="text-2.5xl font-bold text-[#7EB693] font-Open-Sans leading-[24.51px] ">
                          ${product.price}.00
                        </h5>
                        <div>
                          <span
                            onClick={() => RemoveItem(product.id)}
                            className="w-full max-w-[520px] drop-shadow-xl hover:drop-shadow active:filter-none cursor-pointer"
                          >
                            <img
                              className="w-full max-w-[60px] object-cover float-end"
                              src={shopbag}
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full mt-[72px] max-w-[400px] max-h-[350px] border border-green-300 rounded-[30px]">
              <div className="w-full px-[10px] ">
                <div className="text-center p-[5px] text-[white] rounded-[30px] bg-green-300">
                  Orders
                </div>
              </div>
              <h5 className="text-2.5xl font-bold text-[#7EB693] font-Open-Sans leading-[24.51px] px-[1rem] py-[1rem] ">
                Products ({productData.length ? productData.length : "0"}):
              </h5>
              <div className="w-full  flex justify-between">
                <h5 className="text-2xl font-Open-Sans font-semibold text-[#B8B8B8] leading-[20.43px] px-[1rem] ">
                  Total:
                </h5>
                <h5 className="text-2xl font-Open-Sans font-semibold text-[#B8B8B8] leading-[20.43px] px-[1rem] ">
                  ${getCartTotal()}.00
                </h5>
              </div>
              <div className="w-full flex justify-center">
                <Button
                  text="Sotib olish!"
                  type="h-[70px] mt-[2.50rem] text-white bg-green-300 text-blue-700 hover:text-green-300 border-green-300 sm472:mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCard;

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import { style } from "../../utils/style";
import Banner from "./../../Components/Banner/Banner";
import ShopBanner from "./img/Image.png";
import { Link } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [SearchResult, setSearchResult] = useState(null);
  const SearchValue = useRef();

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

  const SearchFunction = () => {
    const DataOfProducts = products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(SearchValue.current.value.toLowerCase())
    );

    if (DataOfProducts.length > 0) {
      setSearchResult(DataOfProducts);
    } else if (DataOfProducts.length === 0) {
      setSearchResult(null);
    }
  };

  return (
    <div>
      <Banner title="Search item" img={ShopBanner} />
      <section className="w-full max-w-[1400px] mx-auto mt-[176px]">
        <div className="translate-y-[-80%]">
          <label
            htmlFor="search"
            className="left-[20%]  relative lg1060:h-[40px] lg1060:max-w-[230px] lg912:h-[35px] md787:hidden "
          >
            <input
              ref={SearchValue}
              className={`pl-[25px] bg-[#fafafa] rounded-[36px] px-[12px] h-[73px] pr-[590px] ${style.NavLink} placeholder:font-light lg912:pr-[18px] lg912:placeholder:text-[22px] md787:placeholder:invisible cursor-text`}
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={SearchFunction}
            />
            <span
              onClick={SearchFunction}
              className={`${style.FlexCenter} cursor-pointer w-[70px] h-[70px] rounded-full bg-green-300 absolute top-[50%] right-[0px] translate-y-[-50%] lg1060:w-[32px] lg1060:h-[32px] lg1060:right-[3px]`}
            >
              <svg
                width="26"
                height="26"
                className="lg1060:w-[18px] lg1060:h-[17px] "
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4692 18.8921L16.7086 14.1315C17.8547 12.6057 18.4734 10.7485 18.4713 8.84016C18.4713 3.96573 14.5056 0 9.63118 0C4.75674 0 0.791016 3.96573 0.791016 8.84016C0.791016 13.7146 4.75674 17.6803 9.63118 17.6803C11.5395 17.6824 13.3967 17.0637 14.9225 15.9175L19.6831 20.6781C19.9241 20.8936 20.2384 21.0085 20.5615 20.9995C20.8846 20.9905 21.192 20.8581 21.4205 20.6295C21.6491 20.401 21.7815 20.0936 21.7905 19.7705C21.7996 19.4474 21.6846 19.1331 21.4692 18.8921ZM3.31678 8.84016C3.31678 7.59129 3.68711 6.37047 4.38094 5.33207C5.07478 4.29367 6.06095 3.48434 7.21476 3.00642C8.36856 2.52849 9.63818 2.40345 10.8631 2.64709C12.0879 2.89073 13.213 3.49212 14.0961 4.3752C14.9792 5.25829 15.5806 6.38341 15.8242 7.60828C16.0679 8.83315 15.9428 10.1028 15.4649 11.2566C14.987 12.4104 14.1777 13.3966 13.1393 14.0904C12.1009 14.7842 10.88 15.1546 9.63118 15.1546C7.95711 15.1526 6.35218 14.4866 5.16844 13.3029C3.98469 12.1192 3.31878 10.5142 3.31678 8.84016Z"
                  fill="#FAFAFA"
                />
              </svg>
            </span>
          </label>
        </div>
        <div className="justify-center my-[20px] w-full max-w-[1920px] mx-auto flex flex-wrap gap-[20px]">
          {SearchResult ? (
            SearchResult.map((product) => (
              <div data-aos="flip-right" key={product.id}>
                <Link to={`${product.id}`}>
                  <Card product={product} id={product.id} />
                </Link>
              </div>
            ))
          ) : SearchResult === undefined ? (
            <h1 className="text-[42px]">Mahsulot topilmadi !</h1>
          ) : (
            products.map((product, id) => (
              <div data-aos="flip-right" key={id}>
                <Link to={`${id}`}>
                  <Card product={product} id={id} />
                </Link>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;

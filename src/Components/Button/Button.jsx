import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, isIcon, type, isLink, isEvent }) => {
  return (
    <Link
      onClick={isEvent ? isEvent : null}
      className={`cursor-pointer w-full max-w-[235px] px-[39px] py-[28px] flex items-center justify-center rounded-[16px] gap-[10px] font-Roboto font-bold text-2xl border-[2px] transition-all duration-75 hover:bg-[transparent] md787:px-[29px] md787:py-[18px] sm450:px-[12px] sm450:py-[10px] sm450:max-w-[184px] ${type}`}
      to={`${isLink == undefined ? "" : isLink}`}
    >
      {text}
      {isIcon ? (
        <span className="w-[19px] h-[19px] rounded-full bg-[#335B6B] flex items-center justify-center">
          <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.47641 1.12891L7.87095 4.19342L4.47641 7.25794M7.39949 4.19342H0.516113"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : (
        ""
      )}
    </Link>
  );
};

export default Button;


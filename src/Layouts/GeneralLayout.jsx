import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Context from "../contexts/Context";

const GeneralLayout = () => {
  return (
    <>
      <Context>
        <Header />
        <Outlet />
        <Footer />
      </Context>
    </>
  );
};

export default GeneralLayout;

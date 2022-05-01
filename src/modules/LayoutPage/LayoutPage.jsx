import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

function LayoutPage(props) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutPage;

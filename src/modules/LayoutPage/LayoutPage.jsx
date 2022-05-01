import React from "react";
import Header from "../Header";
import AuthPage from "../../pages/AuthPage/AuthPage";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

function LayoutPage(props) {
  return (
    <>
      <Header />
      <Outlet />
      <AuthPage />
      <Footer />
    </>
  );
}

export default LayoutPage;

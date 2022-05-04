import React from "react";
import { Bars } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.Loader}>
      <Bars
        type="Circles"
        color="#ff6b01"
        height={100}
        width={100}
        timeout={5000}
      />
    </div>
  );
};
export default Loader;

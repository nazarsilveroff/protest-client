import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Footer.module.css";
import Icons from "../../images/icons.svg";

function Footer(props) {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerContainer}>
          <p className={s.footerText}>
            &copy; 2022
            <span className={`${s.footerText} ${s.footerTextBA}`}>
              All Rights Reserved
            </span>
            Developed with
            <svg className={s.footerHeart} width="16px" height="14">
              <use xlinkHref={`${Icons}#heart`}></use>
            </svg>
          </p>
          <p className={s.footerText}>
            by
            <NavLink to="/" className={`${s.footerText} ${s.footerTeam}`}>
              GoIT Students
            </NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import PropTypes from "prop-types";
import s from "./HeaderMenu.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";

function HeaderMenu({ isLoggedIn, onLogOut, onModalClose }) {
  const userName = "Dmitri";

  return (
    <div className={s.container}>
      <div className={s.logoWrapper}>
        <Link to={"/"}>
          <img src={logo} alt={"logo"} className={s.logo} />
        </Link>
        <div className={s.userInfo}>
          {isLoggedIn && (
            <div className={s.userName_circle}>{userName.slice(0, 1)}</div>
          )}

          <div className={s.menu}>
            <MdClose size={24} onClick={onModalClose} />
          </div>
        </div>
      </div>
      <ul className={s.list}>
        {isLoggedIn && (
          <li className={s.item}>
            <NavLink
              to="/"
              exact
              className={(navData) =>
                navData.isActive ? s.activeLink : s.link
              }
            >
              Home
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li className={s.item}>
            <NavLink
              to="/materials"
              exact
              className={(navData) =>
                navData.isActive ? s.activeLink : s.link
              }
            >
              Materials
            </NavLink>
          </li>
        )}
        <li className={s.item}>
          <NavLink
            to="/contacts"
            exact
            className={(navData) => (navData.isActive ? s.activeLink : s.link)}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
      {isLoggedIn && (
        <div className={s.signOut}>
          <RiLogoutBoxRLine size={16} onClick={onLogOut} />
        </div>
      )}
    </div>
  );
}

HeaderMenu.propTypes = {
  onLogOut: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  onModalClose: PropTypes.func,
};

export default HeaderMenu;

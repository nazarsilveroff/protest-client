import PropTypes from "prop-types";
import s from "./ModalMenu.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import {useSelector} from "react-redux";
import {getUser} from "../../../redux/auth/auth-selectors";

function ModalMenu({ isLogin, onLogOut, onModalClose }) {
  const {username} = useSelector(getUser)

  return (
    <div className={s.container}>
      <div className={s.logoWrapper}>
        <Link to={"/"}>
          <img src={logo} alt={"logo"} className={s.logo} />
        </Link>
        <div className={s.userInfo}>
          {isLogin && (
            <div className={s.userName_circle}>{username.slice(0, 1)}</div>
          )}

          <div className={s.menu}>
            <MdClose size={24} onClick={onModalClose} />
          </div>
        </div>
      </div>
      <ul className={s.list}>
        {isLogin && (
          <li className={s.item}>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? s.activeLink : s.link
              }
            >
              Home
            </NavLink>
          </li>
        )}
        {isLogin && (
          <li className={s.item}>
            <NavLink
              to="/materials"
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
            className={(navData) => (navData.isActive ? s.activeLink : s.link)}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
      {isLogin && (
        <div className={s.signOut}>
          <RiLogoutBoxRLine size={16} onClick={onLogOut} />
        </div>
      )}
    </div>
  );
}

ModalMenu.propTypes = {
  onLogOut: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  onModalClose: PropTypes.func,
};

export default ModalMenu;

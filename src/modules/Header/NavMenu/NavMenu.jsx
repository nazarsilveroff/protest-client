import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import s from "./NavMenu.module.css";

function NavMenu({isLoggedIn}) {
    if (!isLoggedIn) {
        return (
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink
                            to="/contacts"

                            className={(navData) => (navData.isActive ? s.activeLink : s.link)}
                        >
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav className={s.nav}>
                <ul className={s.list}>
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
                    <li className={s.item}>
                        <NavLink
                            to="/contacts"
                            className={(navData) => (navData.isActive ? s.activeLink : s.link)}
                        >
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

NavMenu.propTypes =
    {
        isLoggedIn: PropTypes.bool,
    }
;

export default NavMenu;

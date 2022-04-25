import s from "./Header.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import NavMenu from "./NavMenu/NavMenu";
import Modal from "../Modal/Modal";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breakPointTablet = 768;
  const userName = "Dmitri";

  const handleResizeWindow = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <header className={s.header}>
        <Link to={"/"}>
          <img src={logo} alt={"logo"} className={s.logo} />
        </Link>
        {width < breakPointTablet ? (
          <div className={s.userInfo}>
            {isLoggedIn && (
              <div className={s.userName_circle}>{userName.slice(0, 1)}</div>
            )}

            <div className={s.menu}>
              <GiHamburgerMenu size={15} onClick={() => setIsModalOpen(true)} />
            </div>
          </div>
        ) : (
          <>
            <NavMenu isLoggedIn={isLoggedIn} />
            {isLoggedIn && (
              <div className={s.userInfo}>
                <div className={s.userName_circle}>{userName.slice(0, 1)}</div>
                <div className={s.userName}>{userName}</div>
                <div className={s.signOut}>
                  <RiLogoutBoxRLine
                    size={16}
                    onClick={() => setIsLoggedIn(false)}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </header>

      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <HeaderMenu
            isLoggedIn={isLoggedIn}
            onLogOut={() => {
              setIsLoggedIn(false);
            }}
            onModalClose={() => {
              setIsModalOpen(false);
            }}
          />
        </Modal>
      )}
    </>
  );
}

export default Header;

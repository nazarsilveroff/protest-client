import s from "./Header.module.css";
import {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";
import Modal from "../Modal";
import UserInfo from "./UserInfo";
import NavMenu from "./NavMenu";
import ModalMenu from './ModalMenu'

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className={s.header}>
                <Link to={"/"}>
                    <img src={logo} alt={"logo"} className={s.logo}/>
                </Link>

                <NavMenu isLoggedIn={isLoggedIn}/>

                <UserInfo isLoggedIn={isLoggedIn}
                          setIsModalOpen={setIsModalOpen}
                          setIsLoggedIn={setIsLoggedIn}
                />
            </header>

            {isModalOpen && (
                <Modal>
                    <ModalMenu
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

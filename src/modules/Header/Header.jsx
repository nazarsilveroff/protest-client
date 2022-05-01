import s from "./Header.module.css";
import {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";
import Modal from "../Modal";
import UserInfo from "./UserInfo";
import NavMenu from "./NavMenu";
import ModalMenu from './ModalMenu'
import useAuth from "../../shared/hooks/useAuth";
import {useDispatch} from "react-redux";
import {logoutOperation} from "../../redux/auth/auth-operations";

function Header() {

    const dispatch = useDispatch()
    const isLogin = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className={s.header}>
                <Link to={"/"}>
                    <img src={logo} alt={"logo"} className={s.logo}/>
                </Link>

                <NavMenu isLogin={isLogin}/>

                <UserInfo isLogin={isLogin}
                          setIsModalOpen={setIsModalOpen}
                />
            </header>

            {isModalOpen && (
                <Modal>
                    <ModalMenu
                        isLogin={isLogin}
                        onLogOut={() => {
                            dispatch(logoutOperation());
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

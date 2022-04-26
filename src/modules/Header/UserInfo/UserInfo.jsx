import React from "react";
import s from './UserInfo.module.css'
import {GiHamburgerMenu} from "react-icons/gi";
import {RiLogoutBoxRLine} from "react-icons/ri";
import useResizeWindow from "../../../shared/hooks/useResizeWindow";

function UserInfo({isLoggedIn, setIsModalOpen, setIsLoggedIn}) {

    const width = useResizeWindow()
    const breakPointTablet = 768;

    const userName = "Dmitri";

    if (width < breakPointTablet) {
        return (
            <div className={s.userInfo}>
                {isLoggedIn && (
                    <div className={s.userName_circle}>{userName.slice(0, 1)}</div>
                )}

                <div className={s.menu}>
                    <GiHamburgerMenu size={15} onClick={() => setIsModalOpen(true)}/>
                </div>
            </div>
        );
    } else if (isLoggedIn) {
        return (
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
        );
    }
}

export default UserInfo;

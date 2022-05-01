import React from "react";
import s from './UserInfo.module.css'
import {GiHamburgerMenu} from "react-icons/gi";
import {RiLogoutBoxRLine} from "react-icons/ri";
import useResizeWindow from "../../../shared/hooks/useResizeWindow";
import {useDispatch, useSelector} from "react-redux";
import {logoutOperation} from "../../../redux/auth/auth-operations";
import {getUser} from "../../../redux/auth/auth-selectors";


function UserInfo({isLogin, setIsModalOpen}) {

    const dispatch = useDispatch()

    const width = useResizeWindow()
    const breakPointTablet = 768;


    const {username} = useSelector(getUser)

    if (width < breakPointTablet) {
        return (
            <div className={s.userInfo}>
                {isLogin && (
                    <div className={s.userName_circle}>{username.slice(0, 1)}</div>
                )}

                <div className={s.menu}>
                    <GiHamburgerMenu size={15} onClick={() => setIsModalOpen(true)}/>
                </div>
            </div>
        );
    } else if (isLogin) {
        return (
            <div className={s.userInfo}>
                <div className={s.userName_circle}>{username.slice(0, 1)}</div>
                <div className={s.userName}>{username}</div>
                <div className={s.signOut}>
                    <RiLogoutBoxRLine
                        size={16}
                        onClick={() => dispatch(logoutOperation())}
                    />
                </div>
            </div>
        );
    }
}

export default UserInfo;

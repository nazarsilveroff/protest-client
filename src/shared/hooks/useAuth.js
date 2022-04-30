import {getIslogin} from "../../redux/auth/auth-selectors";
import {shallowEqual, useSelector} from "react-redux";

function UseAuth() {
    return useSelector(getIslogin, shallowEqual);
}

export default UseAuth;
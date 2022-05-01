import {getIslogin} from "../../redux/auth/auth-selectors";
import {shallowEqual, useSelector} from "react-redux";

function useAuth() {
    return useSelector(getIslogin, shallowEqual);
}

export default useAuth;
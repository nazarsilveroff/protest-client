import Routes from "./modules/Routes";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {currentOperation} from "./redux/auth/auth-operations";


function App() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(currentOperation());
    }, [dispatch])

    return (
        <>
            <Routes/>
        </>

    );
}

export default App;

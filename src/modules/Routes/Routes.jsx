import { Navigate, Route, Routes } from "react-router-dom";
import LayoutPage from "../LayoutPage";
import AuthPage from "../../pages/AuthPage/AuthPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../../pages/HomePage";
import ContactsPage from "../../pages/ContactsPage";
import MaterialsPage from "../../pages/MaterialsPage";
import TestPage from "../../pages/TestPage";
import ResultsPage from "../../pages/ResultPage";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPage />}>
                <Route element={<PublicRoute />}>
                    <Route path="auth" element={<AuthPage/>} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route index element={<HomePage />} />
                    <Route path="test" element={<TestPage/>} />
                    <Route path="results" element={<ResultsPage/>} />
                    <Route path="contacts" element={<ContactsPage/>} />
                    <Route path="materials" element={<MaterialsPage/>} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default MyRoutes;
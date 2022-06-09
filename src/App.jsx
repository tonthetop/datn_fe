import { AdminRoutes } from "./routes/AdminRoutes"
import { PublicRoutes } from "./routes/PublicRoutes";
import { AuthAdminRoute } from "./routes/AuthAdminRoute"
import { AuthUserRoute } from "./routes/AuthUserRoute"
import { UserRoutes } from "./routes/UserRoutes";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css';

const App = () => {
    return (
        <>
            <ToastContainer autoClose={1000} />
            <Routes>
                <Route path="/*" element={<PublicRoutes />} />
                <Route
                    path="/admin/*"
                    element={
                        <AuthAdminRoute>
                            <AdminRoutes />
                        </AuthAdminRoute>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
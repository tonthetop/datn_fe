import { AdminRoutes } from "./routes/AdminRoutes"
import { PublicRoutes } from "./routes/PublicRoutes";
import { AuthRoute } from "./routes/AuthRoute"
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
                        <AuthRoute>
                            <AdminRoutes />
                        </AuthRoute>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
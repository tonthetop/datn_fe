import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const AuthRoute = ({
    children
}) => {
    const { user } = useSelector(state => state);
    const location = useLocation();

    if (user.tokenAccess) {
        if (user.role === "ADMIN") return <>{children}</>
        else return <Navigate to="/" state={{ from: location }} replace />;
    }
    else return <Navigate to="/login-and-register" state={{ from: location }} replace />;
};
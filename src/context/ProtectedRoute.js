import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
import { useContext } from 'react';

export const ProtectedRoute = ({children}) => {
    let { user } = useUserAuth();
    if (!user) {
        return <Navigate to="/" />
    }
    return children
}
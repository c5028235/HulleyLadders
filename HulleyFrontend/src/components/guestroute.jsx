import { Navigate } from "react-router-dom";

import { useAuth } from "/src/context/Authcontext";

function GuestRoute({ children }) {

    const { user, loading } = useAuth();

    if (loading) {
        return <h1>Loading...</h1>;
    }

    // already logged in
    if (user) {

        // admin redirect
        if (user.is_staff) {
            return <Navigate to="/admin" />;
        }

        // normal user redirect
        return <Navigate to="/" />;
    }

    return children;
}

export default GuestRoute;
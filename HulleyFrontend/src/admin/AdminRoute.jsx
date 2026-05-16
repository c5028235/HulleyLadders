import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

function AdminRoute({ children }) {

  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!user.is_staff) {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;
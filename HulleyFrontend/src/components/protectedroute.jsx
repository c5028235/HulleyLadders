import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, adminOnly = false }) {

  // get stored user info
  const access = localStorage.getItem("access");

  const isStaff = localStorage.getItem("is_staff") === "true";

  // not logged in
  if (!access) {
    return <Navigate to="/login" />;
  }

  // admin route protection
  if (adminOnly && !isStaff) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
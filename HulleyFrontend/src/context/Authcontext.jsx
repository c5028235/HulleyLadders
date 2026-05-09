import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // =========================
  // LOGIN
  // =========================

  const login = async (username, password) => {

    try {

      const res = await API.post("login/", {
        username,
        password
      });

      localStorage.setItem(
        "access",
        res.data.access
      );

      localStorage.setItem(
        "refresh",
        res.data.refresh
      );

      // get user info
      const userRes = await API.get("me/", {
        headers: {
          Authorization: `Bearer ${res.data.access}`
        }
      });

      setUser(userRes.data);

      // redirect
      if (userRes.data.is_staff) {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (err) {

      console.log(err);

      alert("Invalid credentials");
    }
  };

  // =========================
  // LOGOUT
  // =========================

  const logout = async () => {

    try {

      await API.post("logout/", {
        refresh: localStorage.getItem("refresh")
      });

    } catch (err) {
      console.log(err);
    }

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    setUser(null);

    navigate("/login");
  };

  // =========================
  // AUTO REFRESH TOKEN
  // =========================

  const refreshToken = async () => {

    try {

      const res = await API.post("token/refresh/", {
        refresh: localStorage.getItem("refresh")
      });

      localStorage.setItem(
        "access",
        res.data.access
      );

      return res.data.access;

    } catch (err) {

      logout();
    }
  };

  // =========================
  // LOAD USER ON APP START
  // =========================

  const loadUser = async () => {

    const access = localStorage.getItem("access");

    if (!access) {
      setLoading(false);
      return;
    }

    try {

      const res = await API.get("me/", {
        headers: {
          Authorization: `Bearer ${access}`
        }
      });

      setUser(res.data);

    } catch (err) {

      const newAccess = await refreshToken();

      if (newAccess) {

        const retry = await API.get("me/", {
          headers: {
            Authorization: `Bearer ${newAccess}`
          }
        });

        setUser(retry.data);
      }
    }

    setLoading(false);
  };

  useEffect(() => {

    loadUser();

  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
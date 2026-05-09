import { useNavigate } from "react-router-dom";
import API from "../services/api";

function LogoutButton() {

  const navigate = useNavigate();

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

    navigate("/login");
  };

  return (
    <button onClick={logout}>
      Logout
    </button>
  );
}

export default LogoutButton;




from datetime import timedelta

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=15),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "BLACKLIST_AFTER_ROTATION": True,
}
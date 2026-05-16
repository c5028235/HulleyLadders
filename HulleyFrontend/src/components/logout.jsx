import { useNavigate } from "react-router-dom";
import API from "/src/config/api";

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





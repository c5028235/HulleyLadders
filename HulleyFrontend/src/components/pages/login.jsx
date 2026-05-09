import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "/src/config/api";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {

      const res = await API.post("login/", {
        username,
        password
      });

      localStorage.setItem("token", res.data.access);

      const profile = await API.get("me/", {
        headers: {
          Authorization: `Bearer ${res.data.access}`
        }
      });

      if (profile.data.is_staff) {
        navigate("/admin");
      } else {
        navigate("/account");
      }

    } catch (error) {
      alert("Invalid login");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={loginUser}>
        Login
      </button>
    </div>
  );
}

export default Login;

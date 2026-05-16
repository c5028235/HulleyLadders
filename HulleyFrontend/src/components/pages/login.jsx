import { useState } from "react";
import { Link } from "react-router-dom";
import API from "/src/config/api";
import { useAuth } from "../../context/Authcontext";


function Login() {

  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const loginUser = async (e) => {

    e.preventDefault();

    login(
      formData.username,
      formData.password
    );
  };

  return (
    <section className="auth-page">

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to your account
        </p>

        <form onSubmit={loginUser}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <Link
          to="/forgot-password"
          className="forgot-link"
        >
          Forgot Password?
        </Link>

        <p className="auth-switch">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </section>
  );
}

export default Login;

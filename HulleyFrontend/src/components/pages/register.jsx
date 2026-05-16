import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "/src/config/api";
import { Link } from "react-router-dom";
import "/src/assets/css/authy.css";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPasword: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const registerUser = async (e) => {
        e.preventDefault();

        setError("");

        // PASSWORD CHECK
        if (
            formData.password !==
            formData.confirmPassword
        ) {

            setError("Passwords do not match");

            return;
        }

        try {

            await API.post("register/", {
                username: formData.username,
                email: formData.email,
                password: formData.password
            });

            alert("Account created!");

            navigate("/login");

        } catch (err) {
            console.log(err);
            setError("Registration failed");
        }
    };

    return (
        <section className="auth-page">

            <div className="auth-card">

                <h1>Create Account</h1>

                <p className="auth-subtitle">
                    Join Hulley Ladders
                </p>

                {error && (
                    <p className="auth-error">
                        {error}
                    </p>
                )}

                <form onSubmit={registerUser}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
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

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <p className="auth-switch">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </p>

            </div>

        </section>
    );
}

export default Register;
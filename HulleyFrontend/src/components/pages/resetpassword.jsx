import { useState } from "react";

import { useParams } from "react-router-dom";

import API from "../config/api";

import "../styles/auth.css";

function ResetPassword() {

    const { token } = useParams();

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (password !== confirmPassword) {

            alert("Passwords do not match");

            return;
        }

        try {

            await API.post(
                "password_reset/confirm/",
                {
                    password,
                    token
                }
            );

            setMessage(
                "Password updated successfully."
            );

        } catch (err) {

            console.log(err);
        }
    };

    return (

        <section className="auth-page">

            <div className="auth-card">

                <h1>Reset Password</h1>

                {message && (
                    <p className="auth-success">
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit}>

                    <input
                        type="password"
                        placeholder="New Password"
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        required
                    />

                    <button type="submit">
                        Reset Password
                    </button>

                </form>

            </div>

        </section>
    );
}

export default ResetPassword;
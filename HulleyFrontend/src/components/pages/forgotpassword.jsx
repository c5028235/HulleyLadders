import { useState } from "react";

import API from "../config/api";

import "../styles/auth.css";

function ForgotPassword() {

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post(
                "password_reset/",
                { email }
            );

            setMessage(
                "Password reset email sent."
            );

        } catch (err) {

            console.log(err);
        }
    };

    return (

        <section className="auth-page">

            <div className="auth-card">

                <h1>Forgot Password</h1>

                <p className="auth-subtitle">
                    Enter your email address
                </p>

                {message && (
                    <p className="auth-success">
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />

                    <button type="submit">
                        Send Reset Link
                    </button>

                </form>

            </div>

        </section>
    );
}

export default ForgotPassword;

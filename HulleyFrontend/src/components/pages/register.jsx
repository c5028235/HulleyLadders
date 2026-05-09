import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "/src/config/api";

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = async () => {
        try {

            await API.post("register/", {
                username,
                email,
                password
            });

            alert("Account created!");

            navigate("/login");

        } catch (err) {
            alert("Registration failed");
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <div className="register">
            <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={registerUser}>
                Register
            </button>
        </div>
    );
}

export default Register;
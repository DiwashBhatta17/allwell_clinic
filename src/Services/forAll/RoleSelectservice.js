import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import loginService from "./path-to-loginService";

function LoginForm() {
    const history = useHistory();
    const [formData, setFormData] = useState({ /* your form fields */ });

    const handleLogin = async () => {
        try {
            const response = await loginService(formData);
            // Assuming response contains accessToken and user role
            const { accessToken, user } = response;

            // Store token in SessionStorage or HTTP-only cookie
            sessionStorage.setItem("jwtToken", accessToken);

            // Redirect based on user's role
            if (user.role === "ROLE_PATIENT") {
                history.push("/patient-interface"); // Replace with your patient route
            } else if (user.role === "ROLE_DOCTOR") {
                history.push("/doctor-interface"); // Replace with your doctor route
            }
        } catch (error) {
            // Handle login error
        }
    };

    return (
        <></>
        // Your login form JSX
    );
}

export default LoginForm;

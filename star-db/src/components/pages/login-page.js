import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = ({ isLoggedIn, onLogin }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="jumbotron text-center">
            <p>You should login</p>
            <button className="btn btn-primary" onClick={onLogin}>Login</button>
        </div>
    );

}

export default LoginPage;
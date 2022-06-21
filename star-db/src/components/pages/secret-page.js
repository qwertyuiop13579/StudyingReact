import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SecretPage = ({ isLoggedIn }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);


    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center">
                <h3>This is a secret page!</h3>
            </div>
        );
    }

}

export default SecretPage;
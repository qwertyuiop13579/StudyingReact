import React from "react";

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">Error!</span>
            <span>Something went wrong!</span>
            <span>But we already working on it</span>
        </div>
    );
}

export default ErrorIndicator;
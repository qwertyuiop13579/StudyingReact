import React from "react";
import { useNavigate } from 'react-router-dom';

import ErrorBoundary from "../error-boundary";
import { StarshipList } from "../sw-components";

const StarshipsPage = () => {

    let navigate = useNavigate();

    const onItemSelected = (itemId) => {
        const newPath = `${itemId}`;
        navigate(newPath);
    };

    return (
        <ErrorBoundary>
            <StarshipList onItemSelected={onItemSelected} />
        </ErrorBoundary>
    );

}

export default StarshipsPage;
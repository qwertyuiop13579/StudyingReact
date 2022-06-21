import React from "react";
import { useNavigate, useParams } from 'react-router-dom';


import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { PersonList, PersonDetails } from "../sw-components";

const PeoplePage = () => {
    const params = useParams();
    const navigate = useNavigate();

    const onItemSelected = (id) => {
        const newPath = `/people/${id}`;
        navigate(newPath);
    }

    const PersonListLeft = <PersonList onItemSelected={onItemSelected}></PersonList>;
    const PersonDetailsRight = params.id ? <PersonDetails itemId={params.id}></PersonDetails> : null;

    return (
        <ErrorBoundary>
            <Row left={PersonListLeft} right={PersonDetailsRight} />
        </ErrorBoundary>
    );

}

export default PeoplePage;
import React from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { PersonList, PersonDetails } from "../sw-components";

import './people-page.css';
class PeoplePage extends React.Component {

    state = {
        selectedPersonId: null,
    }

    onPersonSelected = (id) => {
        this.setState({ selectedPersonId: id });
    }

    render() {

        const PersonListLeft = <PersonList onItemSelected={this.onPersonSelected}>{(i) => `${i.name} (${i.gender}, ${i.birthYear})`}</PersonList>;
        const PersonDetailsRight = <PersonDetails itemId={this.state.selectedPersonId}></PersonDetails>;

        return (
            <ErrorBoundary>
                <Row left={PersonListLeft} right={PersonDetailsRight} />
            </ErrorBoundary>
        );
    }
}

export default PeoplePage;
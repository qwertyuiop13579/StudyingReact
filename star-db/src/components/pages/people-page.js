import React from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { PersonList, PersonDetails } from "../sw-components";

class PeoplePage extends React.Component {

    state = {
        selectedItemId: null,
    }

    onItemSelected = (id) => {
        this.setState({ selectedItemId: id });
    }

    render() {

        const PersonListLeft = <PersonList onItemSelected={this.onItemSelected}></PersonList>;
        const PersonDetailsRight = <PersonDetails itemId={this.state.selectedItemId}></PersonDetails>;

        return (
            <ErrorBoundary>
                <Row left={PersonListLeft} right={PersonDetailsRight} />
            </ErrorBoundary>
        );
    }
}

export default PeoplePage;
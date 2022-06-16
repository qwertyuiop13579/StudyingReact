import React from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

import './people-page.css';

class PeoplePage extends React.Component {

    swapiService = new SwapiService();

    state = {
        selectedPersonId: null,
    }

    onPersonSelected = (id) => {
        this.setState({ selectedPersonId: id });
    }

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}
            </ItemList>
        );

        const personDetails = <PersonDetails personId={this.state.selectedPersonId} />

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundary>
        );
    }
}

export default PeoplePage;
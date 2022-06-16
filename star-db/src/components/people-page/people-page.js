import React from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";

import './people-page.css';

class PeoplePage extends React.Component {

    swapiService = new SwapiService();

    state = {
        selectedPersonId: null,
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    onPersonSelected = (id) => {
        this.setState({ selectedPersonId: id });
    }

    render() {

        if (this.state.hasError) return <ErrorIndicator />;

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`} />
        );

        const personDetails = <PersonDetails personId={this.state.selectedPersonId} />

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}

export default PeoplePage;
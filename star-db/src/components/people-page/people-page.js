import React from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

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

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPersonId} />
                </div>
            </div>
        );
    }
}

export default PeoplePage;
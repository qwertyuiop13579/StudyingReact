import React from "react";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

class App extends React.Component {

    swapiService = new SwapiService();

    state = {
        hasError: false,
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) return <ErrorIndicator />;

        return (
            <div className="stardb-app">
                <Header />
                <RandomPlanet />
                <PeoplePage />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem={(item) => item.name} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPersonId} />
                    </div>
                </div>


                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item) => item.name} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPersonId} />
                    </div>
                </div>

            </div>

        );
    }

}

export default App;
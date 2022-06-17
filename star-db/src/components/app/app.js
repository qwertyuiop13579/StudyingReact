import React from "react";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";
import { PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components/details";

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

                <PersonDetails itemId={10}></PersonDetails>
                <PlanetDetails itemId={10}></PlanetDetails>
                <StarshipDetails itemId={5}></StarshipDetails>

                <PersonList />
                <PlanetList />
                <StarshipList />

            </div>

        );
    }

}

export default App;
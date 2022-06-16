import React from "react";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page/people-page";
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

            </div>

        );
    }

}

export default App;
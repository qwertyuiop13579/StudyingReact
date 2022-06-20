import React from "react";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

class App extends React.Component {

    state = {
        hasError: false,
        swapiService: new SwapiService(),
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    onChangeService = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? SwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
        console.log('Change Service');
    }


    render() {
        if (this.state.hasError) return <ErrorIndicator />;

        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <div className="stardb-app">
                    <Header onChangeService={this.onChangeService} />
                    <RandomPlanet />
                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />
                </div>
            </SwapiServiceProvider>
        );
    }

}

export default App;
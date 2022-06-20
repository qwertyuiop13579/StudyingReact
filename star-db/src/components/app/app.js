import React from "react";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";
import { PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components";
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

                    <PersonDetails itemId={10}></PersonDetails>
                    <PlanetDetails itemId={10}></PlanetDetails>
                    <StarshipDetails itemId={5}></StarshipDetails>

                    <PersonList />
                    <PlanetList />
                    <StarshipList />
                </div>
            </SwapiServiceProvider>
        );
    }

}

export default App;
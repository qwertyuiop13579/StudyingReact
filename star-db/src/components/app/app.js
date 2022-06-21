import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from "../pages";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundary from "../error-boundary";
import { StarshipDetails } from "../sw-components";


class App extends React.Component {

    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false,
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    onLogin = () => {
        this.setState({ isLoggedIn: true });
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
        const { hasError, isLoggedIn } = this.state;

        if (hasError) return <ErrorIndicator />;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onChangeService={this.onChangeService} />
                            <RandomPlanet />
                            <Routes>
                                <Route path="/" element={<h2>Welcome to StarDB!</h2>}></Route>
                                <Route path="/people" element={<PeoplePage />}></Route>
                                <Route path="/people/:id" element={<PeoplePage />}></Route>
                                <Route path="/planets" element={<PlanetsPage />}></Route>
                                <Route path="/starships" element={<StarshipsPage />}></Route>
                                <Route path="/starships/:id" element={<StarshipDetails />}></Route>
                                <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />}></Route>
                                <Route path="/secret" element={<SecretPage isLoggedIn={isLoggedIn} />}></Route>
                            </Routes>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }

}

export default App;
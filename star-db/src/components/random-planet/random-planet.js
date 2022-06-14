import React from "react";

import SwapiService from '../../services/swapi-service';
import Spinner from "../spinner/spinner";

import './random-planet.css';

class RandomPlanet extends React.Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        isLoading: true,
    }

    // constructor() {
    //     super();
    //     this.updatePlanet();
    // }

    componentDidMount() {
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, isLoading: false });
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 10) + 1;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        const { planet, isLoading } = this.state;

        const spinner = isLoading ? <Spinner /> : null;
        const content = !isLoading ? <PlanetView planet={planet}></PlanetView> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
            </div>
        )
    }

}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <React.Fragment>
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default RandomPlanet;
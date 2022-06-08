import React from "react";

import './random-planet.css';

class RandomPlanet extends React.Component {

    render() {
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                    src="" alt="planet" />
                <div>
                    <h4>Name1</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>Population 1</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>rotationPeriod 1</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>diameter 1</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default RandomPlanet;
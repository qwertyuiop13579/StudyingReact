import React from 'react';

import ItemList from "../item-list";
import { WithData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = (Wrapped, func) => {
    return (props) => {
        return (
            <Wrapped {...props}>{func}</Wrapped>
        );
    };
}

const renderPerson = (i) => <span>{i.name} ({i.gender}, {i.birthYear})</span>;
const renderPlanet = (i) => <span>{i.name} (${i.population}, ${i.diameter})</span>;
const renderStarchip = (i) => <span>{i.name} (${i.model}, ${i.length})</span>;

const PersonList = WithData(withChildFunction(ItemList, renderPerson), getAllPeople);

const PlanetList = WithData(withChildFunction(ItemList, renderPlanet), getAllPlanets);

const StarshipList = WithData(withChildFunction(ItemList, renderStarchip), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}

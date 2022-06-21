import React from 'react';

import ItemList from "../item-list";
import { withData, withChild, withSwapiService, compose } from '../hoc-helpers';


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const renderPerson = (i) => <span>{i.name} ({i.gender}, {i.birthYear})</span>;
const renderPlanet = (i) => <span>{i.name} (${i.population}, ${i.diameter})</span>;
const renderStarship = (i) => <span>{i.name} (${i.model}, ${i.length})</span>;

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChild(renderPerson))
    (ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChild(renderPlanet))
    (ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChild(renderStarship))
    (ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}

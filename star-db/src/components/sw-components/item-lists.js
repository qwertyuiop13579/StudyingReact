import React from 'react';

import ItemList from "../item-list";
import { withData, withChild, withSwapiService } from '../hoc-helpers';


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
const renderStarchip = (i) => <span>{i.name} (${i.model}, ${i.length})</span>;

const PersonList = withSwapiService(withData(withChild(ItemList, renderPerson)), mapPersonMethodsToProps);

const PlanetList = withSwapiService(withData(withChild(ItemList, renderPlanet)), mapPlanetMethodsToProps);

const StarshipList = withSwapiService(withData(withChild(ItemList, renderStarchip)), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}

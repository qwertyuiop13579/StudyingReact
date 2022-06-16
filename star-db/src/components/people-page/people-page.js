import React from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { Record } from "../item-details/item-details";

import './people-page.css';

class PeoplePage extends React.Component {

    swapiService = new SwapiService();

    state = {
        selectedPersonId: null,
    }

    onPersonSelected = (id) => {
        this.setState({ selectedPersonId: id });
    }

    render() {

        const itemList1 = (
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}
            </ItemList>
        );
        const itemList2 = (
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}>
                {(i) => `${i.name} (${i.population}, ${i.diameter})`}
            </ItemList>
        );
        const itemList3 = (
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarships}>
                {(i) => `${i.name} (${i.model}, ${i.length})`}
            </ItemList>
        );

        const personDetails = <ItemDetails
            getData={this.swapiService.getPerson}
            getImageUrl={this.swapiService.getPersonImage}
            itemId={this.state.selectedPersonId}>
            <Record field="gender" label="Gender"></Record>
            <Record field="birthYear" label="Birth Year"></Record>
            <Record field="eyeColor" label="Eye Color"></Record>
        </ItemDetails>


        const planetDetails = <ItemDetails
            getData={this.swapiService.getPlanet}
            getImageUrl={this.swapiService.getPlanetImage}
            itemId={this.state.selectedPersonId} >
            <Record field="population" label="Population"></Record>
            <Record field="rotationPeriod" label="Rotation Period"></Record>
            <Record field="diameter" label="Diameter"></Record>
        </ItemDetails>


        const StarshipDetails = <ItemDetails
            getData={this.swapiService.getStarship}
            getImageUrl={this.swapiService.getStarshipImage}
            itemId={this.state.selectedPersonId} >
            <Record field="model" label="Model"></Record>
            <Record field="manufacturer" label="Manufacturer"></Record>
            <Record field="costInCredits" label="Cost In Credits"></Record>
            <Record field="length" label="Length"></Record>
            <Record field="crew" label="Crew"></Record>
            <Record field="passengers" label="Passengers"></Record>
            <Record field="cargoCapacity" label="Cargo Capacity"></Record>
        </ItemDetails>

        return (
            <ErrorBoundary>
                <Row left={itemList1} right={personDetails} />
                <Row left={itemList2} right={planetDetails} />
                <Row left={itemList3} right={StarshipDetails} />
            </ErrorBoundary>
        );
    }
}

export default PeoplePage;
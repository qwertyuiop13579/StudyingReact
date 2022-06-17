import React from "react";

import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {({ getPerson, getPersonImage }) => {
                return (
                    <ItemDetails
                        getData={getPerson}
                        getImageUrl={getPersonImage}
                        itemId={itemId}>
                        <Record field="gender" label="Gender"></Record>
                        <Record field="birthYear" label="Birth Year"></Record>
                        <Record field="eyeColor" label="Eye Color"></Record>
                    </ItemDetails>
                );
            }}
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {({ getPlanet, getPlanetImage }) => {
                return (
                    <ItemDetails
                        getData={getPlanet}
                        getImageUrl={getPlanetImage}
                        itemId={itemId} >
                        <Record field="population" label="Population"></Record>
                        <Record field="rotationPeriod" label="Rotation Period"></Record>
                        <Record field="diameter" label="Diameter"></Record>
                    </ItemDetails>
                );
            }}

        </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {({ getStarship, getStarshipImage }) => {
                return (
                    <ItemDetails
                        getData={getStarship}
                        getImageUrl={getStarshipImage}
                        itemId={itemId} >
                        <Record field="model" label="Model"></Record>
                        <Record field="manufacturer" label="Manufacturer"></Record>
                        <Record field="costInCredits" label="Cost In Credits"></Record>
                        <Record field="length" label="Length"></Record>
                        <Record field="crew" label="Crew"></Record>
                        <Record field="passengers" label="Passengers"></Record>
                        <Record field="cargoCapacity" label="Cargo Capacity"></Record>
                    </ItemDetails>
                );
            }}
        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}

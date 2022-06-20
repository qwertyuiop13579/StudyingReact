import React from "react";

import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { withSwapiService } from '../hoc-helpers';


const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model"></Record>
            <Record field="manufacturer" label="Manufacturer"></Record>
            <Record field="costInCredits" label="Cost In Credits"></Record>
            <Record field="length" label="Length"></Record>
            <Record field="crew" label="Crew"></Record>
            <Record field="passengers" label="Passengers"></Record>
            <Record field="cargoCapacity" label="Cargo Capacity"></Record>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    };
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);

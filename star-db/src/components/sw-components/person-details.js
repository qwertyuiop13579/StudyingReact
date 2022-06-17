import React from "react";

import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { withSwapiService } from '../hoc-helpers';


const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Gender"></Record>
            <Record field="birthYear" label="Birth Year"></Record>
            <Record field="eyeColor" label="Eye Color"></Record>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    };
}

export default withSwapiService(PersonDetails, mapMethodsToProps);

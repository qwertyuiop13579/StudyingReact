import React from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import './person-details.css';

class PersonDetails extends React.Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        isLoading: true,
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        this.setState({ isLoading: true });
        const { personId } = this.props;
        if (!personId) return;
        this.swapiService
            .getPerson(personId)
            .then(person => {
                this.setState({
                    person,
                    isLoading: false
                });
            });
    }

    render() {
        if (!this.state.person) {
            return <span>Select a person from list.</span>
        }

        const { person: { id, name, gender, birthYear, eyeColor }, isLoading } = this.state;

        if (isLoading) return <Spinner />;

        return (
            <div className="person-details card">
                <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person" />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default PersonDetails;
import React from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import './item-list.css';

class ItemList extends React.Component {

    swapeService = new SwapiService();

    state = {
        peopleList: null,
    }
    componentDidMount() {
        this.swapeService
            .getAllPeople()
            .then(peopleList => {
                this.setState({
                    peopleList
                });
            });

    }

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li className="list-group-item" key={id} onClick={() => this.props.onItemSelected(id)}>{name}</li>
            );
        })
    }

    onItemSelected = () => {
        console.log('Click');
    }


    render() {
        const { peopleList } = this.state;

        if (!peopleList) {
            return <Spinner />;
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>

        )
    }

}

export default ItemList;
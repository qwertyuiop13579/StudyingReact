import React from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import './item-list.css';

class ItemList extends React.Component {

    swapeService = new SwapiService();

    state = {
        ItemList: null,
    }

    componentDidMount() {

        const { getData } = this.props;
        getData().then(ItemList => {
            this.setState({ ItemList });
        });

    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.children(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}</li>
            );
        })
    }


    render() {
        const { ItemList } = this.state;

        if (!ItemList) {
            return <Spinner />;
        }

        const items = this.renderItems(ItemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>

        )
    }

}

export default ItemList;
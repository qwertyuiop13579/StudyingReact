import React from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import './item-details.css';

class ItemDetails extends React.Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null,
        isLoading: true,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem = () => {
        this.setState({ isLoading: true });
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) return;
        getData(itemId).then(item => {
            this.setState({
                item,
                image: getImageUrl(item),
                isLoading: false
            });
        });
    }

    render() {
        if (!this.state.item) {
            return <span>Select an item from list.</span>
        }

        const { item, isLoading, image } = this.state;

        if (isLoading) return <Spinner />;

        return (
            <div className="item-details card">
                <img className="item-image" src={image} alt="person" />

                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })}
                    </ul>
                </div>
            </div>
        )
    }

}

export const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
}

export default ItemDetails;
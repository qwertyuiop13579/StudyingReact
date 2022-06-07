import React from "react";

import './item-add-form.css';

export default class ItemAddForm extends React.Component {


    render() {

        const { AddItem } = this.props;
        return (
            <div className="item-add-form">
                <button onClick={() => AddItem('New Item')} type="button" className="btn btn-outline-secondary">
                    Add
                </button>
            </div>
        );
    }
}

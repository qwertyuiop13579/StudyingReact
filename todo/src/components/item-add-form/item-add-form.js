import React from "react";

import './item-add-form.css';

export default class ItemAddForm extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({ label: event.target.value });
    }

    onSubmit = (event) => {
        this.props.AddItem(this.state.label);
        event.preventDefault();
        this.setState({ label: '' });
    }

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text" className="form-control" onChange={this.onLabelChange} placeholder="What needs to done?"
                    value={this.state.label}></input>
                <button type="submit" className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        );
    }
}

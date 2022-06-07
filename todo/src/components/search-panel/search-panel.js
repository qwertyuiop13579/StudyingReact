import React from "react";

import './search-panel.css';

export default class SearchPanel extends React.Component {

    state = {
        term: ''
    }

    onChangeSearch = (event) => {
        const term = event.target.value;
        this.setState({ term });
        this.props.onChangeSearch(term);
    }

    render() {
        return (
            <input value={this.state.term} onChange={this.onChangeSearch} type="text" placeholder="Type to search" className="form-control search-input" ></input>
        );
    }
}
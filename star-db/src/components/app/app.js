import React from "react";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details'

class App extends React.Component {

    state = {
        selectedPersonId: null,
    }

    onPersonSelected = (id) => {
        this.setState({ selectedPersonId: id });
    }

    render() {
        return (
            <div className="stardb-app">
                <Header />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPersonId} />
                    </div>
                </div>
            </div>

        );
    }

}

export default App;
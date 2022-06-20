import React from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { PlanetList, PlanetDetails } from "../sw-components";

class PlanetsPage extends React.Component {

    state = {
        selectedItemId: null,
    }

    onItemSelected = (id) => {
        this.setState({ selectedItemId: id });
    }

    render() {

        const PlanetListLeft = <PlanetList onItemSelected={this.onItemSelected}></PlanetList>;
        const PlanetDetailsRight = <PlanetDetails itemId={this.state.selectedItemId}></PlanetDetails>;

        return (
            <ErrorBoundary>
                <Row left={PlanetListLeft} right={PlanetDetailsRight} />
            </ErrorBoundary>
        );
    }
}

export default PlanetsPage;
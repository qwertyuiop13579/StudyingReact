import React from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { StarshipList, StarshipDetails } from "../sw-components";

class StarshipsPage extends React.Component {

    state = {
        selectedItemId: null,
    }

    onItemSelected = (id) => {
        this.setState({ selectedItemId: id });
    }

    render() {

        const StarshipListLeft = <StarshipList onItemSelected={this.onItemSelected}></StarshipList>;
        const StarshipDetailsRight = <StarshipDetails itemId={this.state.selectedItemId}></StarshipDetails>;

        return (
            <ErrorBoundary>
                <Row left={StarshipListLeft} right={StarshipDetailsRight} />
            </ErrorBoundary>
        );
    }
}

export default StarshipsPage;
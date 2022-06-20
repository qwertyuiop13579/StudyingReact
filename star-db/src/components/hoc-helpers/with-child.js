import React from 'react';

const withChild = (func) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>{func}</Wrapped>
        );
    };
}

export default withChild;
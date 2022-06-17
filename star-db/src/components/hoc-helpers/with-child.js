import React from 'react';

const withChild = (Wrapped, func) => {
    return (props) => {
        return (
            <Wrapped {...props}>{func}</Wrapped>
        );
    };
}

export default withChild;
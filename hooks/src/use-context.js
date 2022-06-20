import React, { useContext } from 'react';

const MyContext = React.createContext();

const ContextProvider = () => {
    return (
        <MyContext.Provider value="Use UseContext">
            <Child></Child>
        </MyContext.Provider>
    );
}

const Child = () => {
    const value = useContext(MyContext);

    return (
        <div>
            {value}
        </div>
    );
}

export default ContextProvider;
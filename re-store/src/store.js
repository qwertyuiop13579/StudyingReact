import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const logMiddleware = ({ getState }) => (dispatch) => (action) => {
    console.log(action.type, getState());
    return dispatch(action);
}

const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action == 'string') {
        return dispatch({ type: action });
    }
    return dispatch(action);
}

const store = configureStore({ reducer: reducer, enhancers: [], middleware: [stringMiddleware, logMiddleware] });

export default store;
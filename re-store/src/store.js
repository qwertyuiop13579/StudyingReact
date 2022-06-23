import { configureStore } from '@reduxjs/toolkit';
import ThunkMiddleware from 'redux-thunk';
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

const store = configureStore({ reducer: reducer, enhancers: [], middleware: [ThunkMiddleware, stringMiddleware, logMiddleware] });

const myAction = (dispatch) => {
    setTimeout(() => {
        dispatch('Delayed Action');
    }, 2000)
}

const myActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => {
        dispatch('Delayed Action');
    }, timeout)
}

store.dispatch(myActionCreator(3000));

export default store;
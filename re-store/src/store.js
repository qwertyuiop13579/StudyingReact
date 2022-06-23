import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const stringEnhancer = (configureStore) => (...args) => {
    const store = configureStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        if (typeof action == 'string') {
            return originalDispatch({ type: action });
        }
        return originalDispatch(action);
    }
    return store;
}

const logEnhancer = (configureStore) => (...args) => {
    const store = configureStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        console.log(action.type);
        return originalDispatch(action);
    }
    return store;
}

const store = configureStore({ reducer: reducer, enhancers: [stringEnhancer, logEnhancer] });

store.dispatch('Hello');

export default store;
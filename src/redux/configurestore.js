import {createStore} from 'redux';
import {Reducer, initialState} from './reducer';

export const configurestore = () => {
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
}
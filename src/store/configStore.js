import { createStore } from 'redux'
import rootReducer from '../reducers'

const configStore = initialState => {
    const store = new createStore(rootReducer, initialState);

    return store;
}

export const store = new configStore();
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddelware} from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';


const store = createStore(rootReducer);

export default (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
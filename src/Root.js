import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddelware} from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';



export default (props) => {
    const {initialState = {}} = props;
const  store = createStore(rootReducer, initialState);

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
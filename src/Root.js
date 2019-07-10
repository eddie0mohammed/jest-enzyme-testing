import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';



export default (props) => {
    const {initialState = {}} = props;
const  store = createStore(rootReducer, initialState);

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
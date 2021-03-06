import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const commentsReducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.SAVE_COMMENT:
            return [...state, action.payload];

        default:
            return state;
    }
}

export default commentsReducer;
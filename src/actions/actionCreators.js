import * as actionTypes from './actionTypes';

export const saveComment = (comment) => {

    return {
        type: actionTypes.SAVE_COMMENT,
        payload: comment
    }

}
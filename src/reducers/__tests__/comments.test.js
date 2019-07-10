import commentsReducer from '../commentsReducer';
import * as actionTypes from '../../actions/actionTypes';

it ('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: actionTypes.SAVE_COMMENT,
        payload: 'New Comment'
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
})

it ('handles action of unknown types', () => {
    const newState = commentsReducer([], {});  /* {} OR {type: 'asdasdad'}*/
    expect(newState).toEqual([]);
})

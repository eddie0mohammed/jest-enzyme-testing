import * as actionCreators from '../actionCreators';
import * as actionTypes from '../actionTypes';

describe(actionCreators.saveComment, () => {
    it('has the correct type', () => {
        const action = actionCreators.saveComment();

        expect(action.type).toEqual(actionTypes.SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const action = actionCreators.saveComment('new commet');

        expect(action.payload).toEqual('new commet');
    });
})
import React from 'react';

import CommentBox from '../CommentBox';
import { mount } from 'enzyme';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
})

afterEach(() => {
    wrapped.unmount();
})

it('has a textarea and a button', () => {

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});


describe('textarea tests', () => {
    beforeEach( () => {
        wrapped.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        });
        
        wrapped.update();
    })

    it('has a textarea which responds to changes', () => {

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it ('textarea is empty when submit', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        wrapped.find('form').simulate('submit');

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })


});
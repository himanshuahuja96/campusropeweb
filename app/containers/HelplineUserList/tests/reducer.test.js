import { fromJS } from 'immutable';
import helplineUserListReducer from '../reducer';

describe('helplineUserListReducer', () => {
  it('returns the initial state', () => {
    expect(helplineUserListReducer(undefined, {})).toEqual(fromJS({}));
  });
});

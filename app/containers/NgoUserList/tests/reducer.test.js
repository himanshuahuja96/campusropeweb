import { fromJS } from 'immutable';
import ngoUserListReducer from '../reducer';

describe('ngoUserListReducer', () => {
  it('returns the initial state', () => {
    expect(ngoUserListReducer(undefined, {})).toEqual(fromJS({}));
  });
});

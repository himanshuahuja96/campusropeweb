import { fromJS } from 'immutable';
import myNgosReducer from '../reducer';

describe('myNgosReducer', () => {
  it('returns the initial state', () => {
    expect(myNgosReducer(undefined, {})).toEqual(fromJS({}));
  });
});

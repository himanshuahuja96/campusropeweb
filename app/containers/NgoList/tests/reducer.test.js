import { fromJS } from 'immutable';
import ngoListReducer from '../reducer';

describe('ngoListReducer', () => {
  it('returns the initial state', () => {
    expect(ngoListReducer(undefined, {})).toEqual(fromJS({}));
  });
});

import { fromJS } from 'immutable';
import aboutUserReducer from '../reducer';

describe('aboutUserReducer', () => {
  it('returns the initial state', () => {
    expect(aboutUserReducer(undefined, {})).toEqual(fromJS({}));
  });
});

import { fromJS } from 'immutable';
import ngoAddReducer from '../reducer';

describe('ngoAddReducer', () => {
  it('returns the initial state', () => {
    expect(ngoAddReducer(undefined, {})).toEqual(fromJS({}));
  });
});

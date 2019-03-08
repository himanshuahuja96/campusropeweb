import { fromJS } from 'immutable';
import ngoViewReducer from '../reducer';

describe('ngoViewReducer', () => {
  it('returns the initial state', () => {
    expect(ngoViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});

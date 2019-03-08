import { fromJS } from 'immutable';
import ngoEditReducer from '../reducer';

describe('ngoEditReducer', () => {
  it('returns the initial state', () => {
    expect(ngoEditReducer(undefined, {})).toEqual(fromJS({}));
  });
});

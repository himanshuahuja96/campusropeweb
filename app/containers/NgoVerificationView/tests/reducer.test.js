import { fromJS } from 'immutable';
import ngoVerificationViewReducer from '../reducer';

describe('ngoVerificationViewReducer', () => {
  it('returns the initial state', () => {
    expect(ngoVerificationViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});

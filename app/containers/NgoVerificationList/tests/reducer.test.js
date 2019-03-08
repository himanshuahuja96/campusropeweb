import { fromJS } from 'immutable';
import ngoVerificationListReducer from '../reducer';

describe('ngoVerificationListReducer', () => {
  it('returns the initial state', () => {
    expect(ngoVerificationListReducer(undefined, {})).toEqual(fromJS({}));
  });
});

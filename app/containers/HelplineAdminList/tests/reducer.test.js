import { fromJS } from 'immutable';
import helplineAdminListReducer from '../reducer';

describe('helplineAdminListReducer', () => {
  it('returns the initial state', () => {
    expect(helplineAdminListReducer(undefined, {})).toEqual(fromJS({}));
  });
});

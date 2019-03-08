import { fromJS } from 'immutable';
import helplineAddReducer from '../reducer';

describe('helplineAddReducer', () => {
  it('returns the initial state', () => {
    expect(helplineAddReducer(undefined, {})).toEqual(fromJS({}));
  });
});

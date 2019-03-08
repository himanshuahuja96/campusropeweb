import { fromJS } from 'immutable';
import helplineEditReducer from '../reducer';

describe('helplineEditReducer', () => {
  it('returns the initial state', () => {
    expect(helplineEditReducer(undefined, {})).toEqual(fromJS({}));
  });
});

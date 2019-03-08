import { fromJS } from 'immutable';
import helplineViewReducer from '../reducer';

describe('helplineViewReducer', () => {
  it('returns the initial state', () => {
    expect(helplineViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});

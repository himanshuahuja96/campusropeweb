import guestHomeReducer from '../reducer';

describe('guestHomeReducer', () => {
  it('returns the initial state', () => {
    expect(guestHomeReducer(undefined, {})).toEqual({});
  });
});

import { createSelector } from 'reselect';

/**
 * Direct selector to the adminTask state domain
 */

export const selectAdminTaskDomain = state => {
  return state.adminTask
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by AdminTask
 */

const makeSelectAdminTask = () =>
  createSelector(selectAdminTaskDomain, substate => {
    return substate.tasks
  });

const makeSelectSelectedAdminTask = () =>
  createSelector(selectAdminTaskDomain, state =>
    state.tasks.filter(task => task.selected),
  );

export default makeSelectAdminTask;
export { makeSelectAdminTask, makeSelectSelectedAdminTask };

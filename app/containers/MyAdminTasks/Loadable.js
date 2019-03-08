/**
 *
 * Asynchronously loads the component for MyAdminTasks
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

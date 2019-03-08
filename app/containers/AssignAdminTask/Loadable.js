/**
 *
 * Asynchronously loads the component for AdminTask
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

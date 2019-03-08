/**
 *
 * Asynchronously loads the component for Drawer
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

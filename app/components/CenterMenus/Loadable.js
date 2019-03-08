/**
 *
 * Asynchronously loads the component for CenterMenus
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
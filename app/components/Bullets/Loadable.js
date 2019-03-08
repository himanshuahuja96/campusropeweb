/**
 *
 * Asynchronously loads the component for Bullets
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
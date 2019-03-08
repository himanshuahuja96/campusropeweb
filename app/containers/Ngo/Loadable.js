/**
 *
 * Asynchronously loads the component for Ngo
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
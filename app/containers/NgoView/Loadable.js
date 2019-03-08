/**
 *
 * Asynchronously loads the component for NgoView
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

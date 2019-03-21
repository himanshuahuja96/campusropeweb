/**
 *
 * Asynchronously loads the component for NgoForm
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

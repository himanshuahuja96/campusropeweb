/**
 *
 * Asynchronously loads the component for NgoEdit
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

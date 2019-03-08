/**
 *
 * Asynchronously loads the component for DynamicList
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

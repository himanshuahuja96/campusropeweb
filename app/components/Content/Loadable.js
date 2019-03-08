/**
 *
 * Asynchronously loads the component for Content
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
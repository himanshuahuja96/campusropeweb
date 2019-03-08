/**
 *
 * Asynchronously loads the component for UserProfile
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
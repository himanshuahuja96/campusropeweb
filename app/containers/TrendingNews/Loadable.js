/**
 *
 * Asynchronously loads the component for TrendingNews
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

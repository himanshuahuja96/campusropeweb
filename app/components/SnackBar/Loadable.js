/**
 *
 * Asynchronously loads the component for SnackBar
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

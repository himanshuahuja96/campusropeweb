/**
 *
 * Asynchronously loads the component for MyNgos
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

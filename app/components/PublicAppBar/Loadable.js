/**
 * Asynchronously loads the component for AppBar
 */
import loadable from 'loadable-components';

export default loadable(() => import('./index'));

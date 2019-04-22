/**
 * Asynchronously loads the component for NewAppBar
 */
import loadable from 'loadable-components';

export default loadable(() => import('./index'));

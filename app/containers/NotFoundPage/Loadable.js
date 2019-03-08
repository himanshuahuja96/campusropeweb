/**
 * Asynchronously loads the component for NotFoundPage
 */
import Loadable from 'loadable-components';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

/**
 *
 * Asynchronously loads the component for Login
 *
 */

import Loadable from 'loadable-components';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

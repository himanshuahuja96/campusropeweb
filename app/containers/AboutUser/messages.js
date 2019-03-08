/*
 * AboutUser Messages
 *
 * This contains all the text for the AboutUser container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AboutUser';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AboutUser container!',
  },
});

import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorSnackbar from '.';

const stories = storiesOf('Error Snackbar', module);

stories.add('default', () => (
  <ErrorSnackbar message="Opps... Something went wrong." />
));

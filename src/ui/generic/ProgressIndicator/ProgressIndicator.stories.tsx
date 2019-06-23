import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgressIndicator from '.';

const stories = storiesOf('Progress Indicator', module);

stories.add('default', () => <ProgressIndicator />);

import React from 'react';
import { storiesOf } from '@storybook/react';

import Counter from '.';

const stories = storiesOf('Counter', module);

stories.add('default', () => <Counter />);

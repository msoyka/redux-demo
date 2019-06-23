import React from 'react';
import { storiesOf } from '@storybook/react';

import withReduxProvider from 'util/storybook/decorators/withReduxProvider';

import ProfileLoginButtons from '.';

const stories = storiesOf('Profile Login Buttons', module);
stories.addDecorator(withReduxProvider);
stories.add('default', () => <ProfileLoginButtons />);

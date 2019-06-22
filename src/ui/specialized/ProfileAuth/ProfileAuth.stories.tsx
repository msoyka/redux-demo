import React from 'react';
import { storiesOf } from '@storybook/react';

import withReduxProvider from 'storybook/decorators/withReduxProvider';

import ProfileAuth from '.';

const stories = storiesOf('Profile Auth', module);
stories.addDecorator(withReduxProvider);
stories.add('default', () => <ProfileAuth />);

// storiesOf('Button', module)
//   .addDecorator(withProvider)
//   .add('default', () => (
//     <Button>Submit</Button>
//   ))

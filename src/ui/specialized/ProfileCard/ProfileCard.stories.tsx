import React from 'react';
import { storiesOf } from '@storybook/react';

import ProfileCard from '.';

const mockProfile = {
  username: 'jyoung',
  firstName: 'James',
  lastName: 'Young',
  avatarURL: 'https://source.unsplash.com/MTZTGvDsHFY/500x500',
};

const stories = storiesOf('Profile Card', module);

stories.add('default', () => <ProfileCard profile={mockProfile} />);

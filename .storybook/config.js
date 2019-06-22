import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import unfiTheme from './unfiTheme';

const req = require.context('../src', true, /\.stories\.tsx$/);

 // Option defaults.
 addParameters({
  options: {
    theme: unfiTheme,
  },
});

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
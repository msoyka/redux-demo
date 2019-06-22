import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#6ab445',
  colorSecondary: '#6ab445',
  
  // UI
  appContentBg: '#dceed3',
  appBorderColor: '#6ab445',

  // Toolbar default and active colors
  barTextColor: '#63544f',
  barBg: '#b9dda6',

  brandTitle: 'UNFI storybook',
  brandImage: 'https://www.unfi.com/sites/default/files/unfi_logo.png',
});
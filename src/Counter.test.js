import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Counter from './Counter';

afterEach(cleanup);

test('<Counter/>', () => {
  const { debug, getByTestId } = render(<Counter />);
  const counterButton = getByTestId('counter');

  // debug();

  expect(counterButton.tagName).toBe('BUTTON');
  expect(counterButton.textContent).toBe('0');
  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('1');
});

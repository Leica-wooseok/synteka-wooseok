import type { Preview } from '@storybook/react-webpack5';

export const decorators = [
];

const preview: Preview = {
  parameters: {
    a11y: {
      element: '#root',
      manual: false,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#000' },
        light: { name: 'Light', value: '#fff' },
      },
    },
  },
  decorators,
};

export default preview;

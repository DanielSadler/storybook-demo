import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

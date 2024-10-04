import type { Meta, StoryObj } from '@storybook/react';
import { Product } from './Product';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta = {
  title: 'Example/Organisms/Product',
  component: Product,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
  },
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    imageSources: [
      'https://media.currys.biz/i/currysprod/10271430_002?$l-large$&fmt=auto',
      'https://media.currys.biz/i/currysprod/10271430_006?$l-large$&fmt=auto',
      'https://media.currys.biz/i/currysprod/10271430_009?$l-large$&fmt=auto',
      'https://media.currys.biz/i/currysprod/10271430_005?$l-large$&fmt=auto',
    ],
    productDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    productId: '1',
    productPrice: '24.99',
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    imageSources: [
      'https://media.currys.biz/i/currysprod/10271430_002?$l-large$&fmt=auto',
      'https://media.currys.biz/i/currysprod/10271430_006?$l-large$&fmt=auto',
      'https://media.currys.biz/i/currysprod/10271430_009?$l-large$&fmt=auto',
      'https://media.currys.biz/i/currysprod/10271430_005?$l-large$&fmt=auto',
    ],
    productDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    productId: '1',
    productPrice: '24.99',
  },
};

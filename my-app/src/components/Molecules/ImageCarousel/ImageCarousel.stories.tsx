import type { Meta, StoryObj } from '@storybook/react';
import { ImageCarousel } from './ImageCarousel';

const meta = {
  title: 'Example/Molecules/ImageCarousel',
  component: ImageCarousel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof ImageCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    imageSources: [
      'https://media.currys.biz/i/currysprod/10271430_002?$l-large$&fmt=auto',
      'https://media.currys.biz/i/currysprod/10271430_006?$l-large$&fmt=auto',
      'https://media.currys.biz/i/currysprod/10271430_009?$l-large$&fmt=auto',
      'https://media.currys.biz/i/currysprod/10271430_005?$l-large$&fmt=auto',
    ],
  },
};

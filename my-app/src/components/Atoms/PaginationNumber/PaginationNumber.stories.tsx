import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PaginationNumber from './PaginationNumber';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta = {
  title: 'Example/Atoms/PaginationNumber',
  component: PaginationNumber,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/gJKlp5MQxU0nYW46YEQNi4/Untitled?node-id=2-45&t=T5AXxHxs9SshLmrN-0',
    },
    backgrounds: {
      default: {
        name: 'default',
        value: '#6B686B',
      },
      values: [
        { name: 'default', value: '#6B686B' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'blue', value: '#0000FF' },
      ],
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    isSelected: { control: 'boolean' },
    number: { control: 'number' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof PaginationNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
export const Selected: Story = {
  args: {
    isSelected: true,
  },
};

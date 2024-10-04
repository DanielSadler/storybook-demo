import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta = {
  title: 'Example/Atoms/Button',
  component: Button,
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
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    primary: true,
  },
};

export const SmallSecondary: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const AllButtons: Story = {
  render: (args) => (
    <div className="space-x-8 flex flex-row">
      <div className="flex flex-col space-y-4">
        <h1>Normal</h1>
        <div className="flex flex-col space-y-8">
          <Button label="Button" primary={true} id="one" />
          <Button label="Button" id="two" />
          <Button label="Button" primary={true} size="small" id="three" />
          <Button label="Button" size="small" id="four" />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h1>Hover</h1>
        <div className="flex flex-col space-y-8">
          <Button label="Button" primary={true} id="five" />
          <Button label="Button" id="six" />
          <Button label="Button" primary={true} size="small" id="seven" />
          <Button label="Button" size="small" id="eight" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    pseudo: {
      hover: ['#five', '#six', '#seven', '#eight'],
    },
  },
};

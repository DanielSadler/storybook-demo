import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { userEvent, within, expect } from '@storybook/test';

const meta: Meta = {
  title: 'Example/Atoms/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: {
        name: 'default',
        value: '#6B686B',
      },
    },
  },

  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    correct: { control: 'boolean' },
    type: { control: 'select' },
  },
  args: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Email',
    placeholder: 'daniel@contic.co.uk',
    correct: false,
  },
};

export const NoLabel: Story = {
  args: {
    label: '',
  },
};

export const NoLabelWithPlaceholder: Story = {
  args: {
    label: '',
    placeholder: 'Enter text...',
  },
};

export const NoLabelWithError: Story = {
  args: {
    label: '',
    error: 'This field is required.',
  },
};

export const NoLabelWithCorrect: Story = {
  args: {
    label: '',
    correct: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
  },
};

export const WithLabelAndPlaceholder: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username...',
  },
};

export const WithLabelAndError: Story = {
  args: {
    label: 'Username',
    error: 'Username is required.',
  },
};

export const WithLabelAndCorrect: Story = {
  args: {
    label: 'Username',
    correct: true,
  },
};

export const FocusedStateTest: Story = {
  args: {
    label: 'Focused Input',
    placeholder: 'Focus me!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText('Focus me!');
    userEvent.click(input);
  },
};

export const FocusedState: Story = {
  args: {
    label: 'Focused',
    placeholder: 'I am focused!',
  },

  parameters: {
    pseudo: {
      focusWithin: true,
    },
  },
};

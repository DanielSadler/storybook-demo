import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { userEvent, within, expect } from '@storybook/test';

const meta = {
  title: 'Example/Molecules/LoginForm',
  component: LoginForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const MissingEmailAndPassword: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click the submit button without filling any fields
    await userEvent.click(canvas.getByRole('button', { name: /log in/i }));

    // Assert that both email and password validation errors appear
    await expect(canvas.getByText('Email is required')).toBeInTheDocument();
    await expect(canvas.getByText('Password is required')).toBeInTheDocument();
  },
};

// Missing Email Test Case
export const MissingEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Fill only the password input
    await userEvent.type(canvas.getByTestId('password'), 'password123');

    // Click the submit button
    await userEvent.click(canvas.getByRole('button', { name: /log in/i }));

    // Assert that the email validation error appears
    await expect(canvas.getByText('Email is required')).toBeInTheDocument();
  },
};

// Missing Password Test Case
export const MissingPassword: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Fill only the email input
    await userEvent.type(canvas.getByTestId('email'), 'test@example.com');

    // Click the submit button
    await userEvent.click(canvas.getByRole('button', { name: /log in/i }));

    // Assert that the password validation error appears
    await expect(canvas.getByText('Password is required')).toBeInTheDocument();
  },
};

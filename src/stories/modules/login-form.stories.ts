import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '../../components/modules/login-form';
import { fn } from '@storybook/test';

const meta = {
  title: 'Modules/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  args: { onSubmit: fn() },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DisabledLogin: Story = {
  args: { disableLogin: true },
};

export const WithError: Story = {
  args: { error: 'There is an error' },
};

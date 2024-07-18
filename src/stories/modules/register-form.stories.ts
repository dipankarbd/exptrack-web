import type { Meta, StoryObj } from '@storybook/react';
import { RegisterForm } from '../../components/modules/register-form';
import { fn } from '@storybook/test';

const meta = {
  title: 'Modules/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  args: { onSubmit: fn() },
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DisabledLogin: Story = {
  args: { disableRegister: true },
};

export const WithError: Story = {
  args: { error: 'There is an error' },
};

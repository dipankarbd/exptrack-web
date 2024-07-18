import type { Meta, StoryObj } from '@storybook/react';
import { LoginContainer } from '../../components/layouts/login-container';

const meta = {
  title: 'layouts/LoginContainer',
  component: LoginContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Content goes here</div>,
  },
};

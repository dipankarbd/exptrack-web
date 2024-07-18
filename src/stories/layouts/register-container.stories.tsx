import type { Meta, StoryObj } from '@storybook/react';
import { RegisterContainer } from '../../components/layouts/register-container';

const meta = {
  title: 'layouts/RegisterContainer',
  component: RegisterContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Content goes here</div>,
  },
};

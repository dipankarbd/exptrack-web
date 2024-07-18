import type { Meta, StoryObj } from '@storybook/react';
import { RootContainer } from '../../components/layouts/root-container';

const meta = {
  title: 'layouts/RootContainer',
  component: RootContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof RootContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sidebar: <div>Sidebar goes here</div>,
    content: <div>Content goes here</div>,
  },
};

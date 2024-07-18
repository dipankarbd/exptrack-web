import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '../../components/modules/sidebar';
import { fn } from '@storybook/test';

const meta = {
  title: 'Modules/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: { onLogout: fn() },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

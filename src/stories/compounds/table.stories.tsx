import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../components/compounds/table';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Compounds/Table',
  component: Table,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerTitles: ['Header 1', 'Header 2'],
    rows: [
      { key: 1, items: [1, 2] },
      { key: 2, items: [3, 4] },
    ],
  },
};

export const WithActions: Story = {
  args: {
    headerTitles: ['Header 1', 'Header 2', ''],
    rows: [
      {
        key: 1,
        items: [1, 2],
        actions: [
          { title: 'Test1', to: '/sdfw/wfwe' },
          { title: 'ssdg', to: '/sdfw/wfwsdgse' },
        ],
      },
      {
        key: 2,
        items: [3, 4],
        actions: [
          { title: 'Test1', to: '/sdfw/wfwe' },
          { title: 'ssdg', to: '/sdfw/wfwsdgse' },
        ],
      },
    ],
  },
};

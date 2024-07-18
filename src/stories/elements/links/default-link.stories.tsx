import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { DefaultLink } from '../../../components/elements/links/default-link';

const meta = {
  title: 'Elements/Links/DefaultLink',
  component: DefaultLink,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof DefaultLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    title: 'Create User',
    to: '/users/register',
  },
};

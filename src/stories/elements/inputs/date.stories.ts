import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from '../../../components/elements/inputs/date';

const meta = {
  title: 'Elements/Inputs/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
  },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'date1',
  },
};

export const Disabled: Story = {
  args: {
    name: 'date1',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    name: 'date1',
    value: '2000-01-01',
  },
};

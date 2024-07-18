import type { Meta, StoryObj } from '@storybook/react';
import { SelectInput } from '../../../components/elements/inputs/select';

const meta = {
  title: 'Elements/Inputs/SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
  },
  args: {
    items: [
      { text: 'Item 1', value: 'item1' },
      { text: 'Item 2', value: 'item2' },
    ],
  },
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'text1',
  },
};

export const Disabled: Story = {
  args: {
    name: 'text1',
    disabled: true,
  },
};

export const Selected: Story = {
  args: {
    name: 'text1',
    value: 'item2',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { NumberTextInput } from '../../../components/elements/inputs/number';

const meta = {
  title: 'Elements/Inputs/NumberTextInput',
  component: NumberTextInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
  },
} satisfies Meta<typeof NumberTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'text1',
  },
};

export const Disabled: Story = {
  args: {
    name: 'text1 disabled',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    name: 'text1',
    value: 15,
  },
};

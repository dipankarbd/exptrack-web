import type { Meta, StoryObj } from '@storybook/react';
import { DefaultTextInput } from '../../../components/elements/inputs/default-text';

const meta = {
  title: 'Elements/Inputs/DefaultTextInput',
  component: DefaultTextInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
    secured: { type: 'boolean' },
  },
} satisfies Meta<typeof DefaultTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'text1',
    placeholder: 'enter text 1',
  },
};

export const Disabled: Story = {
  args: {
    name: 'text1 disabled',
    placeholder: 'enter text 1',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    name: 'text1',
    placeholder: 'enter text 1',
    error: 'inbalid',
  },
};

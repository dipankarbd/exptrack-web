import type { Meta, StoryObj } from '@storybook/react';
import { FormSelectField } from '../../components/compounds/form-select-field';

const meta = {
  title: 'Compounds/FormSelectField',
  component: FormSelectField,
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
} satisfies Meta<typeof FormSelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Account',
    name: 'account',
  },
};

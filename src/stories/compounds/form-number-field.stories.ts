import type { Meta, StoryObj } from '@storybook/react';
import { FormNumberField } from '../../components/compounds/form-number-field';

const meta = {
  title: 'Compounds/FormNumberField',
  component: FormNumberField,
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
  },
} satisfies Meta<typeof FormNumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Amount',
    name: 'amount1',
  },
};

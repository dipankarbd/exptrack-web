import type { Meta, StoryObj } from '@storybook/react';
import { FormDateField } from '../../components/compounds/form-date-field';

const meta = {
  title: 'Compounds/FormDateField',
  component: FormDateField,
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
  },
} satisfies Meta<typeof FormDateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Date',
    name: 'date1',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { FormTextField } from '../../components/compounds/form-text-field';

const meta = {
  title: 'Compounds/FormTextField',
  component: FormTextField,
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
    secured: { type: 'boolean' },
  },
} satisfies Meta<typeof FormTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    name: 'text1',
    placeholder: 'enter text 1',
  },
};

export const Secured: Story = {
  args: {
    label: 'Password',
    name: 'password1',
    placeholder: 'enter password',
    secured: true,
  },
};

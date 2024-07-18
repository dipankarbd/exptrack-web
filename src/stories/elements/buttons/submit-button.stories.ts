import type { Meta, StoryObj } from '@storybook/react';
import { SubmitButton } from '../../../components/elements/buttons/submit-button';

const meta = {
  title: 'Elements/Buttons/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Submit: Story = {
  args: {
    value: 'Input Submit',
  },
};

export const SubmitDisabled: Story = {
  args: {
    value: 'Disabled Input Submit',
    disabled: true,
  },
};

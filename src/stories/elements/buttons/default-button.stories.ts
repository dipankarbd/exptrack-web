import type { Meta, StoryObj } from '@storybook/react';
import { DefaultButton } from '../../../components/elements/buttons/default-button';
import { fn } from '@storybook/test';

const meta = {
  title: 'Elements/Buttons/DefaultButton',
  component: DefaultButton,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost', 'danger'],
      control: { type: 'radio' },
    },
    disabled: { type: 'boolean' },
  },
} satisfies Meta<typeof DefaultButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Primary button',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    title: 'Primary disabled button',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary button',
    variant: 'secondary',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    title: 'Secondary disabled button',
    variant: 'secondary',
    disabled: true,
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger button',
    variant: 'danger',
  },
};

export const DangerDisabled: Story = {
  args: {
    title: 'Danger disabled button',
    variant: 'secondary',
    disabled: true,
  },
};

export const Ghost: Story = {
  args: {
    title: 'Ghost button',
    variant: 'ghost',
  },
};

export const GhostDisabled: Story = {
  args: {
    title: 'Ghost disabled button',
    variant: 'ghost',
    disabled: true,
  },
};

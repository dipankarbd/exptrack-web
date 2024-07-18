import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '../../../components/elements/buttons/link-button';
import { fn } from '@storybook/test';

const meta = {
  title: 'Elements/Buttons/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    disabled: { type: 'boolean' },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Link button',
  },
};

export const DefaultDisabled: Story = {
  args: {
    title: 'Link button disabled',
    disabled: true,
  },
};

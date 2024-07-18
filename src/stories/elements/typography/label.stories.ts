import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../../components/elements/typography/label';

const meta = {
  title: 'Elements/Typography/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is a default text',
  },
};

export const Red: Story = {
  args: {
    text: 'This is a red text',
    color: 'red',
  },
};

export const DefaultWithName: Story = {
  args: {
    text: 'This is a default text',
    name: 'myinput',
  },
};

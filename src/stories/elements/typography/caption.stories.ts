import type { Meta, StoryObj } from '@storybook/react';
import { Caption } from '../../../components/elements/typography/caption';

const meta = {
  title: 'Elements/Typography/Caption',
  component: Caption,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is a default caption text',
  },
};

export const Red: Story = {
  args: {
    text: 'This is a red  caption text',
    color: 'red',
  },
};

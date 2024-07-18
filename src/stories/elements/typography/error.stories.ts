import type { Meta, StoryObj } from '@storybook/react';
import { ErrorText } from '../../../components/elements/typography/error';

const meta = {
  title: 'Elements/Typography/ErrorText',
  component: ErrorText,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is a error text',
  },
};

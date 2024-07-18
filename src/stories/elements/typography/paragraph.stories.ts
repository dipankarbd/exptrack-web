import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../../../components/elements/typography/paragraph';

const meta = {
  title: 'Elements/Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'short', 'long'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is a default text for paragraph',
  },
};

export const Short: Story = {
  args: {
    text: 'This is a default text for short paragraph',
    variant: 'short',
  },
};

export const Long: Story = {
  args: {
    text: 'This is a default text for  long paragraph, This is a default text for  long paragraph, This is a default text for  long paragraph',
    variant: 'long',
  },
};

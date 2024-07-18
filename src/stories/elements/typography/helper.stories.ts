import type { Meta, StoryObj } from '@storybook/react';
import { HelperText } from '../../../components/elements/typography/helper';

const meta = {
  title: 'Elements/Typography/HelperText',
  component: HelperText,
  tags: ['autodocs'],
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is a helper text',
  },
};

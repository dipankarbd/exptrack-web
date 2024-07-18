import type { Meta, StoryObj } from '@storybook/react';
import { CaptionedText } from '../../components/compounds/captioned-text';

const meta = {
  title: 'Compounds/CaptionedText',
  component: CaptionedText,
  tags: ['autodocs'],
} satisfies Meta<typeof CaptionedText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: 'Email',
    text: 'text1',
  },
};

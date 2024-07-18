import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../../components/elements/typography/heading';

const meta = {
  title: 'Elements/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'small',
        'midum',
        'large',
        'xl',
        'xxl',
        'light-xl',
        'light-xxl',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    text: 'This is a small heading',
    variant: 'small',
  },
};

export const Midum: Story = {
  args: {
    text: 'This is a medium heading',
    variant: 'midum',
  },
};

export const Large: Story = {
  args: {
    text: 'This is a large heading',
    variant: 'large',
  },
};

export const XL: Story = {
  args: {
    text: 'This is an extra-large heading',
    variant: 'xl',
  },
};

export const XXL: Story = {
  args: {
    text: 'This is a double extra-large heading',
    variant: 'xxl',
  },
};

export const LightXL: Story = {
  args: {
    text: 'This is a light extra-large heading',
    variant: 'light-xl',
  },
};

export const LightXXL: Story = {
  args: {
    text: 'This is a light double extra-large heading',
    variant: 'light-xxl',
  },
};

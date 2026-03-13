import type { Meta, StoryObj } from '@storybook/nextjs';

import Main from '.';

const meta: Meta<typeof Main> = {
  component: Main,
  title: 'Main',
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Default: Story = {};

export const Custom: Story = {
  args: {
    title: 'Custom Title',
    description: 'Custom Description',
  },
};

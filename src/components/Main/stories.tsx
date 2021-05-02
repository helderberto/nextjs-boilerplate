import { Story, Meta } from '@storybook/react'

import Main from '.'

export default {
  component: Main,
  title: 'Main',
  args: {
    title: 'Test Title',
    description: 'Test Description',
  },
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Basic Title',
  description: 'Basic Description',
}

export const Default: Story = (args) => <Main {...args} />

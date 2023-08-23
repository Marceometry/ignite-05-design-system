import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Components/Box',
  component: Box,
  args: {
    children: <span>Elemento Box</span>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

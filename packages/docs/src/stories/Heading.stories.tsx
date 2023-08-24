import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@marceometry-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Elemento Título',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Título h1',
    as: 'h1',
  },
}

import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@marceometry-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Elemento Texto',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Texto Negrito',
    as: 'strong',
  },
}

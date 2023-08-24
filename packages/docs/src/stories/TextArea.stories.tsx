import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@marceometry-ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Observações...',
  },
  decorators: [
    (Story) => (
      <Box>
        <Text
          size="sm"
          as="label"
          css={{ marginBottom: '$2', display: 'block' }}
        >
          Observações
        </Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}

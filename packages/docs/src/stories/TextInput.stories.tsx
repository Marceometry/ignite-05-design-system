import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@marceometry-ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Digite seu nome',
  },
  decorators: [
    (Story) => (
      <Box>
        <Text
          size="sm"
          as="label"
          css={{ marginBottom: '$2', display: 'block' }}
        >
          Username
        </Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'prefixo.com/',
    placeholder: 'username',
  },
}

import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@marceometry-ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    id: 'checkbox-story',
    placeholder: 'Digite seu nome',
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', gap: '$2' }}>
        {Story()}
        <Text size="sm" as="label" htmlFor="checkbox-story">
          Aceitar termos de uso
        </Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

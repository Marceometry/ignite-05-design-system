import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@marceometry-ignite-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}

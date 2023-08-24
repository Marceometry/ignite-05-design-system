import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
} from '@marceometry-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip.Content,
  decorators: [
    (Story) => (
      <Box>
        <Tooltip.Provider>
          <Tooltip.Trigger>
            <Button>4 de Maio</Button>
          </Tooltip.Trigger>

          {Story({ args: { title: 'Disponível' } })}
        </Tooltip.Provider>
      </Box>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

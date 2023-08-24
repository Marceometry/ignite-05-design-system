import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@marceometry-ignite-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
      return (
        <Box>
          <Button onClick={() => setOpen(true)}>Agendar</Button>
          {Story({
            args: {
              open,
              onOpenChange: setOpen,
              title: 'Agendamento realizado',
              description: 'Quarta-feira, 23 de Outubro às 16h',
            },
          })}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

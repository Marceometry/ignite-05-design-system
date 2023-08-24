import { ComponentProps, ReactNode } from 'react'
import {
  Portal,
  Root,
  Provider as TooltipProvider,
  Trigger as TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipArrow } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {}

export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <TooltipProvider>
      <Root>{children}</Root>
    </TooltipProvider>
  )
}

export const Trigger = ({ children }: { children: ReactNode }) => {
  return <TooltipTrigger asChild>{children}</TooltipTrigger>
}

export const Content = ({ title }: TooltipProps) => {
  return (
    <Portal>
      <TooltipContent sideOffset={5}>
        {title}
        <TooltipArrow />
      </TooltipContent>
    </Portal>
  )
}

export const Tooltip = {
  Provider,
  Trigger,
  Content,
}

import { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import { Provider } from '@radix-ui/react-toast'
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  description: string
}

export const Toast = (props: ToastProps) => {
  return (
    <Provider swipeDirection='right'>
      <ToastRoot {...props}>
        <ToastTitle as='strong'>{props.title}</ToastTitle>
        <ToastAction altText='Close notification'>
          <X />
        </ToastAction>
        <ToastDescription as='span'>{props.description}</ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </Provider>
  )
}

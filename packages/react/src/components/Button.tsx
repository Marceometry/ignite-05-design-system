import { ComponentProps, ElementType } from 'react'
import { styled } from '@/styles'

export const Button = styled('button', {
  fontFamily: '$default',
  borderRadius: '$sm',
  fontWeight: '$bold',
  padding: '$2 $4',
  border: 0,

  variants: {
    variant: {
      primary: {
        backgroundColor: '$ignite500',
        border: '1px solid $ignite500',
        color: '$white',
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid $ignite500',
        color: '$ignite500',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
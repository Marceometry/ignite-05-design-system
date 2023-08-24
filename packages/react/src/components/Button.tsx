import { ComponentProps, ElementType } from 'react'
import { styled } from '@/styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontFamily: '$default',
  textAlign: 'center',
  cursor: 'pointer',

  transitionProperty: 'border, box-shadow, color, background-color',
  transitionDuration: '0.2s',
  backgroundColor: 'transparent',
  border: '1px solid transparent',

  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100'
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$ignite500',
        border: '1px solid $ignite500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300',
        },

        '&:disabled': {
          borderColor: '$gray200',
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        border: '1px solid $ignite500',
        color: '$ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        minWidth: 100,
        padding: '$1 $2',
      },
      md: {
        minWidth: 120,
        padding: '$2 $4',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'

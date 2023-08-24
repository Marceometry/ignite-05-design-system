import { ComponentProps, ElementType } from 'react'
import { styled } from '@/styles'
import { fontSizes } from '@marceometry-ignite-ui/tokens'

type KeyOfFontSizes = keyof typeof fontSizes

type AccType = {
  [key in KeyOfFontSizes]: {
    fontSize: `$${KeyOfFontSizes}`
  }
}

const sizeVariants = Object.keys(fontSizes).reduce((acc, item) => {
  acc[item as KeyOfFontSizes] = {
    fontSize: `$${item as KeyOfFontSizes}`,
  }
  return acc
}, {} as AccType)

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: sizeVariants,
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'

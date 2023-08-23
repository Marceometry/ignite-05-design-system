import { Text } from '@/components/Text'
import { styled } from '@/styles'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  gap: '$2',
  marginTop: '$1',
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',
  transition: 'background-color 0.2s',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})

import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { Check } from 'phosphor-react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  prefix?: string
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

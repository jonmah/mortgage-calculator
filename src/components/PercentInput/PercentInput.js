import React from 'react'

import { Container, Percent } from './PercentInput.styled'
import { NumberInput } from '../../components'

const PercentInput = ({
  defaultValue,
  name,
  placeholder,
  register,
  required,
}) => {
  return (
    <Container>
      <NumberInput
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        register={register}
        required={required}
      />
      <Percent>%</Percent>
    </Container>
  )
}

export default PercentInput

import React from 'react'

import { Container, Percent } from './PercentInput.styled'
import { NumberInput } from '../../components'

const PercentInput = ({ name, placeholder, register, required }) => {
  return (
    <Container>
      <NumberInput
        name={name}
        placeholder={placeholder}
        register={register}
        required
      />
      <Percent>%</Percent>
    </Container>
  )
}

export default PercentInput

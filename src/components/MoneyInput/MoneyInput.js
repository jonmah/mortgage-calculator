import React from 'react'

import { Container, Currency } from './MoneyInput.styled'
import { NumberInput } from '../../components'

const MoneyInput = ({
  currency = '$',
  name,
  placeholder,
  register,
  required,
}) => {
  return (
    <Container>
      <Currency>{currency}</Currency>
      <NumberInput
        name={name}
        placeholder={placeholder}
        register={register}
        required={required}
      />
    </Container>
  )
}

export default MoneyInput

import React from 'react'

import { Container, Currency } from './MoneyInput.styled'
import { NumberInput } from '../../components'

const MoneyInput = ({ currency = '$', name, placeholder, register }) => {
  return (
    <Container>
      <Currency>{currency}</Currency>
      <NumberInput name={name} placeholder={placeholder} register={register} />
    </Container>
  )
}

export default MoneyInput

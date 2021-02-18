import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { getInterestRate } from '../api/mortgageCalculations'
import { Container, Form } from './SavingsCalculator.styled'
import { Button, MoneyInput, PercentInput } from '../components'

const SavingsCalculator = () => {
  const {
    // control,
    // errors,
    // formState,
    handleSubmit,
    register,
    // reset,
    // setValue,
  } = useForm()
  const [amortizationPeriods] = useState([10, 15, 20, 30, 50])
  const [interestRate, setInterestRate] = useState('2.5')
  useEffect(() => {
    const populateInterestRate = async () => {
      const rates = await getInterestRate()
      setInterestRate(rates)
    }
    populateInterestRate()
  }, [])

  // console.log(`amortizationPeriod: ${amortizationPeriods}`)
  // console.log(`interestRates: ${interestRates}`)

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MoneyInput
          name="principalAmount"
          placeholder="Principal Amount"
          register={register}
          required
        />
        <select name="amortizationPeriod" ref={register}>
          {amortizationPeriods.map(ap => (
            <option key={ap} value={ap}>
              {ap} years
            </option>
          ))}
        </select>
        <PercentInput
          name="interestRate"
          placeholder="Interest Rate"
          register={register}
          required
          value={interestRate}
        />
        <Button type="submit" label="Calculate" />
      </Form>
    </Container>
  )
}

export default SavingsCalculator

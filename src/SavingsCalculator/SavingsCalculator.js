import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { getInterestRate } from '../api/mortgageCalculations'
import { Container, Form, Select } from './SavingsCalculator.styled'
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
  const [numSavingsMonths] = useState(
    Array(12 * 5)
      .fill()
      .map((_, idx) => 1 + idx)
  )
  const [interestRate, setInterestRate] = useState('2.5')
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  useEffect(() => {
    const populateInterestRate = async () => {
      const rates = await getInterestRate()
      setInterestRate(rates)
    }
    populateInterestRate()
  }, [])

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
        <Select name="amortizationPeriod" ref={register} required>
          <option value="">Payment Period</option>
          <option value=""></option>
          {amortizationPeriods.map(ap => (
            <option key={ap} value={ap}>
              {ap} years
            </option>
          ))}
        </Select>
        <PercentInput
          defaultValue={interestRate}
          name="interestRate"
          placeholder="Interest Rate"
          register={register}
          required
        />
        <MoneyInput
          name="monthlySavings"
          placeholder="Monthly Savings"
          register={register}
          required={false}
        />
        <Select name="numSavingsMonths" ref={register} required={false}>
          <option value="">Number of Months to Save</option>
          <option value=""></option>
          {numSavingsMonths.map(ap => (
            <option key={ap} value={ap}>
              {ap} months
            </option>
          ))}
        </Select>
        <Button type="submit" label="Calculate" />
      </Form>
      {monthlyPayment}
    </Container>
  )
}

export default SavingsCalculator

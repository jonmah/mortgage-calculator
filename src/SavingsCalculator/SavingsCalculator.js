import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { getInterestRate } from '../api/mortgageCalculations'
import { Container, Form, RowItems, Select } from './SavingsCalculator.styled'
import { Button, MoneyInput, PercentInput } from '../components'

const SavingsCalculator = () => {
  const {
    // control,
    errors,
    formState,
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

  console.log(formState)
  console.log(errors)
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <RowItems>
          <h3>Let's calculate your monthly mortgage payments, shall we?</h3>
        </RowItems>
        <MoneyInput
          name="principalAmount"
          placeholder="Principal amount"
          register={register({
            required: 'Principal amount is required.',
            pattern: {
              value: /\d+/,
              message: 'Principal amount is number only.',
            },
          })}
        />
        <RowItems>
          <Select
            name="amortizationPeriod"
            ref={register({
              required: 'Payment period is required.',
            })}
          >
            <option value="">Payment period</option>
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
            placeholder="Interest rate"
            register={register({
              required: 'Interest rate is required.',
              pattern: {
                value: /\d+/,
                message: 'Interest rate is number only.',
              },
            })}
          />
        </RowItems>
        <RowItems>
          <h3>
            Optional - See how your savings cab go toward reducing your payments
          </h3>
        </RowItems>
        <MoneyInput
          name="monthlySavings"
          placeholder="Savings per month"
          register={register}
        />
        <Select name="numSavingsMonths" ref={register}>
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

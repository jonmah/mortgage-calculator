import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  getInterestRate,
  getMonthlyMortgagePayment,
} from '../api/mortgageCalculations'
import { Container, Form, RowItems, Select } from './SavingsCalculator.styled'
import { Banner, Button, MoneyInput, PercentInput } from '../components'
import { transformSubmitData } from './transforms'
import { isObjectEmpty } from '../transforms/objects'

const MAX_YEARS_OF_SAVING = 5
const MONTHS_IN_A_YEAR = 12

const SavingsCalculator = () => {
  const {
    errors,
    formState,
    getValues,
    handleSubmit,
    register,
    reset,
  } = useForm()

  const [amortizationPeriods] = useState([10, 15, 20, 30, 50])
  const [numSavingsMonths] = useState(
    Array(MAX_YEARS_OF_SAVING * MONTHS_IN_A_YEAR)
      .fill()
      .map((_, idx) => 1 + idx)
  )
  const [interestRate, setInterestRate] = useState('2.5')
  const [monthlyPayment, setMonthlyPayment] = useState(null)

  useEffect(() => {
    const populateInterestRate = async () => {
      const rates = await getInterestRate()
      setInterestRate(rates)
    }
    populateInterestRate()
  }, [])

  const onSubmit = async data => {
    const payment = await getMonthlyMortgagePayment(transformSubmitData(data))
    setMonthlyPayment(payment)
    reset(getValues())
  }

  return (
    <Container>
      <Banner
        isSuccess
        show={
          formState.isSubmitSuccessful && !formState.isDirty && monthlyPayment
        }
      >
        Your monthly payment is {monthlyPayment}
      </Banner>
      <Banner show={formState.isDirty && !isObjectEmpty(errors)}>
        {Object.values(errors).map(({ message, ref }) => (
          <div key={ref}>{message}</div>
        ))}
      </Banner>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <RowItems>
          <h1>Let's calculate your monthly mortgage payments, shall we?</h1>
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
            Optional - See how your savings can go toward reducing your payments
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
        <Button
          type="submit"
          label="Calculate"
          disabled={
            formState.isSubmitting ||
            !formState.isDirty ||
            !isObjectEmpty(errors)
          }
        />
      </Form>
    </Container>
  )
}

export default SavingsCalculator

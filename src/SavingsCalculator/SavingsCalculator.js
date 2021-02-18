import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { getInterestRates } from '../api/mortgageCalculations'
import Form from './Form'

const SavingsCalculator = () => {
  const {
    control,
    errors,
    formState,
    handleSubmit,
    reset,
    setValue,
  } = useForm()
  const [amortizationPeriods] = useState([10, 15, 20, 30, 50])
  const [interestRates, setInterestRates] = useState([])
  useEffect(() => {
    const getRates = async () => {
      const rates = await getInterestRates()
      setInterestRates(rates)
    }
    getRates()
  }, [])

  console.log(`amortizationPeriod: ${amortizationPeriods}`)
  console.log(`interestRates: ${interestRates}`)

  return (
    <div>
      stuff in the SavingsCalculator
      <Form />
    </div>
  )
}

export default SavingsCalculator

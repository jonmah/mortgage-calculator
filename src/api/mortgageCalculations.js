export const getInterestRate = async () => {
  const result = await Promise.resolve('2.5')
  return result
}

export const getMonthlyMortgagePayment = async ({
  amortizationPeriod,
  interestRate,
  monthlySavings,
  numSavingsMonths,
  principalAmount,
}) => {
  const P = principalAmount - monthlySavings * numSavingsMonths
  const partial = Math.pow(1 + interestRate / 12, 12 * amortizationPeriod)
  const monthlyPayment = (
    (P * (interestRate / 12) * partial) /
    (partial - 1)
  ).toFixed(2)

  const result = await Promise.resolve(monthlyPayment)
  return result
}

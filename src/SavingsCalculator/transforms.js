export const transformSubmitData = ({
  amortizationPeriod,
  interestRate,
  monthlySavings,
  numSavingsMonths,
  principalAmount,
}) => ({
  amortizationPeriod: Number(amortizationPeriod),
  interestRate: Number(interestRate.replaceAll(',', '')) / 100,
  monthlySavings: Number(monthlySavings.replaceAll(',', '')),
  numSavingsMonths: Number(numSavingsMonths),
  principalAmount: Number(principalAmount.replaceAll(',', '')),
})

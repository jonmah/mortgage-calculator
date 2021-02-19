export const transformSubmitData = ({
  amortizationPeriod,
  interestRate,
  monthlySavings,
  numSavingsMonths,
  principalAmount,
}) => ({
  amortizationPeriod: Number(amortizationPeriod),
  interestRate: Number(interestRate.replaceAll(',', '')) / 100,
  monthlySavings: monthlySavings.trim() === '' ? 0 : Number(monthlySavings),
  numSavingsMonths:
    numSavingsMonths.trim() === '' ? 0 : Number(numSavingsMonths),
  principalAmount: Number(principalAmount.replaceAll(',', '')),
})

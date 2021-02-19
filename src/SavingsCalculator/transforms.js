export const transformSubmitData = ({
  amortizationPeriod,
  interestRate,
  monthlySavings,
  numSavingsMonths,
  principalAmount,
}) => ({
  amortizationPeriod: Number(amortizationPeriod),
  interestRate: Number(interestRate.replace(/,/g, '')) / 100,
  monthlySavings: Number(monthlySavings.replace(/,/g, '')),
  numSavingsMonths: Number(numSavingsMonths),
  principalAmount: Number(principalAmount.replace(/,/g, '')),
})

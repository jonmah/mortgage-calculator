import {
  getInterestRate,
  getMonthlyMortgagePayment,
} from './mortgageCalculations'

const noSavings = {
  amortizationPeriod: 30,
  interestRate: 0.06,
  monthlySavings: 0,
  numSavingsMonths: 0,
  principalAmount: 1000000,
}

const withSavings = {
  amortizationPeriod: 30,
  interestRate: 0.06,
  monthlySavings: 1500,
  numSavingsMonths: 60,
  principalAmount: 1000000,
}

const negativePayment = {
  amortizationPeriod: 30,
  interestRate: 0.06,
  monthlySavings: 99999999,
  numSavingsMonths: 60,
  principalAmount: 1000000,
}

describe('api/mortgageCalculations', () => {
  describe('getInterestRate', () => {
    it('retrieves the federal interest +2.5%', async () => {
      expect(await getInterestRate()).toBe('2.5')
    })
  })
  describe('getMonthlyMortgagePayment', () => {
    it('calculates a monthly mortgage rate', async () => {
      expect(await getMonthlyMortgagePayment(noSavings)).toBe('5,995.51')
      expect(await getMonthlyMortgagePayment(withSavings)).toBe('5,455.91')
    })
    it('does not return a negative number if savings outweigh the mortgage somehow', async () => {
      expect(await getMonthlyMortgagePayment(negativePayment)).toBe('0')
    })
  })
})

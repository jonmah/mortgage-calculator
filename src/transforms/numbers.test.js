import {
  formatNumber,
  hasValidDecimalPlaces,
  hasValidDecimals,
  isLastCharInvalid,
} from './numbers'

describe('transforms/numbers', () => {
  describe('formatNumber', () => {
    it('formats a number to be human-readable, comma-separated value', () => {
      expect(formatNumber(1000000.99)).toBe('1,000,000.99')
    })
    it('does not strip off a trailing decimal to allow for continuation of decimal value entries', () => {
      expect(formatNumber('1000000.')).toBe('1,000,000.')
    })
  })
  describe('hasValidDecimalPlaces', () => {
    it('returns true when there is no decimal', () => {
      expect(hasValidDecimalPlaces('1000000')).toBe(true)
    })
    it('returns true when there is a decimal and does not exceed 2 significant figures', () => {
      expect(hasValidDecimalPlaces('1000000.')).toBe(true)
      expect(hasValidDecimalPlaces('1000000.00')).toBe(true)
      expect(hasValidDecimalPlaces('1000000.000')).toBe(false)
    })
  })
  describe('hasValidDecimals', () => {
    it('returns true when there is one or less decimals', () => {
      expect(hasValidDecimals('1000000')).toBe(true)
      expect(hasValidDecimals('1000000.')).toBe(true)
      expect(hasValidDecimals('10.00000.')).toBe(false)
    })
  })
  describe('isLastCharInvalid', () => {
    it('returns true when last character is invalid towards number composition', () => {
      expect(isLastCharInvalid('1000000')).toBe(false)
      expect(isLastCharInvalid('1000000.')).toBe(false)
      expect(isLastCharInvalid('1000000~')).toBe(true)
    })
  })
})

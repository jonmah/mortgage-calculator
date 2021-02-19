// Returns a human-readable, comma-separated value
export const formatNumber = v => {
  const formatted = new Intl.NumberFormat('en-US').format(
    Number(`${v}`.replace(/,/g, ''))
  )
  return isLastValueDecimal(v) ? `${formatted}.` : formatted
}

// Returns true if a value does not have a decimal or does have a decimal and does not exceed 2 significant figures
export const hasValidDecimalPlaces = v => {
  const hasDecimal = v.indexOf('.') !== -1
  return !hasDecimal || (hasDecimal && v.length - v.indexOf('.') < 4)
}

// Returns true if a value has only one or less decimals
export const hasValidDecimals = v => v.indexOf('.') === v.lastIndexOf('.')

// Returns true if the last character is invalid towards the composition of a number value
export const isLastCharInvalid = v =>
  isNaN(v.charAt(v.length - 1)) && !isLastValueDecimal(v)

// Returns true if the last character is a decimal
const isLastValueDecimal = v => `${v}`.charAt(v.length - 1) === '.'

export const isNotANumber = v => isNaN(v)

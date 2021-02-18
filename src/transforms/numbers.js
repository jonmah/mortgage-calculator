export const formatNumber = v => {
  const formatted = new Intl.NumberFormat('en-US').format(
    Number(v.replaceAll(',', ''))
  )
  return isLastValueDecimal(v) ? `${formatted}.` : formatted
}

export const hasValidDecimalPlaces = v => {
  const hasDecimal = v.indexOf('.') !== -1
  return !hasDecimal || (hasDecimal && v.length - v.indexOf('.') < 4)
}

export const hasValidDecimals = v => v.indexOf('.') === v.lastIndexOf('.')

export const isLastCharValid = v => {
  return isNaN(v.charAt(v.length - 1)) && !isLastValueDecimal(v)
}

const isLastValueDecimal = v => v.charAt(v.length - 1) === '.'

export const isNotANumber = v => isNaN(v)

import React, { useState } from 'react'

import { Input } from './NumberInput.styled'
import {
  formatNumber,
  hasValidDecimalPlaces,
  hasValidDecimals,
  isLastCharInvalid,
  isNotANumber,
} from '../../transforms/numbers'

const NumberInput = ({ defaultValue = '', name, placeholder, register }) => {
  const [val, setVal] = useState(defaultValue)

  const transform = e => {
    const { value } = e.target
    console.log(isLastCharInvalid(value))
    if (
      isLastCharInvalid(value) ||
      !hasValidDecimals(value) ||
      !hasValidDecimalPlaces(value)
    ) {
      // Strip off most recent character if it violates the composition of a number
      const removedLastChar = value.substring(0, value.length - 1)
      const cleanedValue = isLastCharInvalid(removedLastChar)
        ? ''
        : removedLastChar
      setVal(cleanedValue)
      e.target.value = cleanedValue
    } else if (value?.length > 0) {
      // Protect against copy/pasting a non-number
      const cleanedValue = isNotANumber(value.replace(/,/g, ''))
        ? ''
        : formatNumber(value)
      setVal(cleanedValue)
      e.target.value = cleanedValue
    }
  }

  return (
    <Input
      name={name}
      onChange={e => transform(e)}
      placeholder={placeholder}
      ref={register}
      defaultValue={val}
    />
  )
}

export default NumberInput

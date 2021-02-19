import React, { useState } from 'react'

import { Input } from './NumberInput.styled'
import {
  formatNumber,
  hasValidDecimalPlaces,
  hasValidDecimals,
  isLastCharValid,
  isNotANumber,
} from '../../transforms/numbers'

const NumberInput = ({ defaultValue = '', name, placeholder, register }) => {
  const [value, setValue] = useState(defaultValue)

  const thing = e => {
    const { value } = e.target
    if (
      isLastCharValid(value) ||
      !hasValidDecimals(value) ||
      !hasValidDecimalPlaces(value)
    ) {
      // Strip off most recent character if it violates the composition of a number
      const removedLastChar = value.substring(0, value.length - 1)
      const cleanedValue = isLastCharValid(removedLastChar)
        ? ''
        : removedLastChar
      setValue(cleanedValue)
      e.target.value = cleanedValue
    } else if (value?.length > 0) {
      // Protect against copy/pasting a non-number
      const cleanValue = value.replaceAll(',', '')
      const cleanedValue = isNotANumber(cleanValue) ? '' : formatNumber(value)
      setValue(cleanedValue)
      e.target.value = cleanedValue
    }
  }

  return (
    <Input
      name={name}
      onChange={e => thing(e)}
      placeholder={placeholder}
      ref={register}
      defaultValue={value}
    />
  )
}

export default NumberInput

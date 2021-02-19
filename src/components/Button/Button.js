import React from 'react'

import { Container } from './Button.styled'

const Button = ({ disabled, handleClick, label, type }) => (
  <Container
    disabled={disabled}
    onClick={handleClick}
    type={type}
    value={label}
  >
    {label}
  </Container>
)

export default Button

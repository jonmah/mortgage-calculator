import React from 'react'

import { Container } from './Button.styled'

const Button = ({ label, handleClick, type }) => (
  <Container type={type} onClick={handleClick} value={label}>
    {label}
  </Container>
)

export default Button

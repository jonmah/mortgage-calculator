import React from 'react'

import { Container } from './Banner.styled'

const Banner = ({ children, isSuccess, ref, show }) => (
  <Container isSuccess={isSuccess} ref={ref} show={show}>
    {children}
  </Container>
)

export default Banner

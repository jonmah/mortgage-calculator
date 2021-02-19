import styled from 'styled-components'

export const Container = styled.button`
  color: var(--white);
  background: var(--gray);
  border-radius: 2rem;
  font-size: 1.2rem;
  height: 3.5rem;
  width: 100%;

  :disabled {
    background: var(--disabled);
  }
`
Container.displayName = 'Container'

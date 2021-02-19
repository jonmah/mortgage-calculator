import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: ${({ isSuccess }) =>
    isSuccess ? 'var(--success)' : 'var(--warning)'};
  color: var(--white);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  width: 100%;
`

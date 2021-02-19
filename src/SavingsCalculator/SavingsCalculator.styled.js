import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
Container.displayName = 'Container'

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  width: 100%;

  input,
  select {
    color: var(--gray);
    border: var(--field-border);
    font-size: 1rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  @media (min-width: 376px) {
    width: 55%;
  }
`
Form.displayName = 'Form'

export const Select = styled.select`
  border-radius: 0.2rem;
  // box-shadow: var(--field-error);
  height: 4rem;
  padding: 0.8rem;
`
Select.displayName = 'Select'

import styled from 'styled-components'

export const Container = styled.nav`
  align-items: center;
  display: flex;
  height: var(--nav-height);
  justify-content: space-between;
  max-height: var(--nav-height);
  padding: var(--nav-padding-y) var(--nav-padding-x);
  width: 100vw;
`
Container.displayName = 'Container'

export const Logo = styled.img`
  height: 24px;
  width: 24px;
`
Logo.displayName = 'Logo'

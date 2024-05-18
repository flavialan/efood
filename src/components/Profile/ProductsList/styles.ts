import { styled } from 'styled-components'
import { breakpoints } from '../../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 56px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

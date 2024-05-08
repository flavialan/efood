import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  font-size: 32px;
  line-height: 37.5px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const FoodType = styled.h4`
  padding-top: 24px;
  padding-bottom: 156.5px;
  font-weight: 100;
`

export const Title = styled.h3`
  font-weight: 900;
`

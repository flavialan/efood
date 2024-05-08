import styled from 'styled-components'

import { breakpoints, colors } from '../../../styles'

export const ProfileImg = styled.header`
  width: 100%;
  height: 136px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    width: 1024px;
    max-width: 100%;
    display: flex;
    align-items: center;
    padding: 40px 0;
    justify-content: space-between;

    &::after {
      z-index: 0;
    }

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export const ProfileText = styled.h2`
  color: ${colors.darkPink};
  font-size: 18px;
  text-align: center;
  font-weight: 900;
  cursor: pointer;
`

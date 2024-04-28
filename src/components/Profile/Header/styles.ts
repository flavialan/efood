import styled from 'styled-components'

import { colors } from '../../../styles'

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
  }
`

export const ProfileText = styled.h2`
  color: ${colors.darkPink};
  font-size: 18px;
  text-align: center;
  font-weight: 900;
`

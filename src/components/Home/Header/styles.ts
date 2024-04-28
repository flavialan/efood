import styled from 'styled-components'
import { colors } from '../../../styles'

export const HeaderImg = styled.header`
  width: 100%;
  height: 360px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    width: 539px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
  }
`

export const HeaderText = styled.h2`
  color: ${colors.darkPink};
  font-size: 36px;
  margin-top: 140px;
  text-align: center;
`

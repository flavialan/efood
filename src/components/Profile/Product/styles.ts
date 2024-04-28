import styled from 'styled-components'
import { colors } from '../../../styles'

export const Card = styled.div`
  background-color: ${colors.darkPink};
  color: ${colors.pink};
  padding: 8px;

  .container {
    max-width: 320px;
    width: 100%;
  }
`

export const CardImg = styled.img`
  display: flex;
  width: 304px;
  height: 167px;
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
`

export const Button = styled.button`
  background-color: ${colors.pink};
  width: 100%;
  border: none;
  padding: 4px;
  color: ${colors.darkPink};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`

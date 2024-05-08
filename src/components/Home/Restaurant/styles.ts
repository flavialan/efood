import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  color: ${colors.darkPink};
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  border-top: none;
  display: flex;
  flex-direction: column;

  ${TagContainer} {
    margin-left: 8px;
  }

  .card {
    border: 1px solid ${colors.darkPink};
    border-top: none;
  }
`
export const Logo = styled.img`
  height: 217px;
  margin: 0;
  object-fit: cover;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
  font-weight: normal;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Button = styled(Link)`
  cursor: pointer;
  border: none;

  ${TagContainer} {
    margin-bottom: 8px;
  }
`
export const CardInfos = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;

  div {
    display: flex;
    align-items: center;

    img {
      margin-left: 8px;
    }
  }
`

export const Container = styled.div`
  margin: 0 8px;
`

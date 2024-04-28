import styled from 'styled-components'
import { colors } from '../../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.darkPink};
  color: ${colors.pink};
  font-weight: bold;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  padding: 4px 6px;
  display: inline-block;
`

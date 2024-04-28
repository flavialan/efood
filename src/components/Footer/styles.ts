import styled from 'styled-components'
import { colors } from '../../styles'

export const Footers = styled.footer`
  margin-top: 120px;
  height: 298px;
  background-color: ${colors.pink};
`
export const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .imageLogo {
    width: 125px;
    height: 57.5px;
    margin: 40px 0 32.5px 0;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 24px;
  gap: 8px;
`
export const FooterText = styled.p`
  color: ${colors.darkPink};
  font-weight: 400;
  font-size: 10px;
  line-height: 11.72px;
  text-align: center;
  max-width: 480px;
  width: 100%;
  height: 24px;
  margin: 80px auto 40px auto;
`

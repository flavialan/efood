import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import * as S from './styles'

const Footer = () => (
  <S.Footers>
    <div className="container">
      <S.SectionFooter>
        <Link to="/">
          <img className="imageLogo" src={logo} alt="EFOOD" />
        </Link>
        <S.SocialMedia>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </S.SocialMedia>
      </S.SectionFooter>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.FooterText>
    </div>
  </S.Footers>
)
export default Footer

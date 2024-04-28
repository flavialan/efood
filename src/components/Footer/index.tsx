import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { Footers, SocialMedia, SectionFooter, FooterText } from './styles'

const Footer = () => (
  <Footers>
    <div className="container">
      <SectionFooter>
        <Link to="/">
          <img className="imageLogo" src={logo} alt="EFOOD" />
        </Link>
        <SocialMedia>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </SocialMedia>
      </SectionFooter>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </div>
  </Footers>
)
export default Footer

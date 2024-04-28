import { Link } from 'react-router-dom'

import { HeaderImg, HeaderText } from './styles'
import headerImg from '../../../assets/images/header.png'
import logo from '../../../assets/images/logo.png'

const Header = () => (
  <HeaderImg style={{ backgroundImage: `url(${headerImg})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <HeaderText>
        Viva experiências gastronômicas no conforto da sua casa
      </HeaderText>
    </div>
  </HeaderImg>
)

export default Header

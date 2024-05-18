import { Link } from 'react-router-dom'

import headerImg from '../../../assets/images/header.png'
import logo from '../../../assets/images/logo.png'

import * as S from './styles'

const Header = () => (
  <S.HeaderImg style={{ backgroundImage: `url(${headerImg})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <S.HeaderText>
        Viva experiências gastronômicas no conforto da sua casa
      </S.HeaderText>
    </div>
  </S.HeaderImg>
)

export default Header

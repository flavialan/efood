import { Link } from 'react-router-dom'
import { ProfileImg, ProfileText } from './styles'
import logo from '../../../assets/images/logo.png'
import headerImg from '../../../assets/images/header.png'

const ProfileHeader = () => (
  <ProfileImg style={{ backgroundImage: `url(${headerImg})` }}>
    <div className="container">
      <ProfileText>Restaurantes</ProfileText>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <ProfileText>0 produto(s) no carrinho</ProfileText>
    </div>
  </ProfileImg>
)

export default ProfileHeader

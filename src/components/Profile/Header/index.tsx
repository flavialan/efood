import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileImg, ProfileText } from './styles'
import logo from '../../../assets/images/logo.png'
import headerImg from '../../../assets/images/header.png'
import { open } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

const ProfileHeader = () => {
  const dispatch = useDispatch()
  const { order } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <ProfileImg style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <ProfileText>Restaurantes</ProfileText>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <ProfileText onClick={openCart}>
          {order.length} produto(s) no carrinho
        </ProfileText>
      </div>
    </ProfileImg>
  )
}

export default ProfileHeader

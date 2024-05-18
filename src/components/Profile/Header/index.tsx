import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'

import { open } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

import logo from '../../../assets/images/logo.png'
import headerImg from '../../../assets/images/header.png'

import * as S from './styles'

const ProfileHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { order } = useSelector((state: RootReducer) => state.cart)

  const gotToHome = () => {
    navigate('/')
  }

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.ProfileImg style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <S.ProfileText onClick={gotToHome}>Restaurantes</S.ProfileText>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <S.ProfileText onClick={openCart}>
          {order.length} produto(s) no carrinho
        </S.ProfileText>
        <div className="mobile-cart">
          <FaShoppingCart size="36px" onClick={openCart} />
        </div>
      </div>
    </S.ProfileImg>
  )
}

export default ProfileHeader

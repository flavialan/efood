import { useDispatch } from 'react-redux'

import { close } from '../../../store/reducers/cart'

import * as S from './styles'

type Props = {
  restaurant: Restaurants
}

const ProfileBanner = ({ restaurant }: Props) => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  return (
    <S.Image
      style={{ backgroundImage: `url(${restaurant.capa})` }}
      onClick={closeCart}
    >
      <div className="container">
        <S.FoodType>{restaurant.tipo}</S.FoodType>
        <S.Title>{restaurant.titulo}</S.Title>
      </div>
    </S.Image>
  )
}

export default ProfileBanner

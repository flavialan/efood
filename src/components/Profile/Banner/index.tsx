import { useDispatch } from 'react-redux'
import { Restaurants } from '../../../pages/Home'
import { FoodType, Image, Title } from './styles'
import { close } from '../../../store/reducers/cart'

type Props = {
  restaurant: Restaurants
}

const ProfileBanner = ({ restaurant }: Props) => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  return (
    <Image
      style={{ backgroundImage: `url(${restaurant.capa})` }}
      onClick={closeCart}
    >
      <div className="container">
        <FoodType>{restaurant.tipo}</FoodType>
        <Title>{restaurant.titulo}</Title>
      </div>
    </Image>
  )
}

export default ProfileBanner

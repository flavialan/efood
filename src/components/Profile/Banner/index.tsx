import { Restaurants } from '../../../pages/Home'
import { FoodType, Image, Title } from './styles'

type Props = {
  restaurant: Restaurants
}

const ProfileBanner = ({ restaurant }: Props) => {
  return (
    <Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <FoodType>{restaurant.tipo}</FoodType>
        <Title>{restaurant.titulo}</Title>
      </div>
    </Image>
  )
}

export default ProfileBanner

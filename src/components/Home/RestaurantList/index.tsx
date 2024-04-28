import Restaurants from '../../../models/Restaurants'
import RestaurantCard from '../Restaurant'
import { List } from './styles'

export type Props = {
  restaurants: Restaurants[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          description={restaurant.description}
          image={restaurant.image}
          type={restaurant.type}
          extra={restaurant.extra}
          title={restaurant.title}
          points={restaurant.points}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList

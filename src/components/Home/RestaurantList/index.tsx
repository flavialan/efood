import { Restaurants } from '../../../pages/Home'
import RestaurantCard from '../Restaurant'
import { List } from './styles'

export type Props = {
  restaurants: Restaurants[]
}

export const pricesFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurantId={restaurant.id}
          restaurantDescription={restaurant.descricao}
          restaurantCover={restaurant.capa}
          restaurantType={restaurant.tipo}
          restaurantHighlihted={restaurant.destacado}
          restaurantTitle={restaurant.titulo}
          restaurantPoints={restaurant.avaliacao}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList

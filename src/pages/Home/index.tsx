import Header from '../../components/Home/Header'
import RestaurantList from '../../components/Home/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home

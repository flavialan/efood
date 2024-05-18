import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'

import ProfileHeader from '../../components/Profile/Header'
import ProductsList from '../../components/Profile/ProductsList'

import ProfileBanner from '../../components/Profile/Banner'
import { useGetProductsQuery } from '../../services/api'

export type Props = {
  restaurant: Restaurants[]
}

type RestaurantParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as RestaurantParams

  const { data: restaurantProfile } = useGetProductsQuery(id)

  if (!restaurantProfile) {
    return <Loader />
  }

  return (
    <>
      <ProfileHeader />
      <ProfileBanner restaurant={restaurantProfile} />
      <ProductsList restaurant={restaurantProfile} />
    </>
  )
}
export default Profile

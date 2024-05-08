import { useParams } from 'react-router-dom'
import ProfileHeader from '../../components/Profile/Header'
import ProductsList from '../../components/Profile/ProductsList'
import { Restaurants } from '../Home'
import ProfileBanner from '../../components/Profile/Banner'
import { useGetProductsQuery } from '../../services/api'

export type Props = {
  restaurant: Restaurants[]
}

const Profile = () => {
  const { id } = useParams()

  const { data: restaurantProfile } = useGetProductsQuery(id!)

  if (!restaurantProfile) {
    return <h3>Loading...</h3>
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

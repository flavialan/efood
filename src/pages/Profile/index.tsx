import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProfileHeader from '../../components/Profile/Header'
import ProductsList from '../../components/Profile/ProductsList'
import { Restaurants } from '../Home'
import ProfileBanner from '../../components/Profile/Banner'

export type Props = {
  restaurant: Restaurants[]
}

const Profile = () => {
  const { id } = useParams()

  const [restaurantProfile, setResturantProfile] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setResturantProfile(res))
  }, [id])

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

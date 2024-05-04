import { useEffect, useState } from 'react'
import Header from '../../components/Home/Header'
import RestaurantList from '../../components/Home/RestaurantList'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (!restaurants) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home

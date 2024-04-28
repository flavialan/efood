import Header from '../../components/Home/Header'
import RestaurantList from '../../components/Home/RestaurantList'
import Restaurants from '../../models/Restaurants'
import japonese from '../../assets/images/japonese.png'
import italian from '../../assets/images/italian.png'

export const restaurants: Restaurants[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: japonese,
    extra: 'Destaque da semana',
    type: 'Japonesa',
    points: 4.9,
    title: 'Hioki Sushi '
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italian,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    points: 4.6
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italian,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    points: 4.6
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italian,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    points: 4.6
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italian,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    points: 4.6
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italian,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    points: 4.6
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={restaurants} />
  </>
)

export default Home

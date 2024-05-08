import { Restaurants } from '../../../pages/Home'
import ProductCard from '../Product'
import { List } from './styles'

type Props = {
  restaurant: Restaurants
}

const ProductList = ({ restaurant }: Props) => {
  if (!restaurant) {
    return <h3>Loading...</h3>
  }

  return (
    <div className="container">
      <List>
        {restaurant.cardapio.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            productTitle={product.nome}
            productDescription={product.descricao}
            productImage={product.foto}
            productPrice={product.preco}
            productServe={product.porcao}
            order={product}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductList

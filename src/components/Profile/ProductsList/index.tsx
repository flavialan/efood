import Products from '../../../models/Products'
import ProductCard from '../Product'
import { List } from './styles'

export type Props = {
  products: Products[]
}

const ProductList = ({ products }: Props) => (
  <div className="container">
    <List>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </List>
  </div>
)

export default ProductList

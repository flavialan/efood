import { Button, Card, CardImg, Description, Title } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductCard = ({ title, description, image }: Props) => (
  <Card>
    <div className="container">
      <CardImg src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>Adicionar ao carrinho</Button>
    </div>
  </Card>
)

export default ProductCard

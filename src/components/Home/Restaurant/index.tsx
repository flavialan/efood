import Tag from '../Tag'
import star from '../../../assets/images/star.png'
import {
  Button,
  Card,
  CardInfos,
  Container,
  Description,
  Infos,
  Logo
} from './styles'

type Props = {
  title: string
  description: string
  type: string
  image: string
  points: number
  extra?: string
}

function TagsRender(type: string, extra: string | undefined) {
  if (extra) {
    return (
      <>
        <Tag>{extra}</Tag>
        <Tag>{type}</Tag>
      </>
    )
  }
  return <Tag>{type}</Tag>
}

const RestaurantCard = ({
  description,
  image,
  type,
  points,
  title,
  extra
}: Props) => (
  <Card>
    <Logo style={{ backgroundImage: `url(${image})` }} />
    <Infos>{TagsRender(type, extra)}</Infos>
    <div className="card">
      <Container>
        <CardInfos>
          <h3>{title}</h3>
          <div>
            <p>{points}</p>
            <img src={star} alt="Star" />
          </div>
        </CardInfos>
        <Description>{description}</Description>
      </Container>
      <Button to="/Profile">
        <Tag size="big">Saiba mais</Tag>
      </Button>
    </div>
  </Card>
)

export default RestaurantCard

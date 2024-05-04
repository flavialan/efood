import Tag from '../Tag'
import star from '../../../assets/images/star.png'
import * as S from './styles'

type Props = {
  restaurantTitle: string
  restaurantDescription: string
  restaurantType: string
  restaurantCover: string
  restaurantPoints: number
  restaurantHighlihted: boolean
  restaurantId: number
}

function TagsRender(restaurantType: string, restaurantHighlihted: boolean) {
  if (restaurantHighlihted === true) {
    return (
      <>
        <Tag>Destaque da semana</Tag>
        <Tag>{restaurantType}</Tag>
      </>
    )
  }
  return <Tag>{restaurantType}</Tag>
}

export const reduceDescription = (description: string) => {
  if (description.length > 128) {
    return description.slice(0, 230) + '...'
  }
  return description
}

const RestaurantCard = ({
  restaurantCover,
  restaurantDescription,
  restaurantHighlihted,
  restaurantId,
  restaurantPoints,
  restaurantTitle,
  restaurantType
}: Props) => (
  <S.Card>
    <S.Logo src={restaurantCover} alt={restaurantTitle} />
    <S.Infos>{TagsRender(restaurantType, restaurantHighlihted)}</S.Infos>
    <div className="card">
      <S.Container>
        <S.CardInfos>
          <h3>{restaurantTitle}</h3>
          <div>
            <p>{restaurantPoints}</p>
            <img src={star} alt="Star" />
          </div>
        </S.CardInfos>
        <S.Description>
          {reduceDescription(restaurantDescription)}
        </S.Description>
      </S.Container>
      <S.Button to={`/profile/${restaurantId}`}>
        <Tag size="big">Saiba mais</Tag>
      </S.Button>
    </div>
  </S.Card>
)

export default RestaurantCard

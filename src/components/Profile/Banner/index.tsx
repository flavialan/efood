import italianBanner from '../../../assets/images/italian_banner.png'
import { FoodType, Image, Title } from './styles'

const ProfileBanner = () => (
  <Image style={{ backgroundImage: `url(${italianBanner})` }}>
    <div className="container">
      <FoodType>Italiana</FoodType>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </Image>
)

export default ProfileBanner

import { BounceLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <BounceLoader color={colors.darkPink} />
  </Container>
)

export default Loader

import pasta from '../../assets/images/banner.png'
import { Imagem, Italiana, RestauranteName } from './styles'

const BannerTratoria = () => (
  <Imagem style={{ backgroundImage: `url(${pasta})` }}>
    <div className="container">
      <Italiana>Italiana</Italiana>
      <RestauranteName>La Dolce Vita Tratoria</RestauranteName>
    </div>
  </Imagem>
)

export default BannerTratoria

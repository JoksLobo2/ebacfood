import Restaurantes from '../restaurantes'
import { List, Container } from './styles'
import Restaurante from '../../Models/Restaurante'

type Props = {
  title: string
  restaurantes: Restaurante[]
}

const RestaurantesList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurantes
            key={restaurante.id}
            title={restaurante.title}
            icon={restaurante.icon}
            rate={restaurante.rate}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantesList

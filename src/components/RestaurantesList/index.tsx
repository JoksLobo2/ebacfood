import { Restaurants } from '../../pages/Home'
import Restaurantes from '../restaurantes'

import icon from '../../assets/images/estrela.png'
import { List, Container } from './styles'

type Props = {
  title: string
  restaurantes: Restaurants[]
}

const RestaurantesList = ({ restaurantes }: Props) => {
  const getRestaurantTags = (restaurante: Restaurants) => {
    const tags = []

    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }

    return tags
  }

  return (
    <div className="container">
      <div>
        <List>
          {restaurantes.map((restaurante) => (
            <li key={restaurante.id}>
              <Restaurantes
                id={restaurante.id}
                title={restaurante.titulo}
                icon={icon}
                rate={restaurante.avaliacao}
                description={restaurante.descricao}
                image={restaurante.capa}
                infos={getRestaurantTags(restaurante)}
              />
            </li>
          ))}
        </List>
      </div>
    </div>
  )
}

export default RestaurantesList

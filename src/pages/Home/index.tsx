import RestaurantesList from '../../components/RestaurantesList'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurants = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const { data: firstPageRestaurants } = useGetRestaurantsQuery()

  if (firstPageRestaurants) {
    return (
      <>
        <RestaurantesList title="" restaurantes={firstPageRestaurants} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home

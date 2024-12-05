import RestaurantesList from '../../components/RestaurantesList'

import { useEffect, useState } from 'react'

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
  const [menu, setMenu] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [])

  return (
    <>
      <RestaurantesList title="" restaurantes={menu} />
    </>
  )
}

export default Home

import Menu from '../../components/Menu'

import pizza from '../../assets/images/pizza.png'
import { useEffect, useState } from 'react'

export type cardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: cardapioItem[]
}

const Restaurante = () => {
  const [cardapio, setCardapio] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])
  return (
    <>
      <Menu title="" foods={cardapio} />
    </>
  )
}
export default Restaurante

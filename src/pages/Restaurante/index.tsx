import { useEffect, useState } from 'react'

import Menu from '../../components/Menu'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

export type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Restaurante = () => {
  const [cardapio, setCardapio] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/id')
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio)) // Acessa o array de itens dentro da resposta
  }, [])

  return (
    <>
      <Menu title="Cardápio do Restaurante" foods={cardapio} />
    </>
  )
}

export default Restaurante

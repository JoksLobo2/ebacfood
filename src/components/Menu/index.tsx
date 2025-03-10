import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Restaurante, Prato } from '../../pages/Restaurante'

import MenuL from '../MenuL'

import { FoodList } from './styles'

export type Props = {
  title: string
  foods: Restaurante[]
}

const Menu = ({ title }: Props) => {
  const { id } = useParams<{ id: string }>()

  const [cardapio, setCardapio] = useState<Prato[]>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setCardapio(data.cardapio)) // Acessa o array de itens dentro da resposta
  }, [id])

  return (
    <div className="container">
      <FoodList>
        {Array.isArray(cardapio) && cardapio.length > 0 ? (
          cardapio.map((prato) => <MenuL key={prato.id} food={prato} />)
        ) : (
          <p title="carregando">Loading...</p>
        )}
      </FoodList>
    </div>
  )
}

export default Menu

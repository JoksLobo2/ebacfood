import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'

import {
  HeaderBar,
  SectionTitle,
  CartButton,
  Imagem,
  Italiana,
  RestauranteName
} from './styles'
import { useEffect, useState } from 'react'

import { Restaurante } from '../../pages/Restaurante'
import { RootReducer } from '../../store'

const RestauranteHeader = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))
      .catch((error) => console.error('Erro ao buscar restaurante:', error))
  }, [id])

  return (
    <>
      <HeaderBar>
        <div>
          <SectionTitle>Restaurantes</SectionTitle>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </CartButton>
        </div>
      </HeaderBar>
      {restaurante && (
        <Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
          <div className="container">
            <Italiana>{restaurante.tipo}</Italiana>
            <RestauranteName>{restaurante.titulo}</RestauranteName>
          </div>
        </Imagem>
      )}
    </>
  )
}

export default RestauranteHeader

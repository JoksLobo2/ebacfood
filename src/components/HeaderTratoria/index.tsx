import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { Restaurante } from '../../pages/Restaurante'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'
import * as S from './styles'

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
      <S.HeaderBar>
        <div>
          <S.SectionTitle>Restaurantes</S.SectionTitle>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <S.CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </S.CartButton>
        </div>
      </S.HeaderBar>
      {restaurante && (
        <S.Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
          <div className="container">
            <S.Italiana>{restaurante.tipo}</S.Italiana>
            <S.RestauranteName>{restaurante.titulo}</S.RestauranteName>
          </div>
        </S.Imagem>
      )}
    </>
  )
}

export default RestauranteHeader

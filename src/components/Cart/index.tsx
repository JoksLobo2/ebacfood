import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import { openCheck } from '../../store/reducers/checkout'

import { parseToBRL } from '../../utils'

import Payment from '../Payment'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const openCheckoutAndCloseCart = () => {
    if (items.length === 0) {
      alert('O carrinho está vazio!')
      return
    }
    dispatch(openCheck())
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt="imagem de uma pizza" />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{parseToBRL(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </S.CartItem>
            ))}
          </ul>
          <S.PricesContainer>
            <S.Prices>Valor total </S.Prices>
            <S.Prices> {parseToBRL(getTotalPrice())}</S.Prices>
          </S.PricesContainer>
          <button
            onClick={openCheckoutAndCloseCart}
            type="button"
            title="Clique aqui para continuar com a entrega"
          >
            <>Continuar com a entrega</>
          </button>
          <Payment valorTotal={parseToBRL(getTotalPrice())} />
        </S.Sidebar>
      </S.CartContainer>
    </>
  )
}

export default Cart

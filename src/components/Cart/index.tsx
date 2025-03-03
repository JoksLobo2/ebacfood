import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import { openCheck } from '../../store/reducers/checkout'

import { formataPreco } from '../MenuL/index'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  PricesContainer,
  CartItem
} from './styles'
import Payment from '../Payment'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const openCheckoutAndCloseCart = () => {
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
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <Sidebar>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt="imagem de uma pizza" />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </CartItem>
            ))}
          </ul>
          <PricesContainer>
            <Prices>Valor total </Prices>
            <Prices> {formataPreco(getTotalPrice())}</Prices>
          </PricesContainer>
          <button
            onClick={openCheckoutAndCloseCart}
            type="button"
            title="Clique aqui para continuar com a entrega"
          >
            <>Continuar com a entrega</>
          </button>
          <Payment valorTotal={formataPreco(getTotalPrice())} />
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart

import { useDispatch, useSelector } from 'react-redux'

import pizza from '../../assets/images/pizza.png'

import { RootReducer } from '../../store'

import { close } from '../../store/reducers/cart'

import { open } from '../../store/reducers/checkout'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  PricesContainer,
  CartItem
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const openCheckout = () => {
    dispatch(open())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="imagem de uma pizza" />
              <div>
                <h3>{item.nome}</h3>
                <span>{item.preco}</span>
              </div>
              <button type="button" />
            </CartItem>
          ))}
        </ul>
        <PricesContainer>
          <Prices>Valor </Prices>
          <Prices> Total R$182,70</Prices>
        </PricesContainer>
        <button
          onClick={openCheckout}
          type="button"
          title="Clique aqui para continuar com a entrega"
        >
          Continuar com a entrega
        </button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

import { useDispatch, useSelector } from 'react-redux'

import pizza from '../../assets/images/pizza.png'

import { RootReducer } from '../../store'

import { close } from '../../store/reducers/cart'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  PricesContainer,
  CartItem
} from './styles'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} alt="imagem de uma pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$60,90</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="imagem de uma pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$60,90</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="imagem de uma pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$60,90</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <PricesContainer>
          <Prices>Valor </Prices>
          <Prices> Total R$182,70</Prices>
        </PricesContainer>
        <button type="button" title="Clique aqui para continuar com a entrega">
          Continuar com a entrega
        </button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

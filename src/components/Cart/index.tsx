import { useDispatch, useSelector } from 'react-redux'

import pizza from '../../assets/images/pizza.png'

import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import { open } from '../../store/reducers/checkout'

import { formataPreco } from '../MenuL/index'

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
            onClick={openCheckout}
            type="button"
            title="Clique aqui para continuar com a entrega"
          >
            Continuar com a entrega
          </button>
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart

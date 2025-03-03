import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

import { closeConfirm } from '../../store/reducers/confirm'

import {
  CheckoutContainer,
  Overlay,
  CheckoutCard,
  CheckoutButton
} from './styles'

const Confirmacao = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.confirm)

  const dispatch = useDispatch()
  const closeConfirmation = () => {
    dispatch(closeConfirm())
  }

  const orderId = useSelector((state: RootReducer) => state.order.orderId)

  console.log('Order ID in Confirmacao:', orderId)

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeConfirmation} />
      <CheckoutCard>
        <h2>Pedido realizado - {orderId}</h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <CheckoutButton type="submit">Concluir</CheckoutButton>
      </CheckoutCard>
    </CheckoutContainer>
  )
}

export default Confirmacao

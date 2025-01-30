import { useDispatch, useSelector } from 'react-redux'
import {
  InputGroup,
  Overlay,
  PaymentButton,
  PaymentCard,
  PaymentContainer,
  CardInput
} from './styles'

import { formataPreco } from '../MenuL'
import { RootReducer } from '../../store'
import { closeP } from '../../store/reducers/payment'
import { openCheck } from '../../store/reducers/checkout'

const Payment = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.payment)
  const dispatch = useDispatch()

  const closePayment = () => {
    dispatch(closeP())
  }

  const closePaymentOpenCheckout = () => {
    dispatch(closeP())
    dispatch(openCheck())
  }

  return (
    <PaymentContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closePayment} />
      <PaymentCard>
        <InputGroup>
          <ul>
            <h2>Pagamento - Valor a pagar R$130,00</h2>
            <li>
              <label htmlFor="name">Nome no cartão</label>
              <input id="name" type="text" />
            </li>
            <CardInput>
              <li>
                <label htmlFor="cardnumber">Número do cartão</label>
                <input className="card-number" id="cardnumber" type="number" />
              </li>
              <li>
                <label htmlFor="safetycode">CVV</label>
                <input className="cvv" id="safetycode" type="number" />
              </li>
            </CardInput>
            <CardInput>
              <li>
                <label htmlFor="expiremonth">Mês de vencimento</label>
                <input className="expires" id="expiremonth" type="number" />
              </li>
              <li>
                <label htmlFor="expireyear">CVV</label>
                <input className="expires" id="expireyear" type="number" />
              </li>
            </CardInput>
          </ul>
        </InputGroup>
        <PaymentButton className="firstButton">
          Finalizar pagamento
        </PaymentButton>
        <PaymentButton onClick={closePaymentOpenCheckout}>
          Voltar para edição de endereço
        </PaymentButton>
      </PaymentCard>
    </PaymentContainer>
  )
}

export default Payment

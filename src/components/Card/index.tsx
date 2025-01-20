import { useDispatch, useSelector } from 'react-redux'
import {
  CheckoutContainer,
  InputGroup,
  Overlay,
  CheckoutCard,
  ZipInput,
  CheckoutButton
} from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/checkout'

const Card = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)

  const dispatch = useDispatch()

  const closeCheckout = () => {
    dispatch(close())
  }

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCheckout} />
      <CheckoutCard>
        <InputGroup>
          <ul>
            <h2>Entrega</h2>
            <li>
              <label htmlFor="name">Quem irá receber?</label>
              <input id="name" type="text" />
            </li>
            <li>
              <label htmlFor="adress">Endereço</label>
              <input id="adress" type="text" />
            </li>
            <li>
              <label htmlFor="city">Cidade</label>
              <input id="city" type="text" />
            </li>
            <ZipInput>
              <div>
                <label htmlFor="zipCode">CEP</label>
                <input id="zipCode" type="text" />
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <input id="number" type="number" />
              </div>
            </ZipInput>
            <div>
              <label htmlFor="complement">Complemento(Adcional)</label>
              <input id="complement" type="text" />
            </div>
          </ul>
        </InputGroup>
        <CheckoutButton className="firstButton">
          Continuar com o pagamento
        </CheckoutButton>
        <CheckoutButton>Voltar para o carrinho</CheckoutButton>
      </CheckoutCard>
    </CheckoutContainer>
  )
}

export default Card

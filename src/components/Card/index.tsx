import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  CheckoutContainer,
  InputGroup,
  Overlay,
  CheckoutCard,
  ZipInput,
  CheckoutButton
} from './styles'
import { RootReducer } from '../../store'
import { closeCheck } from '../../store/reducers/checkout'
import { openP } from '../../store/reducers/payment'
import { open } from '../../store/reducers/cart'

const Card = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const dispatch = useDispatch()

  const closeCheckout = () => {
    dispatch(closeCheck())
  }

  const closeCheckoutAndOPenPayment = () => {
    dispatch(openP())
    dispatch(closeCheck())
  }

  const closeCheckoutOpenCart = () => {
    dispatch(closeCheck())
    dispatch(open())
  }

  const form = useFormik({
    initialValues: {
      name: '',
      adress: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      adress: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP precisa de 9 caracteres')
        .max(9, 'O CEP não pode ter mais que 9 caracteres')
        .required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <CheckoutContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCheckout} />
        <CheckoutCard>
          <InputGroup>
            <ul>
              <h2>Entrega</h2>
              <li>
                <label htmlFor="name">Quem irá receber?</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('name', form.errors.name)}</small>
              </li>
              <li>
                <label htmlFor="adress">Endereço</label>
                <input
                  id="adress"
                  type="text"
                  name="adress"
                  value={form.values.adress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('adress', form.errors.adress)}</small>
              </li>
              <li>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('city', form.errors.city)}</small>
              </li>
              <ZipInput>
                <div>
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('zipCode', form.errors.zipCode)}
                  </small>
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    type="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('number', form.errors.number)}</small>
                </div>
              </ZipInput>
              <div>
                <label htmlFor="complement">Complemento(Adcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
            </ul>
          </InputGroup>
          <CheckoutButton
            type="submit"
            onClick={closeCheckoutAndOPenPayment}
            className="firstButton"
          >
            Continuar com o pagamento
          </CheckoutButton>
          <CheckoutButton type="submit" onClick={closeCheckoutOpenCart}>
            Voltar para o carrinho
          </CheckoutButton>
        </CheckoutCard>
      </CheckoutContainer>
    </form>
  )
}

export default Card

import { useDispatch, useSelector } from 'react-redux'
import {
  InputGroup,
  Overlay,
  PaymentButton,
  PaymentCard,
  PaymentContainer,
  CardInput
} from './styles'

import { RootReducer } from '../../store'
import { closeP } from '../../store/reducers/payment'
import { openCheck } from '../../store/reducers/checkout'
import { openConfirm } from '../../store/reducers/confirm'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

import { formataPreco } from '../MenuL'

interface PaymentProps {
  valorTotal: string
}

const Payment = ({ valorTotal }: PaymentProps) => {
  const { isOpen } = useSelector((state: RootReducer) => state.payment)
  const dispatch = useDispatch()

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const closePayment = () => {
    dispatch(closeP())
  }

  const closePaymentOpenCheckout = () => {
    dispatch(closeP())
    dispatch(openCheck())
  }

  const closePaymentOpenConfirm = () => {
    dispatch(closeP())
    dispatch(openConfirm())
  }

  const form = useFormik({
    initialValues: {
      name: '',
      cardnumber: '',
      safetycode: '',
      expiremonth: '',
      expireyear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa de no mínimo 5 caracteres')
        .required('Campo obrigatório'),
      cardnumber: Yup.string().required('Campo obrigatório'),
      safetycode: Yup.string()
        .min(3, 'O código de segurança deve ter 3 caracteres')
        .max(3, 'O código de segurança só pode ter 3 caracteres')
        .required('Campo obrigatório'),
      expiremonth: Yup.string().required('Campo obrigatório'),
      expireyear: Yup.string().required('Campo onrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        payment: {
          card: {
            name: values.name,
            number: values.cardnumber,
            code: Number(values.safetycode),
            expires: {
              month: Number(values.expiremonth),
              year: Number(values.expireyear)
            }
          }
        },
        products: []
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        <PaymentContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closePayment} />
          <PaymentCard>
            <InputGroup>
              <ul>
                <h2>Pagamento - Valor a pagar {valorTotal}</h2>
                <li>
                  <label htmlFor="name">Nome no cartão</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{(getErrorMessage('name'), form.errors.name)}</small>
                </li>
                <CardInput>
                  <li>
                    <label htmlFor="cardnumber">Número do cartão</label>
                    <input
                      className="card-number"
                      id="cardnumber"
                      type="number"
                      name="cardnumber"
                      value={form.values.cardnumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {(getErrorMessage('cardnumber'), form.errors.cardnumber)}
                    </small>
                  </li>
                  <li>
                    <label htmlFor="safetycode">CVV</label>
                    <input
                      className="cvv"
                      id="safetycode"
                      type="number"
                      name="safetycode"
                      value={form.values.safetycode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {(getErrorMessage('safetycode'), form.errors.safetycode)}
                    </small>
                  </li>
                </CardInput>
                <CardInput>
                  <li>
                    <label htmlFor="expiremonth">Mês de vencimento</label>
                    <input
                      className="expires"
                      id="expiremonth"
                      type="number"
                      name="expiremonth"
                      value={form.values.expiremonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {
                        (getErrorMessage('expiremonth'),
                        form.errors.expiremonth)
                      }
                    </small>
                  </li>
                  <li>
                    <label htmlFor="expireyear">Ano de vencimento</label>
                    <input
                      className="expires"
                      id="expireyear"
                      type="number"
                      name="expireyear"
                      value={form.values.expireyear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {(getErrorMessage('expireyear'), form.errors.expireyear)}
                    </small>
                  </li>
                </CardInput>
              </ul>
            </InputGroup>
            <PaymentButton
              onClick={closePaymentOpenConfirm}
              className="firstButton"
            >
              Finalizar pagamento
            </PaymentButton>
            <PaymentButton onClick={closePaymentOpenCheckout}>
              Voltar para edição de endereço
            </PaymentButton>
          </PaymentCard>
        </PaymentContainer>
      </form>
    </>
  )
}

export default Payment

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'

import {
  open,
  openPayment,
  paymentConfirm,
  closeAndFinish,
  openDelivery
} from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { pricesFormat } from '../Home/RestaurantList'

import * as S from './styles'

const Checkout = () => {
  const { checkoutIsOpen, paymentIsOpen, confirmIsOpen, order } = useSelector(
    (state: RootReducer) => state.cart
  )

  const navigate = useNavigate()

  const [purchase, { isSuccess, data, reset }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const goBackToCart = () => {
    dispatch(open())
  }

  const goBackToCheckout = () => {
    dispatch(openDelivery())
  }

  const goToConfirmation = () => {
    if (
      form.values.cardName &&
      form.values.cardCode &&
      form.values.cardNumber &&
      form.values.expireMonth &&
      form.values.expireYear
    ) {
      dispatch(paymentConfirm())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  const getTotalPrice = () => {
    return order.reduce((acumulator, actualValue) => {
      return (acumulator += actualValue.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      houseNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      address: Yup.string().required(),
      city: Yup.string().required(),
      zipCode: Yup.string().required(),
      complement: Yup.string(),
      cardName: Yup.string().required(),
      cardNumber: Yup.string().required(),
      cardCode: Yup.string().required(),
      expireMonth: Yup.string().required(),
      expireYear: Yup.string().required()
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        },
        products: order.map((o) => ({
          id: o.id,
          price: o.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const paymentOpen = () => {
    if (
      form.values.name &&
      form.values.address &&
      form.values.city &&
      form.values.zipCode &&
      form.values.houseNumber
    ) {
      dispatch(openPayment())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  const finish = () => {
    dispatch(closeAndFinish())
    reset()
    navigate('/')
  }

  return (
    <>
      <S.CheckoutContainer onSubmit={form.handleSubmit}>
        {isSuccess && data ? (
          <S.ConfirmContainer className={confirmIsOpen ? 'open-confirm' : ''}>
            <h4>Pedido realizado - {data.orderId}</h4>
            <S.ConfirmText className="marginBottom">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </S.ConfirmText>
            <S.ConfirmText className="marginBottom">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </S.ConfirmText>
            <S.ConfirmText className="marginBottom">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </S.ConfirmText>
            <S.ConfirmText>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.ConfirmText>
            <button type="button" onClick={finish}>
              Concluir
            </button>
          </S.ConfirmContainer>
        ) : (
          <>
            <S.DeliveryContainer
              className={checkoutIsOpen ? 'open-delivery' : 'open-payment'}
            >
              <h4>Entrega</h4>
              <label htmlFor="name">Quem irá receber</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('name') ? 'error' : ''}
              />
              <label className="marginTop" htmlFor="address">
                Endereço
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('address') ? 'error' : ''}
              />
              <label className="marginTop" htmlFor="city">
                Cidade
              </label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('city') ? 'error' : ''}
              />
              <div className="marginTop">
                <div>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="99999 - 999"
                  />
                </div>
                <div>
                  <label htmlFor="houseNumber">Número</label>
                  <input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    value={form.values.houseNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('houseNumber') ? 'error' : ''}
                  />
                </div>
              </div>
              <label className="marginTop" htmlFor="complement">
                Complemento
              </label>
              <input type="text" id="complement" />
              <button type="button" onClick={paymentOpen}>
                Continuar com o pagamento
              </button>
              <button
                type="button"
                className="marginTop"
                onClick={goBackToCart}
              >
                Voltar para o carrinho
              </button>
            </S.DeliveryContainer>
            <S.PaymentContainer
              className={paymentIsOpen ? 'open-payment' : 'close-payment'}
            >
              <h4>Pagamento - Valor a pagar {pricesFormat(getTotalPrice())}</h4>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                type="text"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
              <div className="marginTop">
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </div>
                <div>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    id="cardCode"
                    type="text"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </div>
              </div>
              <div className="marginTop">
                <div>
                  <label htmlFor="expireMonth">Mês de vencimento</label>
                  <InputMask
                    id="expireMonth"
                    type="text"
                    name="expireMonth"
                    value={form.values.expireMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expireMonth') ? 'error' : ''}
                    mask="99"
                  />
                </div>
                <div>
                  <label htmlFor="expireYear">Ano de vencimento</label>
                  <InputMask
                    id="expireYear"
                    type="text"
                    name="expireYear"
                    value={form.values.expireYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expireYear') ? 'error' : ''}
                    mask="99"
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={goToConfirmation}
                disabled={form.isSubmitting}
              >
                Finalizar pagamento
              </button>
              <button
                type="button"
                className="marginTop"
                onClick={goBackToCheckout}
              >
                Voltar para a edição de endereço
              </button>
            </S.PaymentContainer>
          </>
        )}
      </S.CheckoutContainer>
    </>
  )
}

export default Checkout

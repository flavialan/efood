import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, openDelivery } from '../../store/reducers/cart'
import { pricesFormat } from '../Home/RestaurantList'
import Checkout from '../Checkout'

import * as S from './styles'

const Cart = () => {
  const { isOpen, order, cartIsOPen } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return order.reduce((acumulator, actualValue) => {
      return (acumulator += actualValue.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goTocheckout = () => {
    dispatch(openDelivery())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Sidebar>
        {order.length > 0 ? (
          <>
            <S.Cart className={cartIsOPen ? '' : 'close-cart'}>
              <ul>
                {order.map((o) => (
                  <S.CartItem key={o.id}>
                    <img src={o.foto} />
                    <div>
                      <h3>{o.nome}</h3>
                      <p>{pricesFormat(o.preco)}</p>
                    </div>
                    <button type="button" onClick={() => removeItem(o.id)} />
                  </S.CartItem>
                ))}
              </ul>
              <S.Prices>
                <p>Valor total</p>
                <p>{pricesFormat(getTotalPrice())}</p>
              </S.Prices>
              <S.Button onClick={goTocheckout}>
                Continuar com a entrega
              </S.Button>
            </S.Cart>
            <Checkout />
          </>
        ) : (
          <p className="empty-cart">
            O carrinho está vazio. Adicione pelo menos um produto para continuar
            com a compra.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

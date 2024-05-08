import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { pricesFormat } from '../Home/RestaurantList'

const Cart = () => {
  const { isOpen, order } = useSelector((state: RootReducer) => state.cart)

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

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Sidebar>
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
        <S.Button>Continuar com a entrega</S.Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

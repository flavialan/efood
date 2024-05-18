import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { reduceDescription } from '../../Home/Restaurant'
import { pricesFormat } from '../../Home/RestaurantList'
import { add, open } from '../../../store/reducers/cart'

import close from '../../../assets/images/close.png'

import * as S from './styles'

type Props = {
  productId: number
  productTitle: string
  productDescription: string
  productImage: string
  productServe: string
  productPrice: number
  order: Order
}

const ProductCard = ({
  productTitle,
  productDescription,
  productImage,
  productServe,
  productPrice,
  order
}: Props) => {
  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(order))
    setShowModal(false)
    dispatch(open())
  }

  return (
    <>
      <S.Card>
        <S.CardImg src={productImage} alt={productTitle} />
        <S.Title>{productTitle}</S.Title>
        <S.Description>{reduceDescription(productDescription)}</S.Description>
        <S.Button onClick={() => setShowModal(true)}>Mais detalhes</S.Button>
      </S.Card>
      <S.Modal className={showModal ? 'visible' : ''}>
        <S.ModalContent>
          <S.ModalImage src={productImage} alt={productDescription} />
          <S.ModalContainer>
            <h4>{productTitle}</h4>
            <p>{productDescription}</p>
            <p>Serve: {productServe}</p>
            <S.Button onClick={addToCart}>
              Adicionar ao carrinho - {pricesFormat(productPrice)}
            </S.Button>
          </S.ModalContainer>
          <S.CloseButton
            src={close}
            alt="Close"
            onClick={() => setShowModal(false)}
          />
        </S.ModalContent>
        <div onClick={() => setShowModal(false)} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default ProductCard

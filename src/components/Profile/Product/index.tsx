import { useState } from 'react'
import { reduceDescription } from '../../Home/Restaurant'
import * as S from './styles'
import { pricesFormat } from '../../Home/RestaurantList'
import close from '../../../assets/images/close.png'

type Props = {
  productId: number
  productTitle: string
  productDescription: string
  productImage: string
  productServe: string
  productPrice: number
}

const ProductCard = ({
  productDescription,
  productImage,
  productTitle,
  productServe,
  productPrice
}: Props) => {
  const [showModal, setShowModal] = useState(false)
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
          <S.ModalImage src={productImage} alt={productTitle} />
          <S.ModalContainer>
            <h4>{productTitle}</h4>
            <p>{productDescription}</p>
            <p>Serve: {productServe}</p>
            <S.Button>
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

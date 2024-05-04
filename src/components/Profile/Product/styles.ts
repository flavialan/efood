import styled from 'styled-components'
import { colors } from '../../../styles'

export const Card = styled.div`
  background-color: ${colors.darkPink};
  color: ${colors.pink};
  padding: 8px;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardImg = styled.img`
  display: flex;
  width: 304px;
  height: 167px;
  margin-bottom: 8px;
  object-fit: cover;
  object-position: center;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
`

export const Button = styled.button`
  background-color: ${colors.pink};
  width: 100%;
  border: none;
  padding: 4px;
  color: ${colors.darkPink};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  max-height: 344px;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: ${colors.darkPink};
  display: flex;
  color: ${colors.white};

  header {
    display: inline-flex;
  }
`
export const ModalContainer = styled.div`
  max-width: 656px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 32px;
  margin-bottom: 32px;

  ${Button} {
    width: 218px;
    height: 24px;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`
export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  display: block;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 24px;
  object-fit: cover;
`

export const CloseButton = styled.img`
  max-width: 16px;
  max-height: 16px;
  width: 100%;
  margin: 8px;
  cursor: pointer;
`

import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import delete_button from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.darkPink};
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 70%;
  }

  .empty-cart {
    font-size: 18px;
    color: ${colors.pink};
    text-align: center;
    line-height: 22px;
  }
`

export const Cart = styled.div`
  &.close-cart {
    display: none;
  }
`
export const CartCheckout = styled.div`
  display: none;

  &.open-checkout {
    display: flex;
    flex-direction: column;
    color: ${colors.pink};
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.pink};
  padding: 8px 0 12px 8px;
  position: relative;
  list-style: none;
  width: 100%;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    margin-right: 12px;
    object-fit: cover;
  }

  h3 {
    color: ${colors.darkPink};
    font-weight: 900;
    font-size: 18px;
    display: block;
    margin-bottom: 16px;
  }

  p {
    color: ${colors.darkPink};
    font-weight: 400;
    font-size: 14px;
    display: block;
    line: height: 22px;
  }

  button {
    background-image: url(${delete_button});
    height: 16px;
    width: 16px;
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 12px;
    right: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.div`
  color: ${colors.lightPink};
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.lightPink};
  color: ${colors.darkPink};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  border: none;
  padding: 4px 0;
  cursor: pointer;
`

import styled from 'styled-components'
import { colors } from '../../styles'

export const PaymentContainer = styled.div`
  &.close-payment {
    display: none;
  }

  &.open-payment {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      width: 100%;

      div {
        display: block;
        margin-right: 32px;

        input {
          max-width: 155px;
        }
      }
    }
`

export const DeliveryContainer = styled.div`
  &.open-delivery {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      width: 100%;

      div {
        display: block;
        margin-right: 32px;

        input {
          max-width: 155px;
        }
      }
    }
  }

  &.open-payment {
    display: none;
  }
`
export const CheckoutContainer = styled.form`
  color: ${colors.pink};

  h4 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }

  label {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input {
    border: none;
    height: 32px;
    background-color: ${colors.pink};
    padding-left: 8px;

    &.error {
      border: 1px solid red;
    }
  }

  .marginTop {
    margin-top: 8px;
  }

  button {
    margin-top: 24px;
    background-color: ${colors.pink};
    border: none;
    cursor: pointer;
    height: 24px;
    color: ${colors.darkPink};
    font-weight: 700;
    font-size: 14px;
  }
`

export const ConfirmContainer = styled.div`
  display: none;

  &.open-confirm {
    display: flex;
    flex-direction: column;
  }
`

export const ConfirmText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  &.marginBottom {
    margin-bottom: 24px;
  }
`

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Restaurants[]
  isOpen: boolean
  order: Order[]
  checkoutIsOpen: boolean
  paymentIsOpen: boolean
  confirmIsOpen: boolean
  cartIsOPen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  order: [],
  checkoutIsOpen: false,
  paymentIsOpen: false,
  confirmIsOpen: false,
  cartIsOPen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Order>) => {
      const product = state.order.find((p) => p.id === action.payload.id)

      if (!product) {
        state.order.push(action.payload)
      } else {
        alert('O pedido já se encontra no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.order = state.order.filter((p) => p.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
      state.cartIsOPen = true
      state.checkoutIsOpen = false
      state.paymentIsOpen = false
      state.confirmIsOpen = false
    },
    close: (state) => {
      state.isOpen = false
    },
    openDelivery: (state) => {
      state.checkoutIsOpen = true
      state.paymentIsOpen = false
      state.confirmIsOpen = false
      state.cartIsOPen = false
    },
    openPayment: (state) => {
      state.paymentIsOpen = true
      state.confirmIsOpen = false
      state.checkoutIsOpen = false
      state.cartIsOPen = false
    },
    paymentConfirm: (state) => {
      state.confirmIsOpen = true
      state.paymentIsOpen = false
      state.checkoutIsOpen = false
      state.cartIsOPen = false
    },
    closeAndFinish: (state) => {
      state.order = []
      state.paymentIsOpen = false
      state.isOpen = false
      state.checkoutIsOpen = false
      state.confirmIsOpen = false
      state.cartIsOPen = false
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  openDelivery,
  openPayment,
  paymentConfirm,
  closeAndFinish
} = cartSlice.actions
export default cartSlice.reducer

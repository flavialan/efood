import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order, Restaurants } from '../../pages/Home'

type CartState = {
  items: Restaurants[]
  isOpen: boolean
  order: Order[]
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  order: []
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
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer

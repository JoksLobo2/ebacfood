import { createSlice } from '@reduxjs/toolkit'

type PaymentState = {
  isOpen: boolean
}

const initialState: PaymentState = {
  isOpen: false
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    openP: (state) => {
      state.isOpen = true
    },
    closeP: (state) => {
      state.isOpen = false
    }
  }
})

export const { closeP, openP } = paymentSlice.actions
export default paymentSlice.reducer

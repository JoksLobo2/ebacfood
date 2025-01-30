import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  isOpen: boolean
}

const initialState: CheckoutState = {
  isOpen: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openCheck: (state) => {
      state.isOpen = true
    },
    closeCheck: (state) => {
      state.isOpen = false
    }
  }
})

export const { closeCheck, openCheck } = checkoutSlice.actions
export default checkoutSlice.reducer

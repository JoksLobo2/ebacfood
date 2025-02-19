import { createSlice } from '@reduxjs/toolkit'

type ConfirmState = {
  isOpen: boolean
}

const initialState: ConfirmState = {
  isOpen: false
}

const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    openConfirm: (state) => {
      state.isOpen = true
    },
    closeConfirm: (state) => {
      state.isOpen = false
    }
  }
})

export const { closeConfirm, openConfirm } = confirmSlice.actions
export default confirmSlice.reducer

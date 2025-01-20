import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'
import checkoutreducer from './reducers/checkout'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutreducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

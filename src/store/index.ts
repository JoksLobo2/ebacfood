import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'
import checkoutreducer from './reducers/checkout'
import paymentreducer from './reducers/payment'
import confirmreducer from './reducers/confirm'
import orderReducer from './reducers/order'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutreducer,
    payment: paymentreducer,
    confirm: confirmreducer,
    order: orderReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

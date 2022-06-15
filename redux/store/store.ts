import { configureStore } from '@reduxjs/toolkit'
import walletReducer from '../features/wallet/walletSlice'
import sidebarReducer from '../features/sidebar/sidebarSlice'

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    sidebar: sidebarReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

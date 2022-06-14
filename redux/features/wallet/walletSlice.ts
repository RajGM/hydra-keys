import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    cluster: 'devnet'
  },
  reducers: {
    changeCluster: (state, action) => {
      state.cluster = action.payload
    }
  }
})

export const selectCluster = (state: RootState) => state.wallet.cluster
export const { changeCluster } = walletSlice.actions

export default walletSlice.reducer

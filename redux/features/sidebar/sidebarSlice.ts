import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store/store'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    active: false
  },
  reducers: {
    toggleSidebar: (state) => {
      state.active = !state.active
    }
  }
})

export const selectSidebarActive = (state: RootState) => state.sidebar.active
export const { toggleSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer

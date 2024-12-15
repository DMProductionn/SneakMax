import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ModalsState {
  modalShowProduct: boolean,
  modalShowCart: boolean,
  modalShowPlacingOrder: boolean
}

const initialState: ModalsState = {
  modalShowProduct: false,
  modalShowCart: false,
  modalShowPlacingOrder: false,
}

export const ModalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModalShowProduct: (state, action: PayloadAction<boolean>) => {
      state.modalShowProduct = action.payload
    },
    setModalShowCart: (state, action: PayloadAction<boolean>) => {
      state.modalShowCart = action.payload
    },
    setModalShowPlacingOrder: (state, action: PayloadAction<boolean>) => {
      state.modalShowPlacingOrder = action.payload
    }
  },
})

export const { setModalShowProduct, setModalShowCart, setModalShowPlacingOrder } = ModalsSlice.actions

export default ModalsSlice.reducer
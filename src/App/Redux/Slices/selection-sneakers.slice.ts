import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISelectionSneakers } from '../../Types/SelectionSneakers/selection-sneakers.type'
import { addSelectionSneakers } from '../../services/selection-sneakers.service'

interface SelectionSneakersState {
  selectionSneakers: ISelectionSneakers | null
  loading: boolean
  error: string | null
  success: boolean
  types: string[]
  sizes: string[]
}

const initialState: SelectionSneakersState = {
  selectionSneakers: null,
  loading: false,
  error: null,
  success: false,
  types: [],
  sizes: [],
}

export const SelectionSneakersSlice = createSlice({
  name: 'selection_sneakers',
  initialState,
  reducers: {
    setSelectionSneakers: (state, action: PayloadAction<ISelectionSneakers>) => {
      state.selectionSneakers = { ...state.selectionSneakers, ...action.payload };
    },
    setSelectionTypes: (state, action: PayloadAction<string[]>) => {
      state.types = action.payload;
    },
    setSelectionSizes: (state, action: PayloadAction<string[]>) => {
      state.sizes = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(addSelectionSneakers.fulfilled, (state) => {
      state.success = true
      state.loading = false
    });
    builder.addCase(addSelectionSneakers.pending, (state) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(addSelectionSneakers.rejected, (state, action) => {
      state.error = action.error.message as string
      state.loading = false
    })
  },
})

export const { setSelectionSneakers, setSelectionTypes, setSelectionSizes } = SelectionSneakersSlice.actions

export default SelectionSneakersSlice.reducer
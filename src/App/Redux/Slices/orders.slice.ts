import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addOrder } from '../../services/order.service';

interface OrdersState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: OrdersState = {
  loading: false,
  error: null,
  success: false,
}

export const OrdersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(addOrder.fulfilled, (state) => {
      state.loading = false;
      state.success = true
    });
    builder.addCase(addOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.loading = false;
    });


  },
})

export const { setSuccess } = OrdersSlice.actions

export default OrdersSlice.reducer
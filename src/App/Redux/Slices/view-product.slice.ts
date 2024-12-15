import { createSlice } from '@reduxjs/toolkit';
import { getProduct } from '../../services/products.service';
import { TypeProduct } from '../../Types/Product/product.type';

interface ViewProductState {
  product: TypeProduct | null;
  loading: boolean;
  error: string | null;
}

const initialState: ViewProductState = {
  product: null,
  loading: false,
  error: null,
};

export const ViewProductSlice = createSlice({
  name: 'ViewProduct',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.loading = false;
    });
  },
});

export default ViewProductSlice.reducer;

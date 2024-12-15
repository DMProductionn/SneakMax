import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeProduct } from '../../Types/Product/product.type';
import { addProductToCart, deleteProductToCart, getCart } from '../../services/cart.service';

interface CartState {
  loading: boolean;
  cart: TypeProduct[];
  error: string | null;
  success: boolean;
}

const initialState: CartState = {
  loading: false,
  error: null,
  cart: [],
  success: false
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    });
    builder.addCase(getCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.loading = false;
    });


    builder.addCase(deleteProductToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProductToCart.fulfilled, (state) => {
      state.loading = false;
    });
    
    
    builder.addCase(addProductToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addProductToCart.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(addProductToCart.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setSuccess } = CartSlice.actions;

export default CartSlice.reducer;

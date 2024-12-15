import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProducts, getProductsWithFilter } from '../../services/products.service';
import { IProducts } from '../../Types/Product/product.type';
import { IFilterParams } from '../../Types/FilterParam/filter-param.type';

interface ProductsState {
  products: null | IProducts;

  filterParams: null | IFilterParams;
  applyFilters: boolean;
  selectedGender: null | 'женский' | 'мужской';
  selectedSize: null | number;
  selectedPrice: number[];

  limit: number;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: null,

  filterParams: null,
  applyFilters: false,
  selectedGender: null, 
  selectedSize: null,
  selectedPrice : [0, 60000],

  limit: 6,
  loading: false,
  error: null,
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increaseLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    addFilterParams: (state, action: PayloadAction<IFilterParams>) => {
      state.filterParams = { ...state.filterParams, ...action.payload };
    },
    setApplyFilters: (state, action: PayloadAction<boolean>) => {
      state.applyFilters = action.payload;
    },
    setSelectedGender: (state, action: PayloadAction<null | 'женский' | 'мужской'>) => {
      state.selectedGender = action.payload;
    },
    setSelectedSize: (state, action: PayloadAction<null | number>) => {
      state.selectedSize = action.payload;
    },
    setSelectedPrice: (state, action: PayloadAction<number[]>) => {
      state.selectedPrice = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.loading = false;
    });



    builder.addCase(getProductsWithFilter.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getProductsWithFilter.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProductsWithFilter.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.loading = false;
    });

  },
});

export const { increaseLimit, addFilterParams, setApplyFilters, setSelectedGender, setSelectedSize, setSelectedPrice } = ProductsSlice.actions;

export default ProductsSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../Api/http';
import { ProductInCart } from '../Types/Cart/cart.type';

export const getCart = createAsyncThunk('data/getCart', async (_, { rejectWithValue }) => {
  try {
    const { data } = await http.get('/cart');
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const addProductToCart = createAsyncThunk(
  'data/addProductToCart',
  async (product: ProductInCart, { rejectWithValue }) => {
    try {
      const { data } = await http.post('/cart', product);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const deleteCart = createAsyncThunk(
  'data/deleteCart',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await http.patch('/cart', []);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const deleteProductToCart = createAsyncThunk(
  'data/deleteProductToCart',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await http.delete(`/cart/${id}`);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

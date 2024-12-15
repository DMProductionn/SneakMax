import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../Api/http';
import { IOrder } from '../Types/Orders/orders.type';

export const addOrder = createAsyncThunk(
  'data/addOrder',
  async (order: IOrder, { rejectWithValue }) => {
    try {
      const { data } = await http.post('/orders', order);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

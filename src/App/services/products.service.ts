import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../Api/http';
import { IFilterParams } from '../Types/FilterParam/filter-param.type';

export const getProducts = createAsyncThunk(
  'data/getProducts',

  async (limit: number, { rejectWithValue }) => {
    try {
      const { data } = await http.get(`/products?limit=${limit}`);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const getProduct = createAsyncThunk(
  'data/getProduct',

  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await http.get(`/products/${id}`);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const getProductsWithFilter = createAsyncThunk(
  'data/getProductsWithFilter',

  async (
    { filterParams, limit }: { filterParams: IFilterParams; limit: number },
    { rejectWithValue },
  ) => {
    const { gender, sizes, priceFrom, priceTo } = filterParams;
    const genderParam = gender ? `gender=${gender}` : '';
    const sizesParam = sizes ? `sizes[]=${sizes}` : '';
    const priceParam = `price[from]=${priceFrom}&price[to]=${priceTo}`;
    const limitParam = `limit=${limit}`;
    try {
      const { data } = await http.get(
        `/products?${genderParam}&${sizesParam}&${priceParam}&${limitParam}`,
      );
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

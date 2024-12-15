import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../Api/http';

export const getTeam = createAsyncThunk('data/getTeam', async (_, { rejectWithValue }) => {
  try {
    const { data } = await http.get('/team');    
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

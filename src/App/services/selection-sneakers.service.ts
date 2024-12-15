import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISelectionSneakers } from '../Types/SelectionSneakers/selection-sneakers.type';
import http from '../Api/http';

export const addSelectionSneakers =
  createAsyncThunk(
    'data/addSelectionSneakers',
    async (finalMessage: ISelectionSneakers, { rejectWithValue }) => {
      try {
        const { data } = await http.post('/selection_sneakers', finalMessage);
        return data;
      } catch (error) {
        if (error instanceof Error) {
          return rejectWithValue(error.message);
        }
      }
    },
  );

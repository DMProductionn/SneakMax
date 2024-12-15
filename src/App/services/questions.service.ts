import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../Api/http';
import { IQuestionSender } from '../Types/QuestionSender/question-sender.type';

export const addQuestion = createAsyncThunk(
  'data/addQuestion',
  async (questionSender: IQuestionSender, { rejectWithValue }) => {
    try {
      const { data } = await http.post('/questions', questionSender);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

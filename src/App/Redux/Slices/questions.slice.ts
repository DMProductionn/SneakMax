import { createSlice } from '@reduxjs/toolkit'
import { addQuestion } from '../../services/questions.service';

interface QuestionsState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: QuestionsState = {
  loading: false,
  error: null,
  success: false,
}

export const QuestionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addQuestion.fulfilled, (state) => {
      state.loading = false;
      state.success = true
    });
    builder.addCase(addQuestion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addQuestion.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.loading = false;
    });


  },
})


export default QuestionsSlice.reducer
import { createSlice } from '@reduxjs/toolkit';
import { IEmployee } from '../../Types/Team/team.type';
import { getTeam } from '../../services/team.service';

interface TeamState {
  team: null | IEmployee[];
  loading: boolean;
  error: string | null;
}

const initialState: TeamState = {
  team: null,
  loading: false,
  error: null,
};

export const TeamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTeam.fulfilled, (state, action) => {
      state.team = action.payload;
      state.loading = false;
    });
    builder.addCase(getTeam.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTeam.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.loading = false;
    });
  },
});

export default TeamSlice.reducer;

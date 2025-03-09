import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProgressState {
  progress: number;
}

const initialState: ProgressState = {
  progress: 0,
};

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    progress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { progress } = progressSlice.actions;

export default progressSlice.reducer;

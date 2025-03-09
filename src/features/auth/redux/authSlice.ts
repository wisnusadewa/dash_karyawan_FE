import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface User {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
}

const userString = localStorage.getItem('user');
const initialState: AuthState = {
  user: userString ? JSON.parse(localStorage.getItem('user')!) : null,
  accessToken: localStorage.getItem('accessToken') || null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUserRedux: (state, action: PayloadAction<{ accessToken: string; user: User }>) => {
      const { accessToken, user } = action.payload;
      console.log('Data masuk ke Redux:', action.payload);

      state.accessToken = accessToken;
      state.user = user;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logoutUserRedux: (state) => {
      state.accessToken = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
    },
  },
});

export const { loginUserRedux, logoutUserRedux } = authSlice.actions;

export default authSlice.reducer;

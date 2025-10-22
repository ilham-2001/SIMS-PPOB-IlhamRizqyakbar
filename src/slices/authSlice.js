import { createSlice } from '@reduxjs/toolkit';

const session = JSON.parse(localStorage.getItem('session'));

const initialState = {
  user: session?.email || null,
  token: session?.token || null,
  isAuthenticated: !!session?.token,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

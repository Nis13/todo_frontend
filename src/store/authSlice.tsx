import { createSlice } from '@reduxjs/toolkit';
import { getToken } from '../utils/token';

const initialState = {
  token: getToken(),
  isAuthenticated: !!getToken()
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.accessToken;
      state.isAuthenticated = true;
      sessionStorage.setItem('token', action.payload.accessToken);
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem('token');
    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

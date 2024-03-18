import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: !!localStorage.getItem('token'),
  retrievedData: '',
  loggedIn: Boolean(localStorage.getItem('token')),
   email:localStorage.getItem('email'),
   
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateData(state, action) {
      state.retrievedData = action.payload;
    },
    logOutHandler(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('profileData');
      state.loggedIn = false; // Always set loggedIn to false on logout
    },
    logInHandler(state) {
      state.loggedIn = true; // Set loggedIn to true on login
    },
  },
});

export const { updateData, logOutHandler, logInHandler } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// loginSlice.js
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    setLoggedInUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});


export const { setLoggedInUser, setLoggedOut } = loginSlice.actions;
export default loginSlice.reducer;
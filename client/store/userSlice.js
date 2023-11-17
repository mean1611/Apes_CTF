import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
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

export const { setLoggedInUser, setLoggedOut } = userSlice.actions;
export default userSlice.reducer;

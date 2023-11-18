import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  email: null,
  user_role_id : 1,
};

const reducers = {
  setAccount: (_state, { payload }) => {
      return payload
  }
}

export const modal = createSlice({
  name: 'account',
  initialState,
  reducers
})

export const { setAccount } = modal.actions
export default modal.reducer
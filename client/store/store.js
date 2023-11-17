import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './userSlice'; // เปลี่ยนเส้นทางตามไฟล์ Slice ที่คุณสร้าง

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
const initialState = {
    user: null, // สถานะผู้ใช้ที่มีค่าเริ่มต้นเป็น null
    user_role_id: null, // สถานะ user_role_id
    username: null, // สถานะชื่อผู้ใช้
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.payload,
        };
      case "SET_USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      case "CHECK_USER_ROLE":
        return {
          ...state,
          user_role_id: action.payload,
        };
      case "SET_LOGGED_IN_USER":
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
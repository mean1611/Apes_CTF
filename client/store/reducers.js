import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from './actions';

const initialState = {
  loading: false,
  user: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export const setUsername = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username,
  };
};

export const setLoggedInUser = (user) => {
  return {
    type: "SET_LOGGED_IN_USER",
    payload: user,
  };
};

export const checkUserRole = (user_role_id) => {
    return {
      type: "CHECK_USER_ROLE",
      payload: user_role_id,
    };
  };

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
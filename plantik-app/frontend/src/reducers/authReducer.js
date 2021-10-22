import { types } from "../types/types";
import { AUTH, LOGOUT } from "../types/types";

const initialState = {
  checking: true,
  // uid: null,
  // name: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };

    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };

    case types.authLogout:
      return {
        checking: false,
      };

    case AUTH:
      // console.log(action?.data);
      localStorage.setItem('profile', JSON.stringify({...action?.data}))
      return {...state, authData: action?.data};

    default:
      return state;
  }
};

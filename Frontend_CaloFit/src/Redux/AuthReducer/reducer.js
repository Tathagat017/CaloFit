import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  auth: false,
  token: "",
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        auth: true,
        token: payload,
      };
    }
    case LOGIN_FAILURE: {
      return { ...state, isError: true };
    }
    case LOGOUT_SUCCESS: {
      return initialState;
    }

    default:
      return state;
  }
};

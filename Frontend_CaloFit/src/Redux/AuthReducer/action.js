import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";
import axios from "axios";
export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`https://calofitbackend.cyclic.app/users/login`, userData)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

const logoutAction = () => {
  return { type: LOGOUT_SUCCESS };
};

export const handleLogoutRedux = () => async (dispatch) => {
  try {
    dispatch(logoutAction());
  } catch (err) {
    console.log(err);
  }
};

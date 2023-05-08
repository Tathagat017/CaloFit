import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"
import axios from 'axios';
export const login = (userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
  return  axios.post("https://calofit-backend-deployment.onrender.com/users/login", userData).then((res)=>{
        console.log(res)
    dispatch({type:LOGIN_SUCCESS, payload:res.data.token})
    })
    .catch((err)=>{
    dispatch({type:LOGIN_FAILURE})
    })
}
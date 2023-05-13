
import axios from "axios";
import { DELETE_USER, EDIT_USER, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCESS } from "./actionType";
// import { useDispatch } from "react-redux";
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSucess = (users) => {
  return {
    type: FETCH_USERS_SUCESS,
    payload: users
  };
};

export const fetchUsersFailure = (errors) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: errors
  };
};

export const removeUser = (_id) => {
  return {
    type: DELETE_USER,
    payload: _id
  };
};

export const editUser = (_id) => {
  return {
    type: EDIT_USER,
    payload: _id
  };
};
//ADD FUNCTION TO DELETE USER_REDUCER
export const deleteUser = (_id)=>(dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .delete(`http://localhost:8080/users/${_id}`)
      .then((response) => {
        dispatch(removeUser(_id));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
        dispatch(fetchUsersFailure(errorMsg));
      });
};

//add function to edit the user info

export const updateUser = (data)=>(dispatch) => {
    axios
      .put(`http://localhost:8080/users/${data._id}`, data)
      .then((response) => {
        dispatch(editUser(data._id));
        dispatch(fetchUsers());
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg)
        dispatch(fetchUsersFailure(errorMsg));
      });
};

// create function to fetch users from api
export const fetchUsers =()=>(dispatch)=>{
  // console.log("yes")
          dispatch(fetchUsersRequest);
          axios.get('http://localhost:8080/users/')
            .then((response) => {
              console.log(response.data)
              const users = response.data;
              dispatch(fetchUsersSucess(users))
            })
            .catch(error => {
              const errorMsg = error.message
              console.log(errorMsg)
              dispatch(fetchUsersFailure(errorMsg))
            })

};

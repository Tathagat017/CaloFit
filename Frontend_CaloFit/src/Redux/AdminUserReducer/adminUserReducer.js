import { DELETE_USER, EDIT_USER, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCESS } from "./actionType"


// initialize state
const initialState = {
    loading:false, // for loading spinner
    users:[],
    error:'',
    editing:false
}

export const reducer =(state =initialState, action) =>{

    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:false
            }
            
        case FETCH_USERS_SUCESS:
            return{
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        case DELETE_USER:
            return{
                ...state,
                users:state.users.filter(user => user._id !==action.payload)
            }
            case EDIT_USER:
                return{
                    ...state,
                    users:state.users.map((user)=>user._id === action.payload ? {
                        ...user,editing:!user.editing
                    }:user)
                    
                }

        default: return state
    }
}



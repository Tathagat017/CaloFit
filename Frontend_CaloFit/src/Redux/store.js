import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as authreducer} from "./AuthReducer/reducer"
import {reducer as adminUserReducer}from './AdminUserReducer/adminUserReducer'
import thunk from 'redux-thunk'
const root_Reducer = combineReducers({
    authreducer,
    users:adminUserReducer
}
)
export const store = legacy_createStore(root_Reducer, applyMiddleware(thunk))
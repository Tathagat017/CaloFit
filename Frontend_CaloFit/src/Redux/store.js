import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as authreducer} from "./AuthReducer/reducer"
import thunk from 'redux-thunk'
const root_Reducer = combineReducers({
    authreducer
}
)
export const store = legacy_createStore(root_Reducer, applyMiddleware(thunk))
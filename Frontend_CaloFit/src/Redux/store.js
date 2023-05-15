import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authreducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";
import { reducer as adminReducer } from "./AdminUserReducer/adminUserReducer";
const root_Reducer = combineReducers({
  authreducer,
  adminReducer,
});
export const store = legacy_createStore(root_Reducer, applyMiddleware(thunk));
